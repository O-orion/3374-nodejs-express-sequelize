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

}

module.exports = PessoaController;
