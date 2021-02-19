// @ts-nocheck
/**
 * Arquivo: src/routes/usuario.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Usuario'.
 * Data: 19/02/2021
 * Author Christopher Miranda
 */

const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');

// ==> Definindo as rotas do CRUD - 'Usuario':

// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:3000/api/usuarios
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;