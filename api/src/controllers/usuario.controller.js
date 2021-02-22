const db = require("../config/database");

exports.createUsuario = async (req, res) => {
  const { nome, endereco, cpf, rg, date_birth, stack } = req.body;
  const { rows } = await db.query(
    "INSERT INTO USUARIO (nome, endereco, cpf, rg, date_birth, stack) VALUES ($1, $2, $3, $4, $5, $6)" ,
   [ nome, endereco, cpf, rg, date_birth, stack ]
  );

  res.status(201).send({
    message: "Usuario adicionado com sucesso!",
    body: {
      usuario: { nome, endereco, cpf, rg, date_birth, stack }
    },
  });
}

exports.listAllUsuario = async (req, res) => {
  const response = await db.query('SELECT * FROM usuario ORDER BY nome ASC');
  res.status(200).send(response.rows);
}

exports.findUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM usuario WHERE usuarioid = $1', [usuarioId]);
  res.status(200).send(response.rows);
}

exports.updateUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const { nome, endereco, stack } = req.body;

  const response = await db.query(
    "UPDATE usuario SET nome = $1, endereco = $2, stack = $3 WHERE usuarioId = $4",
    [nome, endereco, stack, usuarioId]
  );

  res.status(200).send({ message: "Usuario alterado com sucesso!" });
}

exports.deleteUsuarioById = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const { excluido } = req.body;
  await db.query('UPDATE usuario SET excluido = $1 WHERE usuarioId = $2',
    [excluido, usuarioId]
  );

  res.status(200).send({ message: 'Usuario deletado com sucesso!', usuarioId });
}