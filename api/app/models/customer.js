module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
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
        }
    })
    return Customer;
}