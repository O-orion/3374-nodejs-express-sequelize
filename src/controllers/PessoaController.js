/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoasServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {

    constructor() {
        super(pessoasServices);
    }

    async pegarMatricula(req, res) {
        const { estudanteID } = req.params;
        console.log('oi');
        try {
            const listaMatriculas = await pessoasServices.pegarMatriculasPorEstudante(Number(estudanteID));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            
        }
    }

}

module.exports = PessoaController;
