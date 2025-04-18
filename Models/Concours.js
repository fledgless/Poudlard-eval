const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Concours extends Model {}
Concours.init(
    {
        id_concours: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        dateDebut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateFin: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Concours',
        tableName: 'concours',
        timestamps: false,
    }
);
module.exports = Concours;
 