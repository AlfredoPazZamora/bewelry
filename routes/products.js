const router = require('express').Router();
const {
    mostrarArticulos,
    buscarArticulos,
    publicarArticulo,
    actualizarArticulos,
    eliminarArticulos,
    verArticulosPorUsuario
} = require('../controllers/products');

router.get('/', mostrarArticulos);
router.get('/:id', buscarArticulos);
router.get('/:idUser', verArticulosPorUsuario);
router.post('/', publicarArticulo);
router.put('/:id', actualizarArticulos);
router.delete('/:id', eliminarArticulos);

module.exports = router;