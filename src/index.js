const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swagger = require('./swagger');
const {  testConnection } = require('./database');

const organizationRoutes = require('./routes/organisationRoutes');
const itemRoutes = require('./routes/itemRoutes');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

testConnection();

app.use('/api-docs', swagger.serve, swagger.setup);

app.use('/api/v1', organizationRoutes);
app.use('/api/v1', itemRoutes);
app.use('/api/v1', pricingRoutes);

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get('/books', (req, res) => {
    res.send([
        {
            id: 1,
            title: "Harry Potter",
        }
    ])
});

/**
 * @swagger
 * /books:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.post('/books', (req, res) => {
    res.status(201).send();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
