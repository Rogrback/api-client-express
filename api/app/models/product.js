const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        sku: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.NUMERIC
        }
    }, {
        timestamps: false
    })
    return Product;
}