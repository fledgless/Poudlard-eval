const express = require('express');
const router = express.Router();
const VacancesController = require('../Controllers/VacancesController');

router.get("/", (req, res) => {
    VacancesController.getAllVacances(req, res);
})
router.get("/:id", (req, res) => {
    VacancesController.getVacancesGetId(req, res);
})
router.post("/", (req, res) => {
    VacancesController.addVacances(req, res);
})
router.put("/:id", (req, res) => {
    VacancesController.updateVacances(req, res);
})
router.delete("/:id", (req, res) => {
    VacancesController.deleteVacances(req, res);
})

module.exports = router;