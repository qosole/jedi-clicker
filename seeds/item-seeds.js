const { Item } = require('../models');

const itemData = [
    // Equipment items
    {
        name: 'Training Stick',
        price: 10,
        strength: 1,
        store_id: 1
    },
    {
        name: 'Wampa Cloak',
        price: 20,
        strength: 2,
        store_id: 1
    },
    {
        name: 'Blaster',
        price: 50,
        strength: 10,
        store_id: 1
    },
    {
        name: 'Lightsaber',
        price: 200,
        strength: 60,
        store_id: 1
    },
    {
        name: 'Force Amplifier',
        price: 5000,
        strength: 2500,
        store_id: 1
    },

    // Mercenaries (can only be bought once)
    {
        // Gives a certain discount to all items in both stores
        name: 'Vince Lee',
        price: 1000000,
        strength: 40000,
        store_id: 2
    },
    {
        // No special effect, just cost efficient
        name: 'Kevin Hernandez',
        price: 2000000,
        strength: 300000,
        store_id: 2
    },
    {
        // Converts you to the dark side, increasing strength by a certain amount
        name: 'Manuel Nunez',
        price: 1000000000,
        strength: 70000000,
        store_id: 2
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;