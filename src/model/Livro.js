import { Sequelize } from "sequelize";

import Autor from "./Autor.js"
import db from "../config/DbConfig.js"
const Model = Sequelize.Model;

class Livro extends Model { }
Livro.init({
    id: {
        type: Sequelize.NUMBER(11),
        primaryKey: true,
        defaultValue: db.Sequelize.literal("nextval('seq_livro')")
    },
    titulo: {
        type: Sequelize.STRING(40),
    },
},
    {
        sequelize: db,
        modelName: "livro",
        timestamps: false,
        freezeTableName: true,
    }
)

Autor.hasOne(Livro, { foreignKey: 'autorid' });
Livro.belongsTo(Autor, { foreignKey: "autorid" })


export default Livro;