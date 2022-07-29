const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model {}

Travellers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
        type: DataType.STRING,
        },

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'travellers'
    },

);

module.exports = Travellers;