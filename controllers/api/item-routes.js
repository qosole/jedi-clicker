const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../../models');

// The '/api/items' endpoint

// GET all items
router.get('/', async (req, res) => {
    try {
        const allItems = await Item.findAll();
        if (!allItems) {
            res.status(404).json({ message: 'No item data in db' });
            return;
        }

        res.send(allItems);

    } catch (err) { res.status(500).json(err); }
});

// GET item by id
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id, {
            include: [
                { model: Store },
                { model: User }
            ]
        });
        if (!item) {
            res.status(404).json({ message: 'No item found with that id' });
            return;
        }

        res.status(200).json(item);

    } catch (err) { res.status(500).json(err); }
});

// Update item price by id, increasing it by 20% (when item is bought, price increases by 20%)
router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({ message: 'No item found with that id' });
            return;
        }

        item.price *= 1.2;
        await item.save();

    } catch (err) { res.status(500).json(err); }
})

module.exports = router;