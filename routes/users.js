const router = require('express').Router();
const {
    showInformation,
    updateInformation,
    createUser,
    deleteUser
} = require('../controllers/users');

router.get('/showInformation', showInformation);
router.post('/registerUser', createUser);
router.put('/updateInformation/:id', updateInformation);
router.delete('deleteUser/:id', deleteUser);

module.exports = router;
