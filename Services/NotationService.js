const { } = require("sequelize");
const Notation = require('../Models/Notation');

class NotationService {
    async getAllNotations() {
        return await Notation.findAll();
    }
    async getNotationById(id) {
        return await Notation.findByPk(id);
    }
    async addNotation(notation) {
        return await Notation.create(notation);
    }
    async updateNotation(id, notation) {
        return await Notation.update(notation, { where: { id_notation: id } });
    }
    async deleteNotation(id) {
        return await Notation.destroy({ where: { id_notation: id } });
    }
}
module.exports = new NotationService();