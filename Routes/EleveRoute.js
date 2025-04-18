const express = require('express');
const router = express.Router();
const EleveController = require('../Controllers/EleveController');

router.get("/", (req, res) => {
    EleveController.getAllEleves(req, res);
})

module.exports = router;