// import models
const Item = require('./Item');
const Store = require('./Store');
const User = require('./User');

// Items belongsTo Store
Item.belongsTo(Store, {
    foreignKey: 'store_id',
    onDelete: 'CASCADE'
});

// Stores have many Items
Store.hasMany(Item, {
    foreignKey: 'store_id',
    onDelete: 'CASCADE'
});

// Items belongsTo User
Item.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Users have many Items
User.hasMany(Item, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { Item, Store, User };