const { Router } = require('express');
const { check } = require('express-validator');
const { listarPlantas, consultarDatos } = require('../controllers/atunera');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

/*router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login );*/

router.get('/listar',listarPlantas);

router.get('/consultar',consultarDatos);
module.exports = router;