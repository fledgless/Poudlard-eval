const NotationService = require('../Services/NotationService');

class NotationController {
    async getAllNotations(req, res) {
        try {
            const notation = await NotationService.getAllNotations();
            res.json(notation);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des notations.' });
        }
    }
    async getNotationById(req, res) {
        try {
            const notation = await NotationService.getNotationById(req.params.id);
            if (!notation) {
                return res.status(404).json({ error: 'Notation non trouvée.' });
            }
            res.json(notation);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de la notation.' })
        }
    }
    async addNotation(req, res) {
        try {
            const notation = await NotationService.addNotation(req.body);
            res.status(201).json(notation);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de la notation.' })
        }
    }
    async updateNotation(req, res) {
        try {
            const notation = await NotationService.updateNotation(req.params.id, req.body);
            if (!notation) {
                return res.status(404).json({ error: 'Notation non trouvée.' });
            }
            res.json(notation);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de la notation.' })
        }
    }
    async deleteNotation(req, res) {
        try {
            const notation = await NotationService.deleteNotation(req.params.id);
            if (!notation) {
                return res.status(404).json({ error: 'Notation non trouvée.' });
            }
            res.json({ message: 'Notation supprimée avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de la notation.' })
        }
    }
}
module.exports = new NotationController();