const { } = require("sequelize");
const Eleve = require('../Models/Eleve');

class EleveService {
    async getAllEleves() {
        return await Eleve.findAll();
    }
    async getEleveById(id) {
        return await Eleve.findByPk(id);
    }
    async addEleve(eleve) {
        return await Eleve.create(eleve);
    }
    async updateEleve(id, eleve) {
        return await Eleve.update(eleve, { where: { id_eleve: id } });
    }
    async deleteEleve(id) {
        return await Eleve.destroy({ where: { id_eleve: id } });
    }
}
module.exports = new EleveService();