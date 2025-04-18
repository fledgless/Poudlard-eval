const { } = require("sequelize");
const Maison = require('../Models/Maison');

class MaisonService {
    async getAllMaisons() {
        return await Maison.findAll();
    }
    async getMaisonById(id) {
        return await Maison.findByPk(id);
    }
    async addMaison(maison) {
        return await Maison.create(maison);
    }
    async updateMaison(id, maison) {
        return await Maison.update(maison, { where: { id_maison: id } });
    }
    async deleteMaison(id) {
        return await Maison.destroy({ where: { id_maison: id } });
    }
}
module.exports = new MaisonService();