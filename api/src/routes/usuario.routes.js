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

// ==> Rota responsável por listar todos os 'Usuario': (GET): localhost:3000/api/usuarios
router.get('/usuarios', usuarioController.listAllUsuario);

// ==> Rota responsável por selecionar 'Usuario' pelo 'Id': (GET): localhost:3000/api/usuarios/:id
router.get('/usuarios/:id', usuarioController.findUsuarioById);

// ==> Rota responsável por atualizar 'Usuario' pelo 'Id': (PUT): localhost: 3000/api/usuarios/:id
router.put('/usuarios/:id', usuarioController.updateUsuarioById);

// ==> Rota responsável por excluir 'Usuario' pelo 'Id': (DELETE): localhost:3000/api/usuarios/:id
router.delete('/usuarios/:id', usuarioController.deleteUsuarioById);

module.exports = router;