import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { query } from './db/config.js';
import runMigrations from './db/migrate.js';
import seedDatabase from './db/seed.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const corsOrigins = process.env.CORS_ORIGIN?.split(',') || ['*'];
app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Helper function to select language-specific fields
function selectLanguageFields(row, lang = 'en') {
  const isVietnamese = lang === 'vi' || lang === 'vn';

  return {
    id: row.id,
    name: isVietnamese ? row.name_vi : row.name_en,
    scientific_name: row.scientific_name,
    category: row.category,
    ...(row.growing_season && { growing_season: row.growing_season }),
    ...(row.typical_growth_days && { typical_growth_days: row.typical_growth_days }),
    ...(row.water_requirements && { water_requirements: row.water_requirements }),
    ...(row.climate_zone && { climate_zone: row.climate_zone }),
    ...(row.typical_lifespan_months && { typical_lifespan_months: row.typical_lifespan_months }),
    ...(row.gestation_period_days && { gestation_period_days: row.gestation_period_days }),
    common_pests: row.common_pests,
    common_diseases: row.common_diseases,
    ...(row.planting_tips_en && {
      planting_tips: isVietnamese ? row.planting_tips_vi : row.planting_tips_en
    }),
    ...(row.harvest_tips_en && {
      harvest_tips: isVietnamese ? row.harvest_tips_vi : row.harvest_tips_en
    }),
    ...(row.feed_requirements_en && {
      feed_requirements: isVietnamese ? row.feed_requirements_vi : row.feed_requirements_en
    }),
    ...(row.housing_requirements_en && {
      housing_requirements: isVietnamese ? row.housing_requirements_vi : row.housing_requirements_en
    }),
    ...(row.care_tips_en && {
      care_tips: isVietnamese ? row.care_tips_vi : row.care_tips_en
    }),
    ...(row.vaccination_schedule && { vaccination_schedule: row.vaccination_schedule }),
    ...(row.icon_url && { icon_url: row.icon_url })
  };
}

// Health check
app.get('/health', async (req, res) => {
  try {
    await query('SELECT 1');
    res.json({
      status: 'ok',
      service: 'Agriculture API',
      version: '1.0.0',
      database: 'connected'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      service: 'Agriculture API',
      database: 'disconnected',
      error: error.message
    });
  }
});

// ============================================================================
// CROPS ENDPOINTS
// ============================================================================

// Get all crops with pagination and filters
app.get('/api/crops', async (req, res) => {
  try {
    const {
      lang = 'en',
      page = 1,
      limit = 20,
      category,
      season,
      search
    } = req.query;

    const offset = (page - 1) * limit;
    let whereClause = 'WHERE 1=1';
    const params = [];
    let paramCount = 1;

    // Category filter
    if (category) {
      whereClause += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }

    // Season filter
    if (season) {
      whereClause += ` AND growing_season = $${paramCount}`;
      params.push(season);
      paramCount++;
    }

    // Search filter
    if (search) {
      whereClause += ` AND (name_en ILIKE $${paramCount} OR name_vi ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Get total count
    const countResult = await query(
      `SELECT COUNT(*) FROM crops ${whereClause}`,
      params
    );
    const total = parseInt(countResult.rows[0].count);

    // Get paginated data
    params.push(limit, offset);
    const result = await query(
      `SELECT * FROM crops ${whereClause} ORDER BY name_en LIMIT $${paramCount} OFFSET $${paramCount + 1}`,
      params
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get crops error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crops',
      details: error.message
    });
  }
});

// Get crop by ID
app.get('/api/crops/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { lang = 'en' } = req.query;

    const result = await query('SELECT * FROM crops WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Crop not found'
      });
    }

    const data = selectLanguageFields(result.rows[0], lang);

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Get crop error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crop',
      details: error.message
    });
  }
});

// Search crops
app.get('/api/crops/search', async (req, res) => {
  try {
    const { q, lang = 'en', limit = 20 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Search query (q) is required'
      });
    }

    const result = await query(
      `SELECT * FROM crops
       WHERE name_en ILIKE $1 OR name_vi ILIKE $1 OR scientific_name ILIKE $1
       LIMIT $2`,
      [`%${q}%`, limit]
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      total: data.length
    });
  } catch (error) {
    console.error('Search crops error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search crops',
      details: error.message
    });
  }
});

// Get crops by category
app.get('/api/crops/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { lang = 'en', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    const countResult = await query(
      'SELECT COUNT(*) FROM crops WHERE category = $1',
      [category]
    );
    const total = parseInt(countResult.rows[0].count);

    const result = await query(
      'SELECT * FROM crops WHERE category = $1 ORDER BY name_en LIMIT $2 OFFSET $3',
      [category, limit, offset]
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get crops by category error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crops by category',
      details: error.message
    });
  }
});

// Get crops by season
app.get('/api/crops/season/:season', async (req, res) => {
  try {
    const { season } = req.params;
    const { lang = 'en', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    const countResult = await query(
      'SELECT COUNT(*) FROM crops WHERE growing_season = $1',
      [season]
    );
    const total = parseInt(countResult.rows[0].count);

    const result = await query(
      'SELECT * FROM crops WHERE growing_season = $1 ORDER BY name_en LIMIT $2 OFFSET $3',
      [season, limit, offset]
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get crops by season error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crops by season',
      details: error.message
    });
  }
});

// ============================================================================
// LIVESTOCK ENDPOINTS
// ============================================================================

// Get all livestock with pagination and filters
app.get('/api/livestock', async (req, res) => {
  try {
    const {
      lang = 'en',
      page = 1,
      limit = 20,
      category,
      search
    } = req.query;

    const offset = (page - 1) * limit;
    let whereClause = 'WHERE 1=1';
    const params = [];
    let paramCount = 1;

    // Category filter
    if (category) {
      whereClause += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }

    // Search filter
    if (search) {
      whereClause += ` AND (name_en ILIKE $${paramCount} OR name_vi ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Get total count
    const countResult = await query(
      `SELECT COUNT(*) FROM livestock ${whereClause}`,
      params
    );
    const total = parseInt(countResult.rows[0].count);

    // Get paginated data
    params.push(limit, offset);
    const result = await query(
      `SELECT * FROM livestock ${whereClause} ORDER BY name_en LIMIT $${paramCount} OFFSET $${paramCount + 1}`,
      params
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get livestock error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch livestock',
      details: error.message
    });
  }
});

// Get livestock by ID
app.get('/api/livestock/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { lang = 'en' } = req.query;

    const result = await query('SELECT * FROM livestock WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Livestock not found'
      });
    }

    const data = selectLanguageFields(result.rows[0], lang);

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Get livestock error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch livestock',
      details: error.message
    });
  }
});

