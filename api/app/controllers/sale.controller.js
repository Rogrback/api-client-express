const db = require('../models');
const Sale = db.sale;
//const Op = db.Sequelize.Op;


exports.create = (req, res) => {



    const{customer_id, product_id, amount} = req.body;
    const customer = {

        customer_id: customer_id,
        product_id: product_id,
        amount: amount

    }

    Sale.create(customer).then(data => {res.send(data)}).catch(err => {res.status(500).send({message: err.message})});
}






exports.findAll = (req, res) => {

    Sale.findAll()
        .then(data => res.send(data))
        .cath(err => {
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        })        
}