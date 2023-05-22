import express from 'express'
import livroController from './LivroRoute.js'
import autorController from './AutorRoute.js'


const routes = (app) => {

    app.route('/').get((_, res) => {
        res.status(200).send("Página Indisponivel")
    })

    app.use(
        express.json(),
        autorController,
        livroController
    )
}

export default routes;