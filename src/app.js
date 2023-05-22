import express from "express";
import routes from "./routes/index.js"
import db from "./config/DbConfig.js"

const app = express();
app.use(express.json())


db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

routes(app)


export default app;