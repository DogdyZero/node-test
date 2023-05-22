create sequence seq_livro;
create sequence seq_autor;

create table livro(
    id bigint not null primary key,
    titulo varchar(40) not null,
    autorid bigint
);

create table autor(
    id bigint not null primary key,
    nome varchar(40) not null,
    nacionalidade varchar(40)
);
