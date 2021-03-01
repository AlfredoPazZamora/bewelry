//Importamos el modelo
const User = require('../models/User');

//Funcionalidades
function showInformation(req, res){
    var user1 = new User(1, 'Juan Lopez', 'juan12', '13-04-1995','juan@mail.com',12345)
    var user2 = new User(2, 'Monserrat Perez', 'monse13', '18-04-1995','monse@mail.com',12345)
  res.send([user1, user2])
};

function updateInformation(req, res){
    var user1 = new Usuario(req.params.id, 'Juan Lopez', 'juan13', '13-04-1995','juan@mail.com',12345))
    var updates = req.body
    user1 = { ...user1, ...updates }
    res.send(user1)
}

function createUser(req, res){
    var user1 = new Usuario(req.body)
    res.status(201).send(user1)
};

function deleteUser(req, res){
    res.status(200).send('Usuario ${req.params.id} eliminado');
};

module.exports = {
    showInformation,
    updateInformation,
    createUser,
    deleteUser
};

