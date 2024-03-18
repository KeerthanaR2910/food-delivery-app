const {calculateTotalPrice, addNewPrice} = require('../services/pricingService');

const calculatePrice = async (req, res) => {
    try {
        const {zone, organization_id, total_distance, item_type} = req.body;

        const totalPrice = await calculateTotalPrice(
            zone, organization_id, total_distance, item_type
        );

        if (!totalPrice) {
            return res.status(404).json({error: 'Pricing not found'});
        }

        res.status(200).json({totalPrice});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const addPrice = async (req, res) => {
    try {
         const {organization_id, item_id, zone, base_distance_in_km, km_price, fix_price} = req.body;
         const priceRequest = {
             organizationId:organization_id, itemId:item_id, zone, baseDistanceInKm:base_distance_in_km, kmPrice:km_price, fixPrice: fix_price
         }
         const price = await addNewPrice(priceRequest);
        return res.status(201).json(price);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {calculatePrice, addPrice};

