const cors = require("cors");
const express = require("express");
const dbConnection = require("../database/dbconnection");

class Server {
  constructor() {
    this.app = express();
    this.rootPath = "/farmacia";
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.rootPath, require("../routes/productos"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
