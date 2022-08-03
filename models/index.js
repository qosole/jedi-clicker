// import models
const Item = require('./Item');
const Store = require('./Store');
const User = require('./User');
const UserItem = require('./UserItem');

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

// Items belongsToMany Users (many to many; through UserItem)
Item.belongsToMany(User, { through: UserItem });

// Users belongsToMany Items (many to many; through UserItem)
User.belongsToMany(Item, { through: UserItem });

module.exports = { Item, Store, User, UserItem };