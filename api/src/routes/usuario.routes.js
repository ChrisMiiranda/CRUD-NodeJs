const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');

router.post('/usuarios', usuarioController.createUsuario);

router.get('/usuarios', usuarioController.listAllUsuario);

router.get('/usuarios/:id', usuarioController.findUsuarioById);

router.put('/usuarios/:id', usuarioController.updateUsuarioById);

router.delete('/usuarios/:id', usuarioController.deleteUsuarioById);

module.exports = router;