import Autor from "../model/Autor.js"
import Livro from "../model/Livro.js"
import AutorController from "./AutorController.js"

class LivroController {

    pesquisar = (_, res) => {
        Livro.findAll()
            .then(livro => {
                res.status(200).send(livro)
            }).catch(() => this.mensagemErro(res))
    }

    pesquisarPorId = (req, res) => {
        const { id } = req.params
        Livro.findOne({
            where: { id },
            attributes: {
                exclude: ['autorid']
            },
            include: [{
                model: Autor, attributes: ['nome']
            }]
        }).then(livro => {
            res.status(200).send(livro)
        }).catch((error) => this.mensagemErro(res, `Id ${id} não localizado, ${error}`))
    }

    salvar = (req, res) => {
        const { titulo, autorId } = req.body;
        const autorController = new AutorController();
        autorController.pesquisarId(autorId).then(autor => {
            if (!autor) this.mensagemErro(res, `Autor id ${autorId} não localizado!`)
            Livro.create({ titulo, autorid: autorId },
                { include: [Autor] }
            ).then(item => {
                res.status(201).send(item)
            }).catch((error) => this.mensagemErro(res, `Não localizado, ${error}`))
        }).catch(() => this.mensagemErro(res, `Autor id ${autorId} não localizado!`))


    }

    alterar = (req, res) => {
        const { titulo, autorId } = req.body;
        const { id } = req.params

        const autorController = new AutorController();
        autorController.pesquisarId(autorId).then(autor => {
            if (!autor) this.mensagemErro(res, `Autor id ${autorId} não localizado!`)
            Livro.update({ titulo, autorid: autorId },
                { where: { id } },
            ).then(item => {
                res.status(201).send(item)
            }).catch(() => this.mensagemErro(res))
        }).catch(() => this.mensagemErro(res, `Autor id ${autorId} não localizado!`))
    }

    deletar = (req, res) => {
        const { id } = req.params
        Livro.destroy({
            where: { id }
        }).then(() => {
            res.status(200)
        }).catch(() => this.mensagemErro(res))
    }

    mensagemErro(res, mensagem = "Erro ao tentar processar a requisição") {
        res.status(500).send({ erro: mensagem })
    }
}


export default LivroController