const Item = require('../models/item');

exports.createItem = async (req, res) => {
    try {
        const { type, description } = req.body;
        const item = await Item.create({ type, description });
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
