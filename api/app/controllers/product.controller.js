const db = require('../models');
const Product = db.product;
//const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {

    Product.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        })        
}