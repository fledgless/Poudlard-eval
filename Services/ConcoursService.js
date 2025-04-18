const { } = require("sequelize");
const Concours = require('../Models/Concours');

class ConcoursService {
    async getAllConcours() {
        return await Concours.findAll();
    }
    async getConcoursById(id) {
        return await Concours.findByPk(id);
    }
    async addConcours(concours) {
        return await Concours.create(concours);
    }
    async updateConcours(id, concours) {
        return await Concours.update(concours, { where: { id_concours: id } });
    }
    async deleteConcours(id) {
        return await Concours.destroy({ where: { id_concours: id } });
    }
}
module.exports = new ConcoursService();