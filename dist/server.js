"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const iconvlite = require("iconv-lite");
//used for characted encoding conversion
iconvlite.encodingExists("foo");
if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
}
//specify typeOrmUsecontainer and routingusecontainer for dependency injection when using typeorm with routing-controller
typeorm_1.useContainer(typedi_1.Container);
routing_controllers_1.useContainer(typedi_1.Container);
const app = () => {
    return typeorm_1.createConnection({
        type: "mysql",
        host: process.env.HOST,
        username: process.env.USERNAME,
        port: parseInt(process.env.PORT),
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [__dirname + "/app/**/*.js"],
        synchronize: true,
        logger: "file",
        logging: true,
        cache: true
    }).then(connection => {
        // creates express app, registers all controller routes and returns your express app instance
        const express = routing_controllers_1.createExpressServer({
            classTransformer: true,
            cors: true,
            routePrefix: "/api",
            controllers: [__dirname + "/app/**/*.js"]
        });
        //add global middlewares here//
        const server = express.listen(3000, () => {
            console.log("Started app");
        });
        return { server: server, dbConnection: connection };
    });
};
exports.app = app;
//# sourceMappingURL=server.js.map