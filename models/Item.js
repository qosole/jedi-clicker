const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {
    canAfford(galacticCreditCount) { return galacticCreditCount >= this.price; }
}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        strength: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        // Stores have many items
        store_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'store',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',
    }
);

module.exports = Item;