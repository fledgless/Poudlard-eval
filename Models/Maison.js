const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Maison extends Model {}
Maison.init(
    {
        id_maison: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Maison',
        tableName: 'maison',
        timestamps: false,
    }
);
module.exports = Maison;