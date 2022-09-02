module.exports = app => {
    const sale = require('../controllers/sale.controller');
    var router = require("express").Router();
    router.get('/list-sales', sale.findOne);
    app.use('/api', router)
}







