const { Item } = require('../models');

const itemData = [
    // Equipment items
    {
        name: 'Training Stick',
        price: 10,
        strength: 1,
        user_id: 1,
        store_id: 1
    },
    {
        name: 'Wampa Cloak',
        price: 20,
        strength: 2,
        user_id: 1,
        store_id: 1
    },
    {
        name: 'Blaster',
        price: 50,
        strength: 10,
        user_id: 1,
        store_id: 1
    },
    {
        name: 'Lightsaber',
        price: 200,
        strength: 60,
        user_id: 1,
        store_id: 1
    },
    {
        name: 'Force Amplifier',
        price: 5000,
        strength: 2500,
        user_id: 1,
        store_id: 1
    },

    // Mercenaries
    {
        name: 'Vince Lee',
        price: 1000000,
        strength: 40000,
        user_id: 1,
        store_id: 2
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;