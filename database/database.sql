create database bewelry;

create table usuario(
    idUsuario int not null,
    nombre varchar(50) not null,
    apePaterno varchar(50) not null,
    apeMaterno varchar(50) not null,
    correo varchar(50) not null,
    password varchar(50) not null,
    primary key(idUsuario)
);

create table producto(
    idProducto int not null,
    idUsuario int not null,
    titulo varchar(50) not null,
    descripcion varchar(200) not null,
    categoria varchar(50) not null,
    precio int not null,
    estado varchar(50) not null,
    urlImagen varchar(200) not null,
    primary key(idProducto));
    foreign key(idUsuario) references(idUsuario)
);

create table transaccion(
    idTransaccion int not null,
    idUsuario int not null,
    idProducto int not null,
    total int not null,
    horaTransaccion datetime,
    primary key(idTransaccion),
    foreign key(idUsuario) references usuario(idUsuario),
    foreign key(idProducto) references producto(idProducto)
);

