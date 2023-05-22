import express from "express";
import AutorController from "../controller/AutorController.js";

const router = express.Router();
const controller = new AutorController();

router.get('/autores', controller.pesquisar);
router.get('/autores/:id', controller.pesquisarPorId);
router.post('/autores/', controller.salvar)
router.put('/autores/:id', controller.alterar)
router.delete('/autores/:id', controller.deletar)


export default router;