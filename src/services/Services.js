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
}

module.exports = Service;
