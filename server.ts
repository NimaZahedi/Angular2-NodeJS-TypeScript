var express = require('express');

class Server {

  private app = express();
  private router = express.Router();

  private setStaticServer() {
    this.app.use(express.static(__dirname + '/src'));
  }

  private init() {
    this.router.get("/", (req, res) => {
      res.sendFile(__dirname + "/src/index.html");
    });
    this.app.use("/api", this.router);
    this.app.listen(3000);
  }

  private initOtherModules() {
    var Test = require('./src/server/testModule');
    var TestM = new Test.Test();
    this.router.use(TestM.init());
  }

  constructor() {
    this.setStaticServer();
    this.initOtherModules();
    this.init();
  }

}

var server = new Server();
