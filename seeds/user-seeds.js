const { User } = require('../models');

const userData = [
    // Admin account
    {
        username: 'qosole',
        password: 'password',
        galactic_credits: '99999999999999'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;