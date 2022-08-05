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

// Update a user's galactic_credit by id
router.put('/:id', async (req, res) => {
    try {
        // req.body should have galactic_credits
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        user.galactic_credits = req.body.galactic_credits;
        await user.save();

    } catch (err) { res.status(500).json(err); }
});

// Update a user's items by id
router.put('/items/:id', async (req, res) => {
    try {
        // req.body should have item_id
        const newUserItemData = {
            user_id: req.params.id,
            item_id: req.body.item_id
        };
        const userItem = await UserItem.create(newUserItemData);
    } catch (err) { res.status(500).json(err); }
})

// Delete a user by id
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: { id: req.params.id }
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        res.status(200).json(userData);

        } catch (err) { res.status(500).json(err); }
});

module.exports = router;