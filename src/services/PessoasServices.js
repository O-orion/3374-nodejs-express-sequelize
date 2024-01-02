/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa'); // Nome da tabela como parãmetro
    }

    async pegarMatriculasPorEstudante(id) {
        const estudante = await super.getOneRecordById(id);
        console.log(id);
        console.log(estudante);
        const listaMatriculas = await estudante.getAulasMatriculadas();

        return listaMatriculas;
    }
}

module.exports = PessoaServices;
