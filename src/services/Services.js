/* eslint-disable linebreak-style */
const dataSource = require('../models');

class Service {
  constructor(nomeModelo) {
    this.modelo = nomeModelo;
  }

  async getAll () {
    return dataSource[this.modelo].findAll();
  }
}

module.exports = Service;
