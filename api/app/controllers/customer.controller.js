const db = require('../models');
const Customer = db.customer;
const Op = db.Sequelize.Op;

// List customers
exports.findAll = (req, res) => {
    Customer.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        })        
}

// Create customer
exports.create = (req, res) => {
    const{dni, first_name, last_name, email, phone_number, postal_code, city} = req.body;
    const customer = {
        dni: dni,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        postal_code: postal_code,
        city: city
    }
    Customer.create(customer).then(data => {res.send(data)}).catch(err => {res.status(500).send({message: err.message})});
}

// Delete customer
exports.delete = async(req, res) => {
    try{
        const {dni} = req.params;
        const findCustomerById = await Customer.findByPk(dni);
        if(!findCustomerById){
            res.status(404).send({
                status: 'error',
                message: `Customer with dni ${dni} not found`
            })
        }
        const deleteCustomer = findCustomerById.destroy();
        if(!deleteCustomer){
            res.status(503).send({
                status: 'error',
                message: `Customer with dni ${dni} failed delete`
            })
        }
        res.status(200).send({
            status: 'success',
            message: `Customer with dni ${dni} deleted`
        })
    } catch (error){
        console.log(error);
    }
}

// Update customer
exports.update = async(req, res) => {
    try{
        const {dnis} = req.params;
        const {dni, first_name, last_name, email, phone_number, postal_code, city} = req.body;
        const findCustomerById = await Customer.findOne({
            where: {
                dni
            }
        })
        if(!findCustomerById){
            res.status(404).send({
                status: 'error',
                message: `Customer with dni ${dnis} not found`
            })
        }
        const update = {};
        if(first_name) findCustomerById.first_name = first_name;
        if(last_name) findCustomerById.last_name = last_name;
        if(email) findCustomerById.email = email;
        if(phone_number) findCustomerById.phone_number = phone_number;
        if(postal_code) findCustomerById.postal_code = postal_code;
        if(city) findCustomerById.city = city;
        const updateCustomer = await findCustomerById.save()
        if(!updateCustomer){
            res.status(400).send({
                status: 'error',
                message: `Data customer with dni ${dnis} failed update`
            })
        }
        res.status(200).send({
            status: 'success',
            data: updateCustomer
        })
    } catch (error){
        console.log(error);
    }
}

/*
{
    "dni": 79865245,
    "first_name": "Jorge",
    "last_name": "Sanchez",
    "email": "jsanchez@gmail.com",
    "phone_number": 985622451,
    "postal_code": 8462,
    "city": "df"
}
{
    "dni": 85674354,
    "first_name": "Maria",
    "last_name": "Rosales",
    "email": "mrosales@gmail.com",
    "phone_number": 965236874,
    "postal_code": 2647,
    "city": "cancun"
}
*/