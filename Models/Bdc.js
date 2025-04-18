const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Bdc extends Model {}
Bdc.init(
    {
        id_bdc: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        pdf: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Bdc',
        tableName: 'bdc',
        timestamps: false,
    }
);
module.exports = Bdc;