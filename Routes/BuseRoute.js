const express = require('express');
const router = express.Router();
const BuseController = require('../Controllers/BuseController');

router.get("/", (req, res) => {
    BuseController.getAllBuse(req, res);
})
router.get("/:id", (req, res) => {
    BuseController.getBuseGetId(req, res);
})
router.post("/", (req, res) => {
    BuseController.addBuse(req, res);
})
router.put("/:id", (req, res) => {
    BuseController.updateBuse(req, res);
})
router.delete("/:id", (req, res) => {
    BuseController.deleteBuse(req, res);
})

module.exports = router;