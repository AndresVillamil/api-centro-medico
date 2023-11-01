const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const pacientesRoutes = require('./routes/pacientes')

const app = express();
const port = process.env.PORT ||3000;

//middleware
app.use(express.json());
app.use('/api/v1', pacientesRoutes)


app.use(express.json());

app.get('/', (req, res) => {
    res.send({response:'Welcome'})
})

//MONGODB CONNECT

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to mongodb Atlas'))
.catch((error) => console.error(error))

app.listen(port, () => {
    console.log('Servere is runnin on localhost:3000')
})
