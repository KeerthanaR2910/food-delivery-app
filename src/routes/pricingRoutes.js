const express = require('express');
const router = express.Router();
const {calculatePrice, addPrice} = require('../controllers/pricingController');

router.post('/calculate-price', calculatePrice);
router.post('/price', addPrice);

module.exports = router;
