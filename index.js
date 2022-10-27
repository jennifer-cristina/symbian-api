const express = require('express')

const app = express();

app.use(express.json());

const patientsController = require('./controller/patientsController.js');

app.use('/', patientsController)

app.listen(3000, () => {
    console.log('APLICAÇÃO RODANDO EM - hhtp://localhost:3000');
});