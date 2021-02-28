const express = require('express');
const router = express.Router();
const ridesService = require('../services/ridesService');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('', (req, res) => {
    ridesService.getRides(req, res);
});

router.get('/:id', (req, res) => {
    ridesService.getRideById(req, res);
});

router.post('', jsonParser, (req, res) => {
    ridesService.insert(req, res);
});

module.exports = router;