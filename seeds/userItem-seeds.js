const { UserItem } = require('../models');

const userItemData = [
    // Admin account items
    {
        user_id: 1,
        item_id: 1
    },
    {
        user_id: 1,
        item_id: 2
    },
    {
        user_id: 1,
        item_id: 3
    },
    {
        user_id: 1,
        item_id: 4
    },
    {
        user_id: 1,
        item_id: 5
    },
    {
        user_id: 1,
        item_id: 6
    },
    {
        user_id: 1,
        item_id: 7
    },
    {
        user_id: 1,
        item_id: 8
    },
];

const seedUserItems = () => UserItem.bulkCreate(userItemData);

module.exports = seedUserItems;