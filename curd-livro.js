//importa os módulos http e express
const http = require("http");
const express = require("express");
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 300;
app.set("port", porta);
const server = http.createServer(app);
server.listen(300);
let id = 2;
let livros = [
	{
		id: 1,
		titulo: "Livro1",
		descricao: "Livro muito bom",
		edicao: "1 edição",
		autor: "Roberto",
		ibsn: "123456",
	},
	{
		id: 2,
		titulo: "Livro2",
		descricao: "Livro muito ruim",
		edicao: "5 edição",
		autor: "Jhonas",
		ibsn: "654321",
	},
];

let livros2 = [];

app.get("/livros", (req, res, next) => {
	res.status(201).json(livros);
});

app.post("/livros", (req, res, next) => {
	const livro = {
		id: (id += 1),
		titulo: req.body.titulo,
		descricao: req.body.descricao,
		edicao: req.body.edicao,
		autor: req.body.autor,
		ibsn: req.body.ibsn,
	};
	livros.push(livro);
	res.status(201).json(livros);
});

app.put("/livros", (req, res, next) => {
	livros.forEach((livro) => {
		if (livro.id === req.body.id) {
			livro.titulo = req.body.titulo;
			livro.descricao = req.body.descricao;
			livro.edicao = req.body.edicao;
			livro.autor = req.body.autor;
			livro.ibsn = req.body.ibsn;
		}
	});
	res.status(200).json(livros);
});

app.delete("/livros", (req, res, next) => {
	livros.forEach((livro) => {
		if (livro.id === req.body.id) {
			const index = index.Of(livro, 0);
			livros.splice(index, 1);
		}
	});
	res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res, next) => {
	const idLivroDeletado = req.params.id;
	livros.forEach((livro, index) => {
		if (livro.id == idLivroDeletado) livros.splice(index, 1);
	});
	res.status(200).json(livros);
});
