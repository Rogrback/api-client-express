const dbconfig = require("../db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    operatorAliases: false
});

const db = {};
db.Sequelize = Sequelize;  // dependency
db.sequelize = sequelize; // connection db
// tables
db.customer = require("./customer")(sequelize, Sequelize); // table customer
db.product = require("./product")(sequelize, Sequelize); // table product
db.sale = require("./sale")(sequelize, Sequelize); // table sale

module.exports = db;