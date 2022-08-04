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

module.exports = router;