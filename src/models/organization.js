const { Sequelize } = require('sequelize');
const {sequelize} = require('../database');
const Pricing = require("./pricing");

const Organization = sequelize.define('organizations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
Organization.hasMany(Pricing);
Organization.sync()

module.exports = Organization;
