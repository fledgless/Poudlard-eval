const ConcoursService = require('../Services/ConcoursService');

class ConcoursController {
    async getAllConcours(req, res) {
        try {
            const concours = await ConcoursService.getAllConcours();
            res.json(concours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des concours.' });
        }
    }
    async getConcoursGetId(req, res) {
        try {
            const concours = await ConcoursService.getConcoursById(req.params.id);
            if (!concours) {
                return res.status(404).json({ error: 'Concours non trouvé.' });
            }
            res.json(concours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération du concours.' })
        }
    }
    async addConcours(req, res) {
        try {
            const concours = await ConcoursService.addConcours(req.body);
            res.status(201).json(concours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout du concours.' })
        }
    }
    async updateConcours(req, res) {
        try {
            const concours = await ConcoursService.updateConcours(req.params.id, req.body);
            if (!concours) {
                return res.status(404).json({ error: 'Concours non trouvé.' });
            }
            res.json(concours);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour du concours.' })
        }
    }
    async deleteConcours(req, res) {
        try {
            const concours = await ConcoursService.deleteConcours(req.params.id);
            if (!concours) {
                return res.status(404).json({ error: 'Concours non trouvé.' });
            }
            res.json({ message: 'Concours supprimé avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression du concours.' })
        }
    }
}
module.exports = new ConcoursController();