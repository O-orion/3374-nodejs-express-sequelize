/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController =  new PessoaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));

module.exports = router;
