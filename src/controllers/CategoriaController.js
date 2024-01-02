/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriasServices = new CategoriaServices();

class CategoriaController extends Controller {

    constructor() {
        super(categoriasServices);
    }

}

module.exports = CategoriaController;
