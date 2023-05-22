import { Sequelize } from "sequelize";
import db from "../config/DbConfig.js";

const Model = Sequelize.Model;

class Autor extends Model { }

Autor.init({
    id: {
        type: Sequelize.NUMBER(11),
        primaryKey: true,
        defaultValue: db.Sequelize.literal("nextval('seq_autor')")
    },
    nome: {
        type: Sequelize.STRING(40),
    },
    nacionalidade: {
        type: Sequelize.STRING(40),
    }
},
    {
        sequelize: db,
        modelName: "autor",
        timestamps: false,
        freezeTableName: true,
    }
)

export default Autor;