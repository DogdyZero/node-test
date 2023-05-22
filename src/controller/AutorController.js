import Autor from "../model/Autor.js"

class AutorController {

    pesquisar = (_, res) => {
        Autor.findAll()
            .then(autor => {
                res.status(200).send(autor)
            })
    }

    pesquisarPorId = (req, res) => {
        const { id } = req.params
        this.pesquisarId(id)
            .then(autor => {
                res.status(200).send(autor)
            }).catch(() => this.mensagemErro(res, `Id ${id} não localizado`))
    }

    pesquisarId(id) {
        return Autor.findOne({
            where: { id }
        })
    }


    salvar = (req, res) => {
        const { nome, nacionalidade } = req.body;

        Autor.create({ nome, nacionalidade })
            .then(item => {
                res.status(201).send(item)
            }).catch(() => this.mensagemErro(res))
    }

    alterar = (req, res) => {
        const { nome, nacionalidade } = req.body;
        const { id } = req.params
        Autor.update({ nome, nacionalidade },
            {
                where: { id }
            }).then(item => {
                res.status(201).send(item)
            }).catch(() => this.mensagemErro(res))
    }

    deletar = (req, res) => {
        const { id } = req.params
        Autor.destroy({
            where: { id }
        }).then(() => {
            res.send(200)
        }).catch(() => this.mensagemErro(res))
    }

    mensagemErro(res, mensagem = "Erro ao tentar processar a requisição") {
        res.status(500).send({ erro: mensagem })
    }
}

export default AutorController