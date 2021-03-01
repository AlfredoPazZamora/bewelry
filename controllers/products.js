//Importamos el modelo
const Product = require('../models/Product');

//Funcionalidades
function showProducts(req, res){
    var product1 = new Product(1, 'Collar de diamantes', 'Diamantes legendarios de corte, color, pureza y brillo excepcionales. Colgante de platino con un diamante de corte brillante redondo. En una cadena de 16 pulgadas.', 'https://imgur.com/XchvU8a','MX$29,000','collares')
    var product2 = new Product(2, 'Anillo de oro blnaco', 'El diamante central en corte brillante redondo ajustado entre cuatro clavijas delgadas le brinda a este anillo atemporal un espíritu femenino con líneas puras y contemporáneas', 'https://imgur.com/kz0HK61','MX$940,000','anillos')
    res.send([product1, product2])
};

function searchProduct(req, res){
    if(!req.params.title){
        res.status(500).send({message: `Para poder hacer una busqueda es necesario enviar el title en body`})
    } else {
        let product = req.params.title;
        Product.find({ title : product }, function (err, product) {
            if(err) return res.status(500).send({ message: `Ocurrio un error al buscar el producto: ${err}`})
            res.status(200).send({searched: product});
        });
    }
}

function publishProduct(req, res){
    var product = new Product({
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        category: req.body.category,
        owner: req.body.owner
    });
    res.status(201).send(product) 
};

function updateProduct(req, res){
    var product1 = new Product(req.params.id, 'Collar de diamantes', 'Diamantes legendarios de corte, color, pureza y brillo excepcionales. Colgante de platino con un diamante de corte brillante redondo. En una cadena de 16 pulgadas.', 'https://imgur.com/XchvU8a','MX$29,000','collares')
    var modificaciones = req.body
    product1 = { ...product1, ...modificaciones }
    res.send(product1)
};

function deleteProduct(req, res){
    if(!req.params.id){
        res.status(500).send({message: `Para poder hacer eliminar el producto es necesario enviar el title en los parametros`})
    } else {
        let product = req.params.id;
        Product.findByIdAndDelete({ title : product }, function (err, product) {
            if(err) return res.status(500).send({ message: `Ocurrio un error al eliminar el producto: ${err}`})
            res.status(200).send({cartaEliminada: product});
        });
    }
};

function seeProductsByUser(req, res){
    if(!req.body.user){
        res.status(500).send({message: `Para poder hacer una busqueda es necesario enviar el owner en body`})
    } else {
        let owner = req.body.user;
        Product.find({ owner: owner }, function (err, product) {
        if(err) return res.status(500).send({ message: `Ocurrio un error al buscar los productos del usuario ${owner}: ${err}`})
        res.status(200).send({searched: product});
    });
    }
};

module.exports = {
    showProducts,
    searchProduct,
    publishProduct,
    updateProduct,
    deleteProduct,
    seeProductsByUser
};