const { Store } = require('../models');

const storeData = [
    {

    }
];

const seedStores = () => Store.bulkCreate(storeData);

module.exports = seedStores;