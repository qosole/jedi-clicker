const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../models');

router.get('/', async (req, res) => {
    // Route for general homepage
    res.render('homepage');
});

router.get('/light-homepage', async (req, res) => {
    // Need to get items bought and credits from User model
    // Need to count the number of itmes the User has

    try {

        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Item }]
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        const allItemsList = await Item.findAll();
        if (!allItemsList) {
            res.status(404).json({ message: 'No item data found in db' });
            return;
        }

        // Creating an object that keeps track of each item and their count 
        let userItemCount = {};
        for (let i = 0; i < userData.dataValues.items.length; i++) {
            let count = await UserItem.count({
                where: {
                    user_id: req.params.id,
                    item_id: userData.dataValues.items[i].dataValues.id
                }
            });
            userItemCount[userData.dataValues.items[i].dataValues.name] = count;
        }

        // Combining the queries
        const gameData = JSON.parse('[' + JSON.stringify(userData) + ',' + JSON.stringify(userItemCount) + ']');

        res.render('light-homepage', { gameData });

    } catch (err) { res.status(500).json(err); }
});

router.get('/dark-homepage', async (req, res) => {
    // Need to get items bought and credits from User model
    // Need to count the number of itmes the User has

    try {

        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Item }]
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        const allItemsList = await Item.findAll();
        if (!allItemsList) {
            res.status(404).json({ message: 'No item data found in db' });
            return;
        }

        // Creating an object that keeps track of each item and their count 
        let userItemCount = {};
        for (let i = 0; i < userData.dataValues.items.length; i++) {
            let count = await UserItem.count({
                where: {
                    user_id: req.params.id,
                    item_id: userData.dataValues.items[i].dataValues.id
                }
            });
            userItemCount[userData.dataValues.items[i].dataValues.name] = count;
        }

        // Combining the queries
        const gameData = JSON.parse('[' + JSON.stringify(userData) + ',' + JSON.stringify(userItemCount) + ']');

        res.render('dark-homepage', { gameData });

    } catch (err) { res.status(500).json(err); }
});

module.exports = router;