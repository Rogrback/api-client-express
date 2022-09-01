module.exports = app => {
    const customer = require('../controllers/customer.controller');
    var router = require("express").Router();
    router.get('/list-customers', customer.findAll);
    app.use('/api', router)
}