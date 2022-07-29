const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tirp_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveler_amount: {
        type: DataType.INTERGER,
        },
        traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'travllers',
            key: 'id',
            },
        },

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'travelers'
    },

);

module.exports = Travellers;