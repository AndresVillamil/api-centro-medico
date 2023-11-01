const express = require('express');
const pacienteSchema = require('../models/pacientes')

const router = express.Router();

//crear paciente

router.post('/pacientes', (req, res) => {
    //res.send("crear paciente")
    const paciente = pacienteSchema(req.body);
    paciente
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get all pacientes
router.get('/pacientes', (req, res) => {
    //res.send("crear paciente")
   
    pacienteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get un paciente
router.get('/pacientes/:id', (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params;
    pacienteSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})


//update un paciente
router.put('/pacientes/:id', (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params;
    const { nombre, apellido, num_documento, fecha_nacimiento, telefono } = req.body
    pacienteSchema
        .updateOne({ _id: id},{ $set:{nombre, apellido, num_documento, fecha_nacimiento, telefono}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//delete un paciente
router.delete('/pacientes/:id', (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params;
    
    pacienteSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router;