const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgres://default:XAx8mr2dhYSB@ep-broad-fire-a1nkj6dz-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require' ,{
    host:'ep-broad-fire-a1nkj6dz-pooler.ap-southeast-1.aws.neon.tech',
    dialect: 'postgres'
});

function testConnection() {
    console.log("testig connection")
    sequelize.authenticate()
        .then(() => console.log('Connection to the database has been established successfully.'))
        .catch((error) =>console.error('Unable to connect to the database:', error))
    console.log("testig connection started")
}

module.exports = { sequelize, testConnection };
