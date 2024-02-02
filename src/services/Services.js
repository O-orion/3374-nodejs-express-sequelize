/* eslint-disable linebreak-style */
const dataSource = require('../database/models');

class Service {
  constructor(nomeModelo) {
    this.modelo = nomeModelo;
  }

  async getAll () {
    return dataSource[this.modelo].findAll();
  }

  async update (dadosAtualizados, id) {
    const listaRegistroAtualizado = dataSource[this.modelo].update(dadosAtualizados, {
      where: {
        id: id
      }
    });

    if (listaRegistroAtualizado[0] === 0 ) {
      return false;
    }

    return true;
  }

  async getOneRecordById(id) {
    return dataSource[this.modelo].findByPk(id);
  }

  async createRegistry(dadosDoRegistro) {
    let dados = dataSource[this.modelo].create(dadosDoRegistro);
    return dados;
  }

  async deleteRegistry(id) {
    return dataSource[this.modelo].destroy({ where: { id: id } });
  }

  async pegarTodosAlunos(scopo) {
    const alunos = dataSource[this.modelo].scope.findAll();
    return alunos;
  }

  async pegarUm(where) {
    const umRegistro = dataSource[this.modelo].findOne({
      where: {
        ...where
      }
    });

    return umRegistro;
  }

}

module.exports = Service;
