const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../models');

router.get('/', async (req, res) => {
    // Placeholder route for general homepage
    res.render('homepage');
});

router.get('/light-homepage', async (req, res) => {
    // Placeholder route for light-homepage
    res.render('light-homepage');
});

router.get('/dark-homepage', async (req, res) => {
    // Placeholder route for dark-homepage
    res.render('dark-homepage');
});

router.get('/:id', async (req, res) => {
    // Need to get items bought and credits from User model
    // Need to get store information from Store model
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

        const storeData = await Store.findAll({
            include: [{ model: Item }]
        });
        if (!storeData) {
            res.status(404).json({ message: 'No store data found' });
            return;
        }

        // Combining the queries
        const gameData = JSON.parse('[' + JSON.stringify(userData) + ',' + JSON.stringify(userItemCount) + ',' + JSON.stringify(storeData) + ']');

        res.render('homepage', { gameData });

    } catch (err) { res.status(500).json(err); }
});
module.exports = router;