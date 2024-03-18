
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');


/**
 * @swagger
 * tags:
 *   name: Items
 *   description: APIs for managing items
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Add a new item
 *     description: Add a new item for the food delivery service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *       '500':
 *         description: Internal server error
 */
router.post('/item', itemController.createItem);

module.exports = router;
