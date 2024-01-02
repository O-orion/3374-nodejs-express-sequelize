/* eslint-disable linebreak-style */
const dataSource = require('../models');

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

}

module.exports = Service;
