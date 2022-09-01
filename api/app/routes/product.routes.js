module.exports = app => {
    const product = require('../controllers/product.controller');
    var router = require("express").Router();
    router.get('/list-products', product.findAll);
    app.use('/api', router)
}