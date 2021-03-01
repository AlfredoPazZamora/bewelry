const router = require('express').Router();
const {
    verDatosPersonales,
    actualizarDatosPersonales,
    registrarUsuario,
    eliminarCuenta
} = require('../controllers/users');

router.get('/', verDatosPersonales);
router.post('/', registrarUsuario);
router.put('/:id', actualizarDatosPersonales);
router.delete('/:id', eliminarCuenta);

module.exports = router;