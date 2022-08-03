const { User } = require('../models');

const userData = [
    // Admin account
    {
        username: 'qosole'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;