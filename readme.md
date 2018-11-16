To develop, we run: npm run watch-ts (recompiles application on source changes)
and in a separate terminal we run: npm run watch-node (restarts application on recompilation)
If we update the server.ts, watch-ts command will recompile the app, thereby outputing updates to server.js
watch-node will then restart the application so that the changes in server.js can reflect

npm run build-ts only compiles the application
npm run serve (npm run start) only starts the application

References

https://libraries.io/npm/typeorm , 
https://github.com/typeorm/typeorm/blob/master/docs/logging.md
https://github.com/typeorm/typeorm/blob/master/docs/entities.md#column-types,
https://github.com/typeorm/typeorm-routing-controllers-extensions
https://www.npmjs.com/package/routing-controllers
https://basarat.gitbooks.io/typescript/docs/testing/jest.htmlro
https://github.com/typestack/routing-controllers
https://github.com/typeorm/typeorm/blob/master/docs/caching.md
https://www.npmjs.com/package/loadtest

Make scripts executable with chmod +x script_path

Setup With Docker

Run <- ./bin/start_disposable.sh -> to start your containers

Then run <- npm run serve -> within the container

Run <- ./bin/clean.sh -> to stop your containers and delete the images