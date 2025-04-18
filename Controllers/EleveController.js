const EleveService = require('../Services/EleveService');

class EleveController {
    async getAllEleves(req, res) {
        try {
            const eleve = await EleveService.getAllEleves();
            res.json(eleve);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des élèves.' });
        }
    }
    async getEleveById(req, res) {
        try {
            const eleve = await EleveService.getEleveById(req.params.id);
            if (!eleve) {
                return res.status(404).json({ error: 'Elève non trouvé.' });
            }
            res.json(eleve);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de l\'élève.' })
        }
    }
    async addEleve(req, res) {
        try {
            const eleve = await EleveService.addEleve(req.body);
            res.status(201).json(eleve);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de l\'élève.' })
        }
    }
    async updateEleve(req, res) {
        try {
            const eleve = await EleveService.updateEleve(req.params.id, req.body);
            if (!eleve) {
                return res.status(404).json({ error: 'Eleve non trouvé.' });
            }
            res.json(eleve);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de l\'élève.' })
        }
    }
    async deleteEleve(req, res) {
        try {
            const eleve = await EleveService.deleteEleve(req.params.id);
            if (!eleve) {
                return res.status(404).json({ error: 'Eleve non trouvé.' });
            }
            res.json({ message: 'Elève supprimé avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression de l\'élève.' })
        }
    }
}
module.exports = new EleveController();