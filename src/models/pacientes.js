const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    num_documento: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Paciente', pacienteSchema)