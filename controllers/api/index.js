const router = require('express').Router();
const itemRoutes = require('./item-routes');
const storeRoutes = require('./store-routes');
const userRoutes = require('./user-routes');

router.use('/items', itemRoutes);
router.use('/stores', storeRoutes);
router.use('/users', userRoutes);

module.exports = router;