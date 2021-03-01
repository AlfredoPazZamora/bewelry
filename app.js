//Importación de las bibliotecas
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

//Objeto global
let app = express();

//Configuración de middelwares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use('/v1', require('./routes'));

//Manejando los errores
app.use((req, res, next) => {
    let err = new Error('Not found');
    err.status = 404;
    next(err);
});

//Iniciando el servidor
let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
    console.log('Escuchando en el puerto' + server.address().port );
});
    