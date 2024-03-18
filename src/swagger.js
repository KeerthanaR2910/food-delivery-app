const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('../src/swagger.yaml');

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerDocument),
};
