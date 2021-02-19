/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 19/02/2021
 * Author: Christopher Miranda
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});