// Search livestock
app.get('/api/livestock/search', async (req, res) => {
  try {
    const { q, lang = 'en', limit = 20 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Search query (q) is required'
      });
    }

    const result = await query(
      `SELECT * FROM livestock
       WHERE name_en ILIKE $1 OR name_vi ILIKE $1 OR scientific_name ILIKE $1
       LIMIT $2`,
      [`%${q}%`, limit]
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      total: data.length
    });
  } catch (error) {
    console.error('Search livestock error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search livestock',
      details: error.message
    });
  }
});

// Get livestock by category
app.get('/api/livestock/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { lang = 'en', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    const countResult = await query(
      'SELECT COUNT(*) FROM livestock WHERE category = $1',
      [category]
    );
    const total = parseInt(countResult.rows[0].count);

    const result = await query(
      'SELECT * FROM livestock WHERE category = $1 ORDER BY name_en LIMIT $2 OFFSET $3',
      [category, limit, offset]
    );

    const data = result.rows.map(row => selectLanguageFields(row, lang));

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get livestock by category error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch livestock by category',
      details: error.message
    });
  }
});

// ============================================================================
// SERVER INITIALIZATION
// ============================================================================

async function start() {
  try {
    // Run migrations
    console.log('Running database migrations...');
    await runMigrations();

    // Check if database needs seeding
    const cropsResult = await query('SELECT COUNT(*) FROM crops');
    const livestockResult = await query('SELECT COUNT(*) FROM livestock');
    const cropsCount = parseInt(cropsResult.rows[0].count);
    const livestockCount = parseInt(livestockResult.rows[0].count);

    if (cropsCount === 0 || livestockCount === 0) {
      console.log('Database appears empty. Seeding...');
      await seedDatabase();
    } else {
      console.log(`Database already populated:`);
      console.log(`  - Crops: ${cropsCount}`);
      console.log(`  - Livestock: ${livestockCount}`);
    }

    // Start server
    app.listen(PORT, () => {
      console.log(`\n🌾 Agriculture API Server`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`Server running on port ${PORT}\n`);
      console.log(`API Endpoints:`);
      console.log(`  Health: http://localhost:${PORT}/health`);
      console.log(`  Crops: GET http://localhost:${PORT}/api/crops?lang=vi`);
      console.log(`  Livestock: GET http://localhost:${PORT}/api/livestock?lang=vi`);
      console.log(`  Search: GET http://localhost:${PORT}/api/crops/search?q=rice&lang=en`);
      console.log(``);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
