const Pricing = require("../models/pricing");
const Item = require("../models/item");

async function calculateTotalPrice(zone, organization_id, total_distance, item_type) {
    const item=await Item.findOne({
        where: {
            type: item_type,
        }
    });
    const pricing = await Pricing.findOne({
        where: {
            zone,
            organizationId: organization_id,
            itemId: item.id
        }
    });
    if (!pricing) {
        return pricing
    }

    const basePrice = pricing.baseDistanceInKm * pricing.fixPrice;

    let kmPrice;
    if (item_type === "perishable") {
        kmPrice = +pricing.kmPrice.split("/")[0];
    } else {
        kmPrice = +pricing.kmPrice.split("/")[1];
    }

    const additionalPrice = (total_distance - pricing.baseDistanceInKm) * kmPrice;
    return (basePrice + additionalPrice) * 100;
}

async function addNewPrice(price) {
    return await Pricing.create(price);
}

module.exports = {calculateTotalPrice, addNewPrice};
