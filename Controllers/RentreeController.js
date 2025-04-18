const RentreeService = require('../Services/RentreeService'); // Ensure the path is correct

class RentreeController {
    async getAllRentrees(req, res) {
        try {
            const rentree = await RentreeService.getAllRentrees();
            res.json(rentree);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération des rentrées.' });
        }
    }
    async getRentreeById(req, res) {
        try {
            const rentree = await RentreeService.getRentreeById(req.params.id);
            if (!rentree) {
                return res.status(404).json({ error: 'Rentrée non trouvée.' });
            }
            res.json(rentree);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la récupération de la rentrée.' })
        }
    }
    async addRentree(req, res) {
        try {
            const rentree = await RentreeService.addRentree(req.body);
            res.status(201).json(rentree);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de l\'ajout de la rentrée.' })
        }
    }
    async updateRentree(req, res) {
        try {
            const rentree = await RentreeService.updateRentree(req.params.id, req.body);
            if (!rentree) {
                return res.status(404).json({ error: 'Rentrée non trouvée.' });
            }
            res.json(rentree);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la mise à jour de la rentrée.' })
        }
    }
    async deleteRentree(req, res) {
        try {
            const rentree = await RentreeService.deleteRentree(req.params.id);
            if (!rentree) {
                return res.status(404).json({ error: 'Rentrée non trouvée.' });
            }
            res.json({ message: 'Rentrée supprimée avec succès.' })
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({ error: 'Erreur lors de la suppression de la rentrée.' })
        }
    }
}
module.exports = new RentreeController();