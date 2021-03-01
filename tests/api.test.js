'use strict';

const request = require('supertest');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = require('../index')
const buildSchemas = require('../src/schemas');
const credential = require('../credentialGenerator')('xendit', 'supersecretpassword');

describe('API tests', () => {
    before((done) => {
        db.serialize((err) => { 
            if (err) {
                return done(err);
            }

            buildSchemas(db);

            done();
        });
    });

    describe('GET /health', () => {
        it('check health without credential', (done) => {
            request(app)
                .get('/health')
                .expect('Content-Type', /text/)
                .expect(401, done);
        });
    });

    describe('GET /health', () => {
        it('check health with credential', (done) => {
            request(app)
                .get('/health')
                .set('Authorization', 'Basic ' + credential)
                .expect('Content-Type', /text/)
                .expect(200, done);
        });
    });
});