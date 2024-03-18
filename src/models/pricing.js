const { Sequelize } = require('sequelize');
const {sequelize} = require('../database');

const Pricing = sequelize.define('pricings', {
    organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'organizations',
            key: 'id'
        }
    },
    itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'items',
            key: 'id'
        }
    },
    zone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    baseDistanceInKm: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    kmPrice: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fixPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});
Pricing.sync()

module.exports = Pricing;
