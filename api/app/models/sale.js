module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
        pk_dni: {
            type: Sequelize.CHAR
        },
        pk_sku: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        }
    })
    return Sale;
}