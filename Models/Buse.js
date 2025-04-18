const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Buse extends Model {}
Buse.init(
    {
        id_buse: {
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
        modelName: 'Buse',
        tableName: 'buse',
        timestamps: false,
    }
);
module.exports = Buse;