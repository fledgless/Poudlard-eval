const ArticleService = require('../Services/ArticleService');

class ArticleController {
    async getAllArticles(req, res) {
        try {
            const article = await ArticleService.getAllArticles();
            res.json(article);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des articles.' });
        }
    }
    async getArticleGetId(req, res) {
        try {
            const article = await ArticleService.getArticleById(req.params.id);
            if (!article) {
                return res.status(404).json({ error: 'Article non trouvé.' });
            }
            res.json(article);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de l\'article.' })
        }
    }
    async addArticle(req, res) {
        try {
            const article = await ArticleService.addArticle(req.body);
            res.status(201).json(article);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de l\'article.' })
        }
    }
    async updateArticle(req, res) {
        try {
            const article = await ArticleService.updateArticle(req.params.id, req.body);
            if (!article) {
                return res.status(404).json({ error: 'Article non trouvé.' });
            }
            res.json(article);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de l\'article.' })
        }
    }
    async deleteArticle(req, res) {
        try {
            const article = await ArticleService.deleteArticle(req.params.id);
            if (!article) {
                return res.status(404).json({ error: 'Article non trouvé.' });
            }
            res.json({ message: 'Article supprimées avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression de l\'article.' })
        }
    }
}
module.exports = new ArticleController();