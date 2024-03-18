const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swagger = require('./src/swagger');
const {  testConnection } = require('./src/database');

const organizationRoutes = require('./src/routes/organisationRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const pricingRoutes = require('./src/routes/pricingRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

testConnection();

app.use('/api-docs', swagger.serve, swagger.setup);

app.use('/api/v1', organizationRoutes);
app.use('/api/v1', itemRoutes);
app.use('/api/v1', pricingRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
