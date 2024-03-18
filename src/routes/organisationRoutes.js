const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

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
router.post('/organization', organizationController.createOrganization);

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Returns all users
 *     responses:
 *       200:
 *         description: An array of users
 */
router.get('/users', (req, res) => {
    // Your logic to get users
});

module.exports = router;