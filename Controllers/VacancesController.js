const VacancesService = require('../Services/VacancesService');

class VacancesController {
    async getAllVacances(req, res) {
        try {
            const vacances = await VacancesService.getAllVacances();
            res.json(vacances);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des vacances.' });
        }
    }
    async getVacancesGetId(req, res) {
        try {
            const vacances = await VacancesService.getVacancesById(req.params.id);
            if (!vacances) {
                return res.status(404).json({ error: 'Vacances non trouvées.' });
            }
            res.json(vacances);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des vacances.' })
        }
    }
    async addVacances(req, res) {
        try {
            const vacances = await VacancesService.addVacances(req.body);
            res.status(201).json(vacances);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout des vacances.' })
        }
    }
    async updateVacances(req, res) {
        try {
            const vacances = await VacancesService.updateVacances(req.params.id, req.body);
            if (!vacances) {
                return res.status(404).json({ error: 'Vacances non trouvées.' });
            }
            res.json(vacances);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour des vacances.' })
        }
    }
    async deleteVacances(req, res) {
        try {
            const vacances = await VacancesService.deleteVacances(req.params.id);
            if (!vacances) {
                return res.status(404).json({ error: 'Vacances non trouvées.' });
            }
            res.json({ message: 'Vacances supprimées avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression des vacances.' })
        }
    }
}
module.exports = new VacancesController();