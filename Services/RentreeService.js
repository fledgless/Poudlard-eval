const { } = require("sequelize");
const Rentree = require('../Models/Rentree');

class RentreeService {
    async getAllRentrees() {
        return await Rentree.findAll();
    }
    async getRentreeById(id) {
        return await Rentree.findByPk(id);
    }
    async addRentree(rentree) {
        return await Rentree.create(rentree);
    }
    async updateRentree(id, rentree) {
        return await Rentree.update(rentree, { where: { id_rentree: id } });
    }
    async deleteRentree(id) {
        return await Rentree.destroy({ where: { id_rentree: id } });
    }
}
module.exports = new RentreeService();