// Importamos las dependencias necesarias
let router = require('express').Router();

// Definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to Bewelry');
});

router.use('/usuarios', require('./users'));
router.use('/productos', require('./products'));
// exportamos nuestro nuevo router
module.exports = router;