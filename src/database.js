const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URL,{
    host:'ep-broad-fire-a1nkj6dz-pooler.ap-southeast-1.aws.neon.tech',
    dialect: 'postgres'
});

function testConnection() {
    sequelize.authenticate()
        .then(() => console.log('Connection to the database has been established successfully.'))
        .catch((error) =>console.error('Unable to connect to the database:', error))
}

module.exports = { sequelize, testConnection };
