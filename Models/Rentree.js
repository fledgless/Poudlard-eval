const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Rentree extends Model {}
Rentree.init(
    {
        id_rentree: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        date_rentree: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Rentree',
        tableName: 'rentree',
        timestamps: false,
    }
);
module.exports = Rentree;