'use strict';

const express = require('express');
const app = express();
const port = 8010;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const db = require('./database');
const ridesService = require('./src/services/ridesService');

const buildSchemas = require('./src/schemas');

db.serialize(() => {
    buildSchemas(db);
});

app.listen(port, () => console.log(`App started and listening on port ${port}`));

app.get('/health', (req, res) => res.send('Healthy'));

app.post('/rides', jsonParser, (req, res) => {
    ridesService.insert(req, res)
});

app.get('/rides', (req, res) => {
    ridesService.getRides(req, res)
});

app.get('/rides/:id', (req, res) => {
    ridesService.getRide(req, res)
});