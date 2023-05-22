import { Sequelize } from "sequelize";

const db = new Sequelize('livraria', 'postgres', 'murah', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;
