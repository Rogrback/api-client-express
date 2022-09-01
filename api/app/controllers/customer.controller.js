const db = require('../models');
const Customer = db.customer;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {

    Customer.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        })        
}