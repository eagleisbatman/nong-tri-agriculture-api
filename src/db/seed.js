import { query } from './config.js';
import { cropsData } from './seed-data/crops.js';
import { livestockData } from './seed-data/livestock.js';

async function seedDatabase() {
  try {
    console.log('Starting database seeding...\n');

    // Seed crops
    console.log(`Seeding ${cropsData.length} crops...`);
    let cropsInserted = 0;

    for (const crop of cropsData) {
      const result = await query(
        `INSERT INTO crops (
          name_en, name_vi, scientific_name, category, growing_season,
          typical_growth_days, water_requirements, climate_zone,
          common_pests, common_diseases,
          planting_tips_en, planting_tips_vi,
          harvest_tips_en, harvest_tips_vi
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        ON CONFLICT DO NOTHING
        RETURNING id`,
        [
          crop.name_en,
          crop.name_vi,
          crop.scientific_name,
          crop.category,
          crop.growing_season,
          crop.typical_growth_days,
          crop.water_requirements,
          crop.climate_zone,
          JSON.stringify(crop.common_pests),
          JSON.stringify(crop.common_diseases),
          crop.planting_tips_en,
          crop.planting_tips_vi,
          crop.harvest_tips_en,
          crop.harvest_tips_vi
        ]
      );

      if (result.rows.length > 0) {
        cropsInserted++;
        console.log(`✓ Inserted: ${crop.name_en} (${crop.name_vi})`);
      }
    }

    console.log(`\n✅ Crops seeding complete: ${cropsInserted} inserted\n`);

    // Seed livestock
    console.log(`Seeding ${livestockData.length} livestock types...`);
    let livestockInserted = 0;

    for (const animal of livestockData) {
      const result = await query(
        `INSERT INTO livestock (
          name_en, name_vi, scientific_name, category,
          typical_lifespan_months, gestation_period_days,
          feed_requirements_en, feed_requirements_vi,
          housing_requirements_en, housing_requirements_vi,
          common_diseases, vaccination_schedule,
          care_tips_en, care_tips_vi
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        ON CONFLICT DO NOTHING
        RETURNING id`,
        [
          animal.name_en,
          animal.name_vi,
          animal.scientific_name,
          animal.category,
          animal.typical_lifespan_months,
          animal.gestation_period_days,
          animal.feed_requirements_en,
          animal.feed_requirements_vi,
          animal.housing_requirements_en,
          animal.housing_requirements_vi,
          JSON.stringify(animal.common_diseases),
          JSON.stringify(animal.vaccination_schedule),
          animal.care_tips_en,
          animal.care_tips_vi
        ]
      );

      if (result.rows.length > 0) {
        livestockInserted++;
        console.log(`✓ Inserted: ${animal.name_en} (${animal.name_vi})`);
      }
    }

    console.log(`\n✅ Livestock seeding complete: ${livestockInserted} inserted\n`);

    // Summary
    const cropsCount = await query('SELECT COUNT(*) FROM crops');
    const livestockCount = await query('SELECT COUNT(*) FROM livestock');

    console.log('═══════════════════════════════════════');
    console.log('DATABASE SEEDING SUMMARY');
    console.log('═══════════════════════════════════════');
    console.log(`Total Crops in Database: ${cropsCount.rows[0].count}`);
    console.log(`Total Livestock in Database: ${livestockCount.rows[0].count}`);
    console.log('═══════════════════════════════════════\n');

  } catch (error) {
    console.error('Seeding error:', error);
    throw error;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log('✅ All done!');
      process.exit(0);
    })
    .catch(err => {
      console.error('❌ Seeding failed:', err);
      process.exit(1);
    });
}

export default seedDatabase;
