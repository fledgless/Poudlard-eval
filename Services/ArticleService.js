const { } = require("sequelize");
const Article = require('../Models/Article');

class ArticleService {
    async getAllArticles() {
        return await Article.findAll();
    }
    async getArticleById(id) {
        return await Article.findByPk(id);
    }
    async addArticle(article) {
        return await Article.create(article);
    }
    async updateArticle(id, article) {
        return await Article.update(article, { where: { id_article: id } });
    }
    async deleteArticle(id) {
        return await Article.destroy({ where: { id_article: id } });
    }
}
module.exports = new ArticleService();