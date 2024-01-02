/* eslint-disable linebreak-style */
const { Router } = require('express');
const MatricularController = require('../controllers/MatriculaController.js');

const matricularController =  new MatricularController();
const router = Router();

router.get('/Matriculars', (req, res) => matricularController.getAll(req, res));
router.get('/Matriculars/:id', (req, res) => matricularController.getOneById(req, res));
router.post('/Matriculars', (req, res) => matricularController.createNew(req, res));
router.put('/Matriculars/:id', (req, res) => matricularController.update(req, res));
router.delete('/Matriculars/:id', (req, res) => matricularController.delete(req, res));

module.exports = router;
