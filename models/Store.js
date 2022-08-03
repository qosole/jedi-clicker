const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Store extends Model {}

Store.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Base game will have 2 stores: equipment and mercenary
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_discount: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'store',
    }
);

module.exports = Store;