const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const pacientesRoutes = require('./routes/pacientes')
const home = require('./routes/home');

//Settings
const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use('/api/v1', pacientesRoutes)
app.use('/', home)

app.use(express.json());

//MONGODB CONNECT

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to mongodb Atlas'))
.catch((error) => console.error(error))

app.listen(port, () => {
    console.log(`Servere is runnin on localhost:${port}`)
})
