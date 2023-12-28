/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const listaRegistro = await this.entidadeService.getAll();
            return res.status(200).json(listaRegistro);
            
        } catch (error) { console.log(error);
        }
    }

}

module.exports = Controller;