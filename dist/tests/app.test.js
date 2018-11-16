"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const request = require("supertest");
describe('GET / - a simple api endpoint', () => {
    let _app;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        _app = yield server_1.app();
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        _app.server.close();
        _app.dbConnection.close();
    }));
    test('Hello API Request - get movies', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(_app.server).get('/api/movies/');
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    }));
    test('Hello API Request - get actors', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(_app.server).get('/api/actors/');
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    }));
});
//# sourceMappingURL=app.test.js.map