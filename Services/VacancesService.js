const { } = require("sequelize");
const Vacances = require('../Models/Vacances');

class VacancesService {
    async getAllVacances() {
        return await Vacances.findAll();
    }
    async getVacancesById(id) {
        return await Vacances.findByPk(id);
    }
    async addVacances(vacances) {
        return await Vacances.create(vacances);
    }
    async updateVacances(id, vacances) {
        return await Vacances.update(vacances, { where: { id_vacances: id } });
    }
    async deleteVacances(id) {
        return await Vacances.destroy({ where: { id_vacances: id } });
    }
}
module.exports = new VacancesService();