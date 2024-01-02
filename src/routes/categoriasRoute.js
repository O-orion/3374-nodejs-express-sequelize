/* eslint-disable linebreak-style */
const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const categoriaController =  new CategoriaController();
const router = Router();

router.get('/categorias', (req, res) => categoriaController.getAll(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.getOneById(req, res));
router.post('/categorias', (req, res) => categoriaController.createNew(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.update(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.delete(req, res));

module.exports = router;
