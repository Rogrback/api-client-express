module.exports = app => {
    const customer = require('../controllers/customer.controller');
    var router = require("express").Router();
    router.get('/list-customers', customer.findAll);
    router.get('/create-customer', customer.create);
    router.get('/delete-customer/:dni', customer.delete);
    router.get('/update-customer/:dni', customer.update);
    app.use('/api', router)
}