/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController =  new PessoaController();
const matriculaController = new MatriculaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/todas', (req, res) => pessoaController.pegarTodasMatriculas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getOneById(req, res));
router.post('/pessoas', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

router.get('/pessoas/:estudanteID/matriculas', (req, res) => pessoaController.pegarMatricula(req, res));
router.post('/pessoas/:estudanteID/matriculas', (req, res) => matriculaController.createNew(req, res));

module.exports = router;
