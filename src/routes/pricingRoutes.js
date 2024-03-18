const express = require('express');
const router = express.Router();
const {calculatePrice, addPrice} = require('../controllers/pricingController');

router.post('/calculate-price', calculatePrice);

/**
 * @swagger
 * /prices:
 *   post:
 *     summary: Add a new price
 *     description: Add a new price for a specific organization and item
 *     parameters:
 *      - name: request_body
 *        description: information needed to caculate price
 *        in: body
 *        required: true
 *        type: object
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *            required:
 *              - organization_id
 *              - item_id
 *              - zone
 *              - base_distance_in_km
 *              - km_price
 *              - fix_price
 *             properties:
 *               organization_id:
 *                 type: integer
 *                 default: 1
 *               item_id:
 *                 type: integer
 *                 default: 1
 *               zone:
 *                 type: string
 *                 default: central
 *               base_distance_in_km:
 *                 type: number
 *                 default: 12
 *               km_price:
 *                 type: number
 *                 default: 1
 *               fix_price:
 *                 type: number
 *                 default: 1
 *     responses:
 *       '201':
 *         description: Created
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /prices:
 *   post:
 *     summary: Add a new item
 *     description: Add a new item for the food delivery service
 *     consumes:
 *         - application/json
 *      produces:
 *         - application/json
 *         - text/xml
 *         - text/html
 *      parameters:
 *         - name: body
 *           in: body
 *           required: true
 *           schema:
 *             # Body schema with atomic property examples
 *             type: object
 *             properties:
 *               testapi:
 *                 type: object
 *                 properties:
 *                   messageId:
 *                     type: string
 *                     example: kkkk8
 *                   messageDateTime:
 *                     type: string
 *                     example: '2014-08-17T14:07:30+0530'
 *               testapiBody:
 *                 type: object
 *                 properties:
 *                   cameraServiceRq:
 *                     type: object
 *                     properties:
 *                       osType:
 *                         type: string
 *                         example: android
 *                       deviceType:
 *                         type: string
 *                         example: samsung555
 *             # Alternatively, we can use a schema-level example
 *             example:
 *               testapi:
 *                 testapiContext:
 *                   messageId: kkkk8
 *                   messageDateTime: '2014-08-17T14:07:30+0530'
 *                 testapiBody:
 *                   cameraServiceRq:
 *                     osType: android
 *                     deviceType: samsung555
 */
router.post('/price', addPrice);

module.exports = router;
