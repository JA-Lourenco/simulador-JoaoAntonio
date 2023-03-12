-- Insert Data

INSERT INTO dbo.TipoPessoa 
(tipo)
VALUES 
('PF'),
('PJ');

SELECT * FROM TipoPessoa tp ;


INSERT INTO dbo.Modalidade 
(categoria)
VALUES
('Pré-Fixado'),
('Pós-Fixado');

SELECT * FROM Modalidade m ;


INSERT INTO dbo.TipoPessoa_has_Modalidade 
(idTipoPessoa, idModalidade)
VALUES
(1, 1),
(2, 2);

SELECT * FROM TipoPessoa_has_Modalidade tphm ;


INSERT INTO dbo.Produto 
(nome)
VALUES
('Financiamento'),
('Sicoob Engecred Consignado'),
('Empréstimo Pessoal'),
('Imóveis'),
('Crédito Rural');

SELECT * FROM Produto p ;


INSERT INTO dbo.RendaMinima 
(valorRendaMinima)
VALUES
(0),
(2000),
(4000),
(20000),
(400000),
(200000),
(40000000);

SELECT * FROM RendaMinima rm ;


INSERT INTO dbo.Segmento
(idRendaMinima, nome)
VALUES
(1, 'PF1'),
(2, 'PF2'),
(4, 'PF3'),
(5, 'PF4'),
(1, 'PJ1'),
(3, 'PJ2'),
(6, 'PJ3'),
(7, 'PJ4');

SELECT 
	s.nome,
	rm.valorRendaMinima 
FROM Segmento s 
LEFT JOIN RendaMinima rm ON rm.idRendaMinima = s.idRendaMinima ;


-- Pessoa Física e Financiamento
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(1, 1, 1, 1, 10),
(1, 2, 1, 1, 9),
(1, 3, 1, 1, 8),
(1, 4, 1, 1, 7),
(1, 1, 2, 1, 6),
(1, 2, 2, 1, 5),
(1, 3, 2, 1, 4),
(1, 4, 2, 1, 3);

-- Pessoa Física e Sicoob Engecred Consignado
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(2, 1, 1, 1, NULL),
(2, 2, 1, 1, NULL),
(2, 3, 1, 1, NULL),
(2, 4, 1, 1, NULL),
(2, 1, 2, 1, 5),
(2, 2, 2, 1, 4),
(2, 3, 2, 1, 3),
(2, 4, 2, 1, 2);

-- Pessoa Física e Empréstimo Pessoal
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(3, 1, 1, 1, 9),
(3, 2, 1, 1, 8),
(3, 3, 1, 1, 7),
(3, 4, 1, 1, 6),
(3, 1, 2, 1, 5),
(3, 2, 2, 1, 4),
(3, 3, 2, 1, 3),
(3, 4, 2, 1, 2);

-- Pessoa Física e Imóveis
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(4, 1, 1, 1, 20),
(4, 2, 1, 1, 25),
(4, 3, 1, 1, 30),
(4, 4, 1, 1, 35),
(4, 1, 2, 1, 40),
(4, 2, 2, 1, 45),
(4, 3, 2, 1, 50),
(4, 4, 2, 1, 55);

-- Pessoa Jurídica e Financiamento
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(1, 5, 1, 2, 10),
(1, 6, 1, 2, 9),
(1, 7, 1, 2, 8),
(1, 8, 1, 2, 7),
(1, 5, 2, 2, 6),
(1, 6, 2, 2, 5),
(1, 7, 2, 2, 4),
(1, 8, 2, 2, 3);

-- Pessoa Jurídica e Crédito Rural
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(5, 5, 1, 2, 5),
(5, 6, 1, 2, 4),
(5, 7, 1, 2, 3),
(5, 8, 1, 2, 2),
(5, 5, 2, 2, 1),
(5, 6, 2, 2, 0.5),
(5, 7, 2, 2, 0.5),
(5, 8, 2, 2, 0.3);

-- Pessoa Jurídica e Empréstimo Pessoal
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(3, 5, 1, 2, 9),
(3, 6, 1, 2, 8),
(3, 7, 1, 2, 7),
(3, 8, 1, 2, 6),
(3, 5, 2, 2, 5),
(3, 6, 2, 2, 4),
(3, 7, 2, 2, 3),
(3, 8, 2, 2, 2);

-- Pessoa Jurídica e Imóveis
INSERT INTO dbo.RelacaoTaxas
(idProduto, idSegmento, idModalidade, idTipoPessoa, taxa)
VALUES
(4, 5, 1, 2, 20),
(4, 6, 1, 2, 25),
(4, 7, 1, 2, 30),
(4, 8, 1, 2, 35),
(4, 5, 2, 2, 40),
(4, 6, 2, 2, 45),
(4, 7, 2, 2, 50),
(4, 8, 2, 2, 55);

SELECT * FROM Modalidade m ;
SELECT * FROM Produto p;
SELECT * FROM Segmento s;
SELECT * FROM RelacaoTaxas rt ;

SELECT 
	tp.tipo,
	m.categoria,
	p.nome,
	s.nome,
	rt.taxa 
FROM RelacaoTaxas rt 
LEFT JOIN TipoPessoa tp ON tp.idTipoPessoa = rt.idTipoPessoa
LEFT JOIN Modalidade m ON m.idModalidade = rt.idModalidade 
LEFT JOIN Produto p ON p.idProduto = rt.idProduto 
LEFT JOIN Segmento s ON s.idSegmento = rt.idSegmento 
WHERE tp.idTipoPessoa = 1
AND m.idModalidade = 1
AND p.idProduto = 3;
