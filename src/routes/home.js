const express = require('express');
const fs = require('fs')

const router = express.Router();

router.get('/', (req, res) => {
    //res.send({response:'Welcome'}) //Responde el servisor con un JSON (Página de Inicio)
    fs.readFile('./src/index.html', 'utf8', (err, data) =>{
        if(err) {
        res.writeHead(404)
        res.write("Archivo no encontrado!")
        }else{
            res.write(data)
        }
        res.end()

    })
});

module.exports = router;