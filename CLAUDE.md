# Nông Trí - Agriculture API

## Overview

Standalone microservice providing master database for Vietnamese crops and livestock. Serves as the source of truth for agricultural data with full bilingual support (English/Vietnamese).

**Repository**: https://github.com/eagleisbatman/nong-tri-agriculture-api (to be created)
**Deployment**: https://nong-tri-agriculture.up.railway.app (to be deployed)

---

## Purpose

- **Centralized Data**: Single source for all crop and livestock information
- **Multilingual**: All data available in English and Vietnamese
- **Reusable**: Can be consumed by mobile app, main backend, or other services
- **Scalable**: Separate database and independent deployment

---

## Data Coverage

### Crops (50+)
- **Grains**: Rice, Corn, Wheat
- **Vegetables**: Tomato, Cabbage, Lettuce, Cucumber, Chili Pepper, Eggplant, Carrot, Beans, Sweet Potato, Cassava, Taro, Mustard Greens, Water Spinach, Lemongrass
- **Fruits**: Mango, Dragon Fruit, Banana, Longan, Papaya, Watermelon, Coconut, Durian, Jackfruit, Pomelo, Guava
- **Cash Crops**: Coffee, Rubber, Tea, Black Pepper, Sugarcane, Cashew
- **Legumes**: Soybean, Peanut

### Livestock (30+)
- **Cattle**: Dairy Cow, Beef Cattle, Water Buffalo
- **Poultry**: Chicken (Layer & Broiler), Duck, Quail
- **Swine**: Breeding Sow, Fattening Pig
- **Aquaculture**: Tilapia, Catfish (Tra/Basa), Shrimp (White Leg)
- **Other**: Goat, Rabbit

---

## API Endpoints

### Crops

**Get All Crops**:
```http
GET /api/crops?lang=vi&page=1&limit=20&category=grain&season=wet&search=rice
```

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
      "harvest_tips": "Thu hoạch khi 80-85% hạt chuyển màu vàng..."
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

**Get Crop by ID**:
```http
GET /api/crops/:id?lang=vi
```

**Search Crops**:
```http
GET /api/crops/search?q=rice&lang=en&limit=20
```

**Get by Category**:
```http
GET /api/crops/category/:category?lang=vi&page=1&limit=20
```

Categories: `grain`, `vegetable`, `fruit`, `cash_crop`, `legume`

**Get by Season**:
```http
GET /api/crops/season/:season?lang=vi&page=1&limit=20
```

Seasons: `wet`, `dry`, `year_round`

### Livestock

**Get All Livestock**:
```http
GET /api/livestock?lang=vi&page=1&limit=20&category=cattle&search=cow
```

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
      "feed_requirements": "Cỏ chất lượng cao, cỏ khô...",
      "housing_requirements": "Chuồng sạch sẽ, thông thoáng...",
      "common_diseases": ["mastitis", "foot rot"],
      "vaccination_schedule": {...},
      "care_tips": "Vắt sữa 2-3 lần/ngày..."
    }
  ],
  "pagination": {...}
}
```

**Get Livestock by ID**:
```http
GET /api/livestock/:id?lang=vi
```

**Search Livestock**:
```http
GET /api/livestock/search?q=chicken&lang=en&limit=20
```

**Get by Category**:
```http
GET /api/livestock/category/:category?lang=vi&page=1&limit=20
```

Categories: `cattle`, `poultry`, `swine`, `aquaculture`, `other`

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

---

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

CREATE INDEX idx_crops_category ON crops(category);
CREATE INDEX idx_crops_season ON crops(growing_season);
CREATE INDEX idx_crops_name_en ON crops(name_en);
CREATE INDEX idx_crops_name_vi ON crops(name_vi);
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
  common_diseases JSONB DEFAULT '[]',
  vaccination_schedule JSONB DEFAULT '{}',
  care_tips_en TEXT,
  care_tips_vi TEXT,
  icon_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_livestock_category ON livestock(category);
CREATE INDEX idx_livestock_name_en ON livestock(name_en);
CREATE INDEX idx_livestock_name_vi ON livestock(name_vi);
```

---

## Technology Stack

