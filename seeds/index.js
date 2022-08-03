const seedStores = require('./store-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedStores();
  console.log('\n----- STORE SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
