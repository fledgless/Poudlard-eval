const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
class Article extends Model {}
Article.init(
    {
        id_article: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        prix: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Article',
        tableName: 'article',
        timestamps: false,
    }
);
module.exports = Article;

 