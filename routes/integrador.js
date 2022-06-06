const { Router } = require('express');
const { listarRegistros, listarCompletadas } = require('../controllers/integrador');

const router = Router();

router.get('/listar',listarRegistros)

router.get('/listarCompletadas',listarCompletadas)

module.exports = router;