CREATE TABLE ENDERECOS (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    CEP VARCHAR(9) NOT NULL,
    ENDERECO VARCHAR(100),
    BAIRRO VARCHAR(100),
    CIDADE VARCHAR(100),
    UF VARCHAR(100),
    PRIMARY KEY (ID)
);