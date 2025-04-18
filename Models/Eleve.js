const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Eleve extends Model {}
Eleve.init(
    {
        id_eleve: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        date_de_naissance: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        parent: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        adresse: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Eleve',
        tableName: 'eleve',
        timestamps: false,
    }
);
module.exports = Eleve;