- **Runtime**: Node.js (ES modules)
- **Framework**: Express.js v4.18
- **Database**: PostgreSQL (separate instance)
- **Features**: CORS, pagination, multilingual support

---

## Development

### Local Setup

```bash
cd agriculture-api
npm install
cp .env.example .env
# Edit .env with DATABASE_URL
npm run db:migrate
npm run db:seed
npm run dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/agriculture
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000,https://nong-tri.up.railway.app
```

### Scripts

- `npm start` - Start server
- `npm run dev` - Start with --watch
- `npm run db:migrate` - Run migrations
- `npm run db:seed` - Seed database

---

## Deployment (Railway)

### Setup

1. Create new Railway project
2. Add PostgreSQL database (separate from main backend)
3. Connect GitHub repository
4. Set environment variables:
   ```
   DATABASE_URL=<railway-provided>
   PORT=8080
   NODE_ENV=production
   CORS_ORIGIN=https://nong-tri.up.railway.app
   ```

### Auto-Deploy

Pushes to `main` branch trigger automatic deployment. Railway will:
1. Run `npm install`
2. Execute migrations (`npm run db:migrate`)
3. Seed database if empty
4. Start server (`npm start`)

---

## Language Support

The API returns data in the requested language via the `lang` query parameter:

- `lang=en` (default) - Returns English names and descriptions
- `lang=vi` or `lang=vn` - Returns Vietnamese names and descriptions

**Example**:
```javascript
// English
GET /api/crops/1?lang=en
{
  "name": "Rice",
  "planting_tips": "Plant in flooded paddies with 20-25cm water depth..."
}

// Vietnamese
GET /api/crops/1?lang=vi
{
  "name": "Lúa",
  "planting_tips": "Trồng trong ruộng ngập nước sâu 20-25cm..."
}
```

---

## Integration with Main Backend

The main backend can consume this API:

```javascript
// In main backend (backend/src/services/agriculture-service.js)
const AGRICULTURE_API_URL = process.env.AGRICULTURE_API_URL;

async function searchCrops(query, language = 'vi') {
  const response = await fetch(
    `${AGRICULTURE_API_URL}/api/crops/search?q=${query}&lang=${language}`
  );
  return await response.json();
}

async function getCropDetails(id, language = 'vi') {
  const response = await fetch(
    `${AGRICULTURE_API_URL}/api/crops/${id}?lang=${language}`
  );
  return await response.json();
}
```

---

## Data Structure

### Crop Data Fields

- `name_en` / `name_vi` - Bilingual names
- `scientific_name` - Latin scientific name
- `category` - grain, vegetable, fruit, cash_crop, legume
- `growing_season` - wet, dry, year_round
- `typical_growth_days` - Days from planting to harvest
- `water_requirements` - low, medium, high
- `climate_zone` - Suitable climate zones
- `common_pests` - Array of common pests
- `common_diseases` - Array of common diseases
- `planting_tips_en` / `planting_tips_vi` - Planting advice
- `harvest_tips_en` / `harvest_tips_vi` - Harvesting advice

### Livestock Data Fields

- `name_en` / `name_vi` - Bilingual names
- `scientific_name` - Latin scientific name
- `category` - cattle, poultry, swine, aquaculture, other
- `typical_lifespan_months` - Expected lifespan
- `gestation_period_days` - Reproduction cycle
- `feed_requirements_en` / `feed_requirements_vi` - Feeding guide
- `housing_requirements_en` / `housing_requirements_vi` - Housing needs
- `common_diseases` - Array of common diseases
- `vaccination_schedule` - Object with schedule details
- `care_tips_en` / `care_tips_vi` - Care instructions

---

## Future Enhancements

- [ ] Admin panel for CRUD operations
- [ ] Image upload for crops/livestock
- [ ] Regional varieties and cultivars
- [ ] Seasonal planting calendars
- [ ] Pest/disease detail endpoints
- [ ] Integration with weather data
- [ ] GraphQL API support

---

**Last Updated**: October 2025
**Status**: Development Complete, Ready for Deployment
**Version**: 1.0.0
**Total Data**: 50+ crops, 30+ livestock
