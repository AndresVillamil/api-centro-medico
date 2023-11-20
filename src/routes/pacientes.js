const express = require('express');
const router = express.Router();
const pacienteSchema = require('../models/pacientes')
const fs = require('fs')



//crear paciente

router.post('/pacientes', async (req, res) => {
    //res.send("crear paciente")
    const paciente = await pacienteSchema(req.body);
    paciente
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get all pacientes
router.get('/pacientes',  async (req, res) => {
    //res.send("crear paciente")
   
     await pacienteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))


    
})

//get un paciente
router.get('/pacientes/:id', async (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params; //Interpreta el valor que viene como parámetro
    await pacienteSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})


//update un paciente
router.put('/pacientes/:id', async (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params;
    const { nombre, apellido, num_documento, fecha_nacimiento, telefono } = req.body
    //const body= req.body
    await pacienteSchema
        //.findByIdAndUpdate(id, body , { useFindAndModify: false })
        .updateOne({ _id: id},{ $set:{nombre, apellido, num_documento, fecha_nacimiento, telefono}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//delete un paciente
router.delete('/pacientes/:id', async (req, res) => {
    //res.send("crear paciente")
    const { id } = req.params;
    
    await pacienteSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router;