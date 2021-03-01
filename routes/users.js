const router = require('express').Router();
const {
    verDatosPersonales,
    actualizarDatosPersonales
} = require('../controllers/users');

router.get('/', verDatosPersonales);
router.put('/:id', actualizarDatosPersonales);