const { Item } = require('../models');

export const picture = SequelizeFile({
    attribute: 'picture',
    mimetype: /^image/,
    crop: true,
    sizes: {
      small: 300, //width 300 for normal equipment items
      big: 600, //width 600 for mercenary jedi's
    }
 });

const itemData = [
    // Equipment items
    {
        name: 'Training Stick',
        price: 25,
        strength: 1,
        store_id: 1,
    },
    {
        name: 'Blaster Gun',
        price: 100,
        strength: 3,
        store_id: 1,
    },
    {
        name: 'Helper Droid',
        price: 200,
        strength: 6,
        store_id: 1,
    },
    {
        name: 'Lightsaber',
        price: 500,
        strength: 10,
        store_id: 1,
    },
    {
        name: 'Double-Sided Lightsaber',
        price: 1000,
        strength: 120,
        store_id: 1,
    },
    {
        name: 'Force Amplifier',
        price: 5000,
        strength: 500,
        store_id: 1,
    },

    // Mercenaries (can only be bought once)
    {
        // Gives a certain discount to all items in both stores
        name: 'Kevin Hernandez',
        price: 200000,
        strength: 1500,
        store_id: 2,
    },
    {
        // No special effect, just powerful and cost efficient
        name: 'Vince Lee',
        price: 200000,
        strength: 1750,
        store_id: 2,
    },
    {
        // Converts you to the dark side, increasing strength by a certain amount
        name: 'Manuel Nunez',
        price: 500000,
        strength: 3000,
        store_id: 2,
    },
    {
        // Converts you to the dark side, increasing strength by a certain amount
        name: 'Jerome Chenette',
        price: 500000,
        strength: 3000,
        store_id: 2,
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;