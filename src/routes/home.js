const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({response:'Welcome'}) //Responde el servisor con un JSON (Página de Inicio)
});

module.exports = router;