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

module.exports = router;