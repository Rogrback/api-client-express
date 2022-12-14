const {config} = require("dotenv");

config();

module.exports = {
    host: process.env.HOST,    
    user: process.env.USER,    
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    ssl: true,
    dialectOptins: {
        ssl: {
            rejectUnauthorized: false
        }
    }
}