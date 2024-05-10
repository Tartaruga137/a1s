const swaggerAutogen = require('swagger-autogen')();
const TutorRouters = require('./src/routers/TutorRouters');
const PetRouters = require('./src/routers/PetRouters');

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000'
};

const outputFile = './src/swagger-output.json';
const routes = [TutorRouters, PetRouters];

swaggerAutogen(outputFile, routes, doc).then(() => {
  // Require app after generating Swagger docs to ensure the file exists
  require('./src/app.js');
});
