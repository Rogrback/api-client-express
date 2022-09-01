const express = require('express')

const app = express();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
require('./app/routes/customer.routes')(app)
require('./app/routes/product.routes')(app)

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})