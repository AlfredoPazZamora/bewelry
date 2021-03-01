const router = require('express').Router();
const {
    showProducts,
    searchProduct,
    publishProduct,
    updateProduct,
    deleteProduct,
    seeProductsByUser
} = require('../controllers/products');

router.get('/showproduct', showProducts);
router.get('/search/:title', searchProduct);
router.get('/publish', publishProduct);
router.post('/update/id', updateProduct);
router.put('/delete/id', deleteProduct);
router.delete('/byuser', seeProductsByUser);

module.exports = router;