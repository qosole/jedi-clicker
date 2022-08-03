const { User } = require('../models');

const userData = [
    {

    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;