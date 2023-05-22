import { Sequelize } from "sequelize";

const db = new Sequelize('livraria', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;
