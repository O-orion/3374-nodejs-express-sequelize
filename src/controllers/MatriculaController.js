/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculasServices = new MatriculaServices();

class MatriculaController extends Controller {

    constructor() {
        super(matriculasServices);
    }

}

module.exports = MatriculaController;
