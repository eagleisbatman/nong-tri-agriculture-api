# Nông Trí - Agriculture API

Master database API for crops and livestock information. Provides multilingual (English/Vietnamese) agricultural data for the Nông Trí farming assistant application.

## Overview

This is a standalone microservice that serves as the source of truth for:
- **Crops**: 50+ Vietnamese crops with growing information
- **Livestock**: 30+ animal types with care information

All data is bilingual (English/Vietnamese) to support the mobile app's localization.

## Features

- ✅ RESTful API for crops and livestock
- ✅ Multilingual support (EN/VI)
- ✅ Search and filtering
- ✅ Category-based browsing
- ✅ PostgreSQL database
- ✅ Ready for Railway deployment

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Railway account for deployment (optional)

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Create environment file:**
```bash
cp .env.example .env
```

3. **Configure your `.env` file:**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/agriculture
PORT=3001
NODE_ENV=development
```

4. **Run database migrations:**
```bash
npm run db:migrate
```

5. **Seed the database:**
```bash
npm run db:seed
```

6. **Start the server:**
```bash
npm run dev
```

7. **Test the API:**
```bash
curl http://localhost:3001/api/crops
```

## API Endpoints

### Crops

#### Get All Crops
```http
GET /api/crops?lang=vi&page=1&limit=20
```

**Query Parameters**:
- `lang` (optional): `en` or `vi` (default: `en`)
- `page` (optional): Page number (default: `1`)
- `limit` (optional): Items per page (default: `20`)
- `category` (optional): Filter by category
- `season` (optional): Filter by growing season

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Lúa",
      "scientific_name": "Oryza sativa",
      "category": "grain",
      "growing_season": "wet",
      "typical_growth_days": 120,
      "water_requirements": "high",
      "climate_zone": "tropical, subtropical",
      "common_pests": ["brown planthopper", "stem borer"],
      "common_diseases": ["blast", "bacterial leaf blight"],
      "planting_tips": "Trồng trong ruộng ngập nước...",
      "harvest_tips": "Thu hoạch khi hạt chín vàng...",
      "icon_url": null
    }
  ],
  "pagination": {
    "total": 52,
    "page": 1,
    "limit": 20,
    "totalPages": 3
  }
}
```

#### Get Crop by ID
```http
GET /api/crops/:id?lang=vi
```

#### Search Crops
```http
GET /api/crops/search?q=rice&lang=en
```

#### Get Crops by Category
```http
GET /api/crops/category/:category?lang=vi
```

**Categories**:
- `grain` - Grains (rice, corn, wheat)
- `vegetable` - Vegetables
- `fruit` - Fruits
- `cash_crop` - Cash crops (coffee, rubber, tea)
- `legume` - Legumes and pulses

#### Get Crops by Season
```http
GET /api/crops/season/:season?lang=vi
```

**Seasons**:
- `wet` - Wet season crops
- `dry` - Dry season crops
- `year_round` - Year-round crops

### Livestock

#### Get All Livestock
```http
GET /api/livestock?lang=vi&page=1&limit=20
```

**Query Parameters**: Same as crops

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Bò sữa",
      "scientific_name": "Bos taurus",
      "category": "cattle",
      "typical_lifespan_months": 240,
      "gestation_period_days": 283,
      "feed_requirements": "Cỏ, cỏ khô, ngũ cốc...",
      "housing_requirements": "Chuồng trại sạch sẽ, thông thoáng...",
      "common_diseases": ["mastitis", "foot rot"],
      "vaccination_schedule": {...},
      "care_tips": "Cung cấp nước sạch hàng ngày...",
      "icon_url": null
    }
  ],
  "pagination": {
    "total": 32,
    "page": 1,
    "limit": 20,
    "totalPages": 2
  }
}
```

#### Get Livestock by ID
```http
GET /api/livestock/:id?lang=vi
```

#### Search Livestock
```http
GET /api/livestock/search?q=chicken&lang=en
```

#### Get Livestock by Category
```http
GET /api/livestock/category/:category?lang=vi
```

**Categories**:
- `cattle` - Cattle (cows, buffalo)
- `poultry` - Poultry (chickens, ducks)
- `swine` - Pigs
- `aquaculture` - Fish and aquatic animals
- `other` - Other livestock

### Health Check
```http
GET /health
```

**Response**:
```json
{
  "status": "ok",
  "service": "Agriculture API",
  "version": "1.0.0",
  "database": "connected"
}
```

## Database Schema

### Crops Table
```sql
CREATE TABLE crops (
  id SERIAL PRIMARY KEY,
  name_en VARCHAR(255) NOT NULL,
  name_vi VARCHAR(255) NOT NULL,
  scientific_name VARCHAR(255),
  category VARCHAR(100),
  growing_season VARCHAR(50),
  typical_growth_days INTEGER,
  water_requirements VARCHAR(50),
  climate_zone VARCHAR(100),
  common_pests JSONB,
  common_diseases JSONB,
  planting_tips_en TEXT,
  planting_tips_vi TEXT,
  harvest_tips_en TEXT,
  harvest_tips_vi TEXT,
  icon_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Livestock Table
```sql
CREATE TABLE livestock (
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
  common_diseases JSONB,
  vaccination_schedule JSONB,
  care_tips_en TEXT,
  care_tips_vi TEXT,
  icon_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Deployment

### Railway Deployment

1. Create new project on Railway
2. Add PostgreSQL database
3. Connect GitHub repository
4. Set environment variables:
   ```
   DATABASE_URL=<railway-provided>
   PORT=8080
   NODE_ENV=production
   CORS_ORIGIN=https://nong-tri.up.railway.app
   ```
5. Deploy!

Railway will automatically:
- Run migrations on startup
- Seed the database
- Start the server

### Manual Deployment

```bash
# Build and start
npm install
npm run db:migrate
npm run db:seed
npm start
```

## Data Sources

### Crops Data (50+ entries)
- Rice varieties (IR64, Jasmine, etc.)
- Vegetables (tomato, cabbage, lettuce, etc.)
- Fruits (mango, dragon fruit, longan, etc.)
- Cash crops (coffee, rubber, tea, pepper, etc.)
- Grains (corn, wheat, etc.)

### Livestock Data (30+ entries)
- Cattle (dairy cow, beef cattle, buffalo)
- Poultry (chicken, duck, quail, goose)
- Swine (Vietnamese pig breeds, commercial pigs)
- Aquaculture (tilapia, catfish, shrimp)
- Other (goat, rabbit, etc.)

## Development

### Adding New Crops/Livestock

Edit `src/db/seed-data/crops.js` or `livestock.js`, then:

```bash
npm run db:seed
```

### Running Tests

```bash
npm test
```

## License

MIT

## Related Projects

- **Main Backend**: [nong-tri](https://github.com/eagleisbatman/nong-tri)
- **Mobile App**: [nong-tri-mobile](https://github.com/eagleisbatman/nong-tri-mobile)
- **Weather MCP**: [nong-tri-weather-mcp](https://github.com/eagleisbatman/nong-tri-weather-mcp)

---

**Last Updated**: October 2025
**Version**: 1.0.0
