const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

router.post('/organization', organizationController.createOrganization);

module.exports = router;