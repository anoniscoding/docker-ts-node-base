import * as dotenv from "dotenv"
import "reflect-metadata";
import {createConnection, useContainer as typeOrmUseContainer} from "typeorm";
import {createExpressServer, useContainer as routingUseContainer} from "routing-controllers";
import {Container} from "typedi";
import * as iconvlite from "iconv-lite";

//used for characted encoding conversion
iconvlite.encodingExists("foo");

if (process.env.NODE_ENV !== 'production') {
    dotenv.load()
}

//specify typeOrmUsecontainer and routingusecontainer for dependency injection when using typeorm with routing-controller
typeOrmUseContainer(Container);
routingUseContainer(Container);

const app = () => {
    return createConnection({
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
        const express = createExpressServer({
            classTransformer: true,
            cors: true,
            routePrefix: "/api",
            controllers: [__dirname + "/app/**/*.js"]
        });

        //add global middlewares here//

        const server = express.listen(3000, () => {
            console.log("Started app")
        });

        return { server : server, dbConnection: connection };
    })
}

export { app };