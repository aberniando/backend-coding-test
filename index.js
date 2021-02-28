'use strict';

const express = require('express');
const app = express();
const port = 8010;

const db = require('./database');
const ridesRoutes = require('./src/routes/ridesRoutes');

app.use('/rides', ridesRoutes);

const buildSchemas = require('./src/schemas');

db.serialize(() => {
    buildSchemas(db);
});

app.listen(port, () => console.log(`App started and listening on port ${port}`));

app.get('/health', (req, res) => res.send('Healthy'));