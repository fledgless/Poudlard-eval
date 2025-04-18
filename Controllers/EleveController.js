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
            res.json({ error: 'Erreur lors de l\'ajout de l\'élève.' })
        }
    }
}
module.exports = new EleveController();