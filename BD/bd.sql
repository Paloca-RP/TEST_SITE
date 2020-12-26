create database Login_register;
use Login_register;
CREATE TABLE users(
  ID_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(155) NOT NULL,
  email VARCHAR(155) NOT NULL UNIQUE,
  pass VARCHAR(40) NOT NULL
);

insert into users (nome, email, pass) VALUES ('administrador', 'admin@mail.com', SHA1('1234')); 
select *from users;