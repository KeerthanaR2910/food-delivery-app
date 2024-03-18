const Organization = require('../models/organization');

exports.createOrganization = async (req, res) => {
    try {
        const { name } = req.body;
        const organization = await Organization.create({ name });
        res.status(201).json(organization);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
