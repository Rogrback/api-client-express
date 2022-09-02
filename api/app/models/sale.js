const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
        sale_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        pk_dni: {
            type: Sequelize.CHAR
        },
        pk_sku: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    })
    return Sale;
}