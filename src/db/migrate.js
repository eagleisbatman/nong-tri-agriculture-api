import { query } from './config.js';

const migrations = [
  {
    name: 'create_crops_table',
    sql: `
      CREATE TABLE IF NOT EXISTS crops (
        id SERIAL PRIMARY KEY,
        name_en VARCHAR(255) NOT NULL,
        name_vi VARCHAR(255) NOT NULL,
        scientific_name VARCHAR(255),
        category VARCHAR(100),
        growing_season VARCHAR(50),
        typical_growth_days INTEGER,
        water_requirements VARCHAR(50),
        climate_zone VARCHAR(100),
        common_pests JSONB DEFAULT '[]',
        common_diseases JSONB DEFAULT '[]',
        planting_tips_en TEXT,
        planting_tips_vi TEXT,
        harvest_tips_en TEXT,
        harvest_tips_vi TEXT,
        icon_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_crops_category ON crops(category);
      CREATE INDEX IF NOT EXISTS idx_crops_season ON crops(growing_season);
      CREATE INDEX IF NOT EXISTS idx_crops_name_en ON crops(name_en);
      CREATE INDEX IF NOT EXISTS idx_crops_name_vi ON crops(name_vi);
    `
  },
  {
    name: 'create_livestock_table',
    sql: `
      CREATE TABLE IF NOT EXISTS livestock (
        id SERIAL PRIMARY KEY,
        name_en VARCHAR(255) NOT NULL,
        name_vi VARCHAR(255) NOT NULL,
        scientific_name VARCHAR(255),
        category VARCHAR(100),
        typical_lifespan_months INTEGER,
        gestation_period_days INTEGER,
        feed_requirements_en TEXT,
        feed_requirements_vi TEXT,
        housing_requirements_en TEXT,
        housing_requirements_vi TEXT,
        common_diseases JSONB DEFAULT '[]',
        vaccination_schedule JSONB DEFAULT '{}',
        care_tips_en TEXT,
        care_tips_vi TEXT,
        icon_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_livestock_category ON livestock(category);
      CREATE INDEX IF NOT EXISTS idx_livestock_name_en ON livestock(name_en);
      CREATE INDEX IF NOT EXISTS idx_livestock_name_vi ON livestock(name_vi);
    `
  }
];

async function runMigrations() {
  try {
    console.log('Starting database migrations...');

    // Create migrations tracking table
    await query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    for (const migration of migrations) {
      // Check if migration already executed
      const result = await query(
        'SELECT * FROM migrations WHERE name = $1',
        [migration.name]
      );

      if (result.rows.length > 0) {
        console.log(`⊘ Migration ${migration.name} already executed`);
        continue;
      }

      // Run migration
      console.log(`Running migration: ${migration.name}`);
      await query(migration.sql);

      // Record migration
      await query(
        'INSERT INTO migrations (name) VALUES ($1)',
        [migration.name]
      );

      console.log(`✓ Migration ${migration.name} completed`);
    }

    console.log('All migrations completed successfully!');
  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runMigrations()
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

export default runMigrations;
