const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../../models');

// The '/api/stores' endpoint

// GET all stores
router.get('/', async (req, res) => {
    try {
        const allStores = await Store.findAll({
            include: [{ model: Item }]
        });
        if (!allStores) {
            res.status(404).json({ message: 'No store data in db' });
            return;
        }

        res.status(200).json(allStores);

    } catch (err) { res.status(500).json(err); }
});

// GET store by id
router.get('/:id', async (req, res) => {
    try {
        const store = await Store.findByPk(req.params.id, {
            include: [{ model: Item }]
        });
        if (!store) {
            res.status(404).json({ message: 'No store found with that id' });
            return;
        }

        res.status(200).json(store);

    } catch (err) { res.status(500).json(err); }
});


module.exports = router;