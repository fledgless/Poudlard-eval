const { } = require("sequelize");
const Bdc = require('../Models/Bdc');

class BdcService {
    async getAllBdc() {
        return await Bdc.findAll();
    }
    async getBdcById(id) {
        return await Bdc.findByPk(id);
    }
    async addBdc(bdc) {
        return await Bdc.create(bdc);
    }
    async updateBdc(id, bdc) {
        return await Bdc.update(bdc, { where: { id_bdc: id } });
    }
    async deleteBdc(id) {
        return await Bdc.destroy({ where: { id_bdc: id } });
    }
}
module.exports = new BdcService();