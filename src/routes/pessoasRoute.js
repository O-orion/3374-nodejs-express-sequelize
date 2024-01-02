/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController =  new PessoaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getOneById(req, res));
router.post('/pessoa', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoa/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoa/:id', (req, res) => pessoaController.delete(req, res));

module.exports = router;
