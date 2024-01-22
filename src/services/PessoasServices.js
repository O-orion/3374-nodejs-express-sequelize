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
        const listaMatriculas = await estudante.getAulasMatriculadas();

        return listaMatriculas;
    }

    async pegarTodos() {
        const todosAlunos = await super.pegarTodosAlunos('todasAsPessoas');
        return todosAlunos;
    }
}

module.exports = PessoaServices;
