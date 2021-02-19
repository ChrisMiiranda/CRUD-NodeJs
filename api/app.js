/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 19/02/2021
 * Author: Christopher Miranda
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./index');
// const usuarioRoute = require('./routes/usuario.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', usuarioRoute);

module.exports = app;
