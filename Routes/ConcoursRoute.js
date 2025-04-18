const express = require('express');
const router = express.Router();
const ConcoursController = require('../Controllers/ConcoursController');

router.get("/", (req, res) => {
    ConcoursController.getAllConcours(req, res);
})
router.get("/:id", (req, res) => {
    ConcoursController.getConcoursGetId(req, res);
})
router.post("/", (req, res) => {
    ConcoursController.addConcours(req, res);
})
router.put("/:id", (req, res) => {
    ConcoursController.updateConcours(req, res);
})
router.delete("/:id", (req, res) => {
    ConcoursController.deleteConcours(req, res);
})

module.exports = router;