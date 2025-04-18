const BuseService = require('../Services/BuseService');

class BuseController {
    async getAllBuse(req, res) {
        try {
            const buse = await BuseService.getAllBuse();
            res.json(buse);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des buse.' });
        }
    }
    async getBuseGetId(req, res) {
        try {
            const buse = await BuseService.getBuseById(req.params.id);
            if (!buse) {
                return res.status(404).json({ error: 'Buse non trouvées.' });
            }
            res.json(buse);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des buse.' })
        }
    }
    async addBuse(req, res) {
        try {
            const buse = await BuseService.addBuse(req.body);
            res.status(201).json(buse);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout des buse.' })
        }
    }
    async updateBuse(req, res) {
        try {
            const buse = await BuseService.updateBuse(req.params.id, req.body);
            if (!buse) {
                return res.status(404).json({ error: 'Buse non trouvées.' });
            }
            res.json(buse);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour des buse.' })
        }
    }
    async deleteBuse(req, res) {
        try {
            const buse = await BuseService.deleteBuse(req.params.id);
            if (!buse) {
                return res.status(404).json({ error: 'Buse non trouvées.' });
            }
            res.json({ message: 'Buse supprimées avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression des buse.' })
        }
    }
}
module.exports = new BuseController();