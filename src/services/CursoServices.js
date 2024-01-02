/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const Services = require('./Services.js');

class CursoServices extends Services {
    constructor() {
        super('Curso'); // Nome da tabela como parãmetro
    }
}

module.exports = CursoServices;
