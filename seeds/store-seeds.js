const { Store } = require('../models');

const storeData = [
    {
        name: 'Equipment',
        is_discount: false
    },
    {
        name: 'Mercenaries',
        is_discount: false
    }
];

const seedStores = () => Store.bulkCreate(storeData);

module.exports = seedStores;