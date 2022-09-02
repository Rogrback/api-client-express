const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        dni: {
            primaryKey: true,
            type: Sequelize.CHAR,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        postal_code: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
    )
    return Customer;
}