const BdcService = require('../Services/BdcService');

class BdcController {
    async getAllBdc(req, res) {
        try {
            const bdc = await BdcService.getAllBdc();
            res.json(bdc);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des bdc.' });
        }
    }
    async getBdcGetId(req, res) {
        try {
            const bdc = await BdcService.getBdcById(req.params.id);
            if (!bdc) {
                return res.status(404).json({ error: 'Bdc non trouvées.' });
            }
            res.json(bdc);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des bdc.' })
        }
    }
    async addBdc(req, res) {
        try {
            const bdc = await BdcService.addBdc(req.body);
            res.status(201).json(bdc);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout des bdc.' })
        }
    }
    async updateBdc(req, res) {
        try {
            const bdc = await BdcService.updateBdc(req.params.id, req.body);
            if (!bdc) {
                return res.status(404).json({ error: 'Bdc non trouvées.' });
            }
            res.json(bdc);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour des bdc.' })
        }
    }
    async deleteBdc(req, res) {
        try {
            const bdc = await BdcService.deleteBdc(req.params.id);
            if (!bdc) {
                return res.status(404).json({ error: 'Bdc non trouvées.' });
            }
            res.json({ message: 'Bdc supprimées avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression des bdc.' })
        }
    }
}
module.exports = new BdcController();