const { } = require("sequelize");
const Buse = require('../Models/Buse');

class BuseService {
    async getAllBuse() {
        return await Buse.findAll();
    }
    async getBuseById(id) {
        return await Buse.findByPk(id);
    }
    async addBuse(buse) {
        return await Buse.create(buse);
    }
    async updateBuse(id, buse) {
        return await Buse.update(buse, { where: { id_buse: id } });
    }
    async deleteBuse(id) {
        return await Buse.destroy({ where: { id_buse: id } });
    }
}
module.exports = new BuseService();