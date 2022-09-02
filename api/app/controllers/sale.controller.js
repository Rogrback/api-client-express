const db = require('../models');
const Sale = db.sale;
const Op = db.Sequelize.Op;

// List sales
exports.findOne = async ( req, res ) => {
    db.sequelize.query( 'select c.dni, c.first_name, c.last_name, p.sku, p.name, p.description, p.price from customers c inner join sales s on c.dni = s.pk_dni inner join products p on s.pk_sku = p.sku' )
        .then( rows  => res.json(rows));
    return true
}