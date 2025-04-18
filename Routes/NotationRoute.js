const express = require('express');
const router = express.Router();
const NotationController = require('../Controllers/NotationController');

router.get("/", (req, res) => {
    NotationController.getAllNotations(req, res);
})
router.get("/:id", (req, res) => {
    NotationController.getNotationById(req, res);
})
router.post("/", (req, res) => {
    NotationController.addNotation(req, res);
})
router.put("/:id", (req, res) => {
    NotationController.updateNotation(req, res);
})
router.delete("/:id", (req, res) => {
    NotationController.deleteNotation(req, res);
})

module.exports = router;