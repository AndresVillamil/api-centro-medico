const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const pacientesRoutes = require('./routes/pacientes')
const home = require('./routes/home');


//Settings
const app = express();
app.use(cors());
const port = process.env.PORT;

//middleware : Iterposición de todas las solicitudes al mecanismo de rutas "use"
app.use(express.json());
app.use(express.urlencoded({extended:false}))
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api/v1', pacientesRoutes)
app.use('/', home)

app.use(express.json());

// Rutas Web
app.use('/', require('./routes/RutasWeb'))
app.use('/pacientes', require('./routes/pacientes'))

app.use((req, res, next) => {
	res.status(404).render('404', {
		titulo: '404',
		descripcion: 'Page Not Found...'
	})
})

app.use((req,res) =>{
    res.type('text/plain');
    res.status(400);
    res.send('404 Not Found..');
})

// motor de plantillas
app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))



//MONGODB CONNECT
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to mongodb Atlas'))
.catch((error) => console.error(error))


app.listen(port, () => {
    console.log(`Servere is runnin on localhost:${port}`)
})
