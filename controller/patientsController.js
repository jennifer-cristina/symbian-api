const express = require('express');

const patientModel = require('../model/patientModel');

const router = express.Router();

router.post('/cadastrarPacientes', (req, res) => {

    let { nome, telefone, celular, email, nome_responsavel, telefone_responsavel } = req.body;

    patientModel.create({
        nome,
        telefone,
        celular,
        email,
        nome_responsavel,
        telefone_responsavel
    }).then(
        () => {
            res.status(201).json({ 'Mensagem': 'Paciente cadastro com sucesso!' })
        }
    ).catch(
        (error) => {
            res.status(500).json({ 'Mensagem': error })
        }
    )
});

router.get('./listarPacientes', (req, res) => {

    patientModel.findAll()
        .then(
            (patients) => {
                res.status(200).send(patients);
            }
        )
        .catch(
            (error) => {
                res.status(500).json({ 'Mensagem' : error })
            }
        );
});

module.exports = router
