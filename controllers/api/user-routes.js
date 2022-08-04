const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../../models');

// The '/api/users' endpoint

// GET all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Item }]
        });
        if (!allUsers) {
            res.status(404).json({ message: 'No user data in db' });
            return;
        }

        res.status(200).json(allUsers);

    } catch (err) { res.status(500).json(err); }
});

// GET user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{ model: Item }]
        });
        if (!user) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        res.status(200).json(user);

    } catch (err) { res.status(500).json(err); }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        // req.body should have username, password, and galactic_credits = 0
        const newUser = await User.create(req.body);
        if (!newUser) {
            res.status(400).json({ message: 'Syntax error with creating new user' });
            return;
        }

        res.status(200).json(newUser);
        
    } catch (err) { res.status(500).json(err); }
});

module.exports = router;