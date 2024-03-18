const { Sequelize } = require('sequelize');
const {sequelize} = require('../database');
const Pricing = require("./pricing");

const Item = sequelize.define('items', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
Item.hasMany(Pricing);
Item.sync()

module.exports = Item;
