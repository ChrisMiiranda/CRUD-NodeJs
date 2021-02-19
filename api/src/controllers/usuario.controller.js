const db = require("../config/database");

// ==> Método responsável por criar um novo 'Usuario':

exports.createUsuario = async (req, res) => {
  const { usuarioid, nome, endereco, cpf, rg, date_birth } = req.body;
  console.log(req.body);
  const { rows } = await db.query(
    "INSERT INTO USUARIO (usuarioid, nome, endereco, cpf, rg, date_birth) VALUES ($1, $2, $3, $4, $5, $6)" ,
   [ usuarioid, nome, endereco, cpf, rg, date_birth ]
  );
  console.log(rows);

  res.status(201).send({
    message: "Usuario adicionado com sucesso!",
    body: {
      usuario: { usuarioid, nome, endereco, cpf, rg, date_birth }
    },
  });
};