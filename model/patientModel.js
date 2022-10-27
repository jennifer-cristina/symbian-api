const Sequelize = require('sequelize');

const connection = require('../database/database');

const patientModel = connection.define(
    'tbl_paciente',
    {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        telefone: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        celular: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        nome_responsavel: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
        telefone_responsavel: {
            type: Sequelize.STRING(15),
            allowNull: true,
        },
    }
)

// patientModel.sync({force:true});

module.exports = patientModel;