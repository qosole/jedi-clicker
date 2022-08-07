const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../models');
const withAuth = require('../utils/auth'); // This helper function redirects the page to the login page when not logged in


router.get('/login', async (req, res) => {
    // Go to homepage if already logged in
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/', withAuth, async (req, res) => {
    // Route for general homepage
    res.render('homepage');
});

router.get('/light-homepage', withAuth, async (req, res) => {
    // Need to get items bought and credits from User model
    // Need to count the number of itmes the User has

    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Item }]
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        // Creating an object that keeps track of each item and their count 
        let userItemCount = {};
        for (let i = 0; i < userData.dataValues.items.length; i++) {
            let count = await UserItem.count({
                where: {
                    user_id: req.session.user_id,
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

router.get('/dark-homepage', withAuth, async (req, res) => {
    // Need to get items bought and credits from User model
    // Need to count the number of itmes the User has

    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Item }]
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        // Creating an object that keeps track of each item and their count 
        let userItemCount = {};
        for (let i = 0; i < userData.dataValues.items.length; i++) {
            let count = await UserItem.count({
                where: {
                    user_id: req.session.user_id,
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