import {app} from '../server';
import * as supertest from 'supertest';

describe('GET / - a simple api endpoint', () => {
    let _app, request;

    beforeAll(async () => {
        _app = await app();
        request = supertest(_app.server);
    });

    afterAll(async () => {
        _app.server.close();
        _app.dbConnection.close();
    });

    test('Hello API Request - get movies',async () => {
        const response = await request.get('/api/movies/');
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    });

    test('Hello API Request - get actors',async () => {
        const response = await request.get('/api/actors/');
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    });
})
