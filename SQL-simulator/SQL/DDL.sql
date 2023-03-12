SELECT * FROM sys.databases;

CREATE DATABASE simulador;

USE simulador

-- Create Tables

CREATE TABLE dbo.TipoPessoa (
	idTipoPessoa INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	tipo VARCHAR(45) NOT NULL,
);

SELECT * FROM TipoPessoa ;


CREATE TABLE dbo.Modalidade (
	idModalidade INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	categoria VARCHAR(45) NOT NULL,
);

SELECT * FROM Modalidade ;


CREATE TABLE dbo.TipoPessoa_has_Modalidade (
	idTipoPessoa INT,
	idModalidade INT,
	CONSTRAINT FK_PM_TIPOPESSOA FOREIGN KEY(idTipoPessoa) REFERENCES dbo.TipoPessoa(idTipoPessoa),
	CONSTRAINT FK_PM_MODALIDADE FOREIGN KEY(idModalidade) REFERENCES dbo.Modalidade(idModalidade),
);

SELECT * FROM TipoPessoa_has_Modalidade ;


CREATE TABLE dbo.Produto (
	idProduto INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nome VARCHAR(45) NOT NULL,
);

SELECT * FROM Produto ;


CREATE TABLE dbo.RendaMinima (
	idRendaMinima INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	valorRendaMinima DECIMAL(15,2),
);

SELECT * FROM RendaMinima ;


CREATE TABLE dbo.Segmento (
	idSegmento INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	idRendaMinima INT,
	nome VARCHAR(45) NOT NULL,
	CONSTRAINT FK_RENDAMINIMA FOREIGN KEY(idRendaMinima) REFERENCES dbo.RendaMinima(idRendaMinima),
);

SELECT * FROM Segmento ;


CREATE TABLE dbo.RelacaoTaxas (
	idProduto INT,
	idSegmento INT,
	idModalidade INT,
	idTipoPessoa INT,
	taxa DECIMAL(10,1),
	CONSTRAINT FK_RT_PRODUTO FOREIGN KEY(idProduto) REFERENCES dbo.Produto(idProduto),
	CONSTRAINT FK_RT_SEGMENTO FOREIGN KEY(idSegmento) REFERENCES dbo.Segmento(idSegmento),
	CONSTRAINT FK_RT_MODALIDADE FOREIGN KEY(idModalidade) REFERENCES dbo.Modalidade(idModalidade),
	CONSTRAINT FK_RT_TIPOPESSOA FOREIGN KEY(idTipoPessoa) REFERENCES dbo.TipoPessoa(idTipoPessoa),
);
