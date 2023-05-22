import express from "express";
import LivroController from "../controller/LivroController.js";

const router = express.Router();
const controller = new LivroController();

router.get('/livros', controller.pesquisar);
router.get('/livros/:id', controller.pesquisarPorId);
router.post('/livros/', controller.salvar)
router.put('/livros/:id', controller.alterar)
router.delete('/livros/:id', controller.deletar)


export default router;