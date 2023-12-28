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

    async update(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const isUpdate = await this.entidadeService.update(dadosAtualizados, Number(id)); 
            
            if (!isUpdate) {
                return res.status(400).json({ mensagem: 'Erro ao atualizar registro' });
            }

            return res.status(200).json({ mensagem: 'Registro atualizado com sucesso'});
        } catch (error) {
            console.log(error);
        }
    }

    async getOneById(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
     } catch (erro) {
       // erro
     }
   }

   async createNew(req, res) {
     const dadosParaCriacao = req.body;
     try {
        const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
        return res.status(200).json(novoRegistroCriado);
     } catch (erro) {
       // erro
     }
   }

   async delete(req, res) {
    const { id } = req.params;
        try {
        await this.entidadeService.excluiRegistro(Number(id));
       return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
         return res.status(500).json(error.message);
        }
    }

}

module.exports = Controller;