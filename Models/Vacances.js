const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Vacances extends Model {}
Vacances.init(
    {
        id_vacances: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Vacances',
        tableName: 'vacances',
        timestamps: false,
    }
);
module.exports = Vacances;