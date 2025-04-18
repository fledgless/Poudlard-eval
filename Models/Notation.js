const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Notation extends Model {}
Notation.init(
    {
        id_notation: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        note: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Notation',
        tableName: 'notation',
        timestamps: false,
    }
);
module.exports = Notation;