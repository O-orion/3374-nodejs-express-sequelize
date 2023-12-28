/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa'); // Nome da tabela como parãmetro
    }
}

module.exports = PessoaServices;
