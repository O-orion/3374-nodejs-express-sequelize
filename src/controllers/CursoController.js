/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursosServices = new CursoServices();

class CursoController extends Controller {

    constructor() {
        super(cursosServices);
    }

}

module.exports = CursoController;
