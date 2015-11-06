var express = require('express');
var Server = (function () {
    function Server() {
        this.app = express();
        this.router = express.Router();
        this.setStaticServer();
        this.initOtherModules();
        this.init();
    }
    Server.prototype.setStaticServer = function () {
        this.app.use(express.static(__dirname + '/src'));
    };
    Server.prototype.init = function () {
        this.router.get("/", function (req, res) {
            res.sendFile(__dirname + "/src/index.html");
        });
        this.app.use("/api", this.router);
        this.app.listen(3000);
    };
    Server.prototype.initOtherModules = function () {
        var Test = require('./src/server/testModule');
        var TestM = new Test.Test();
        this.router.use(TestM.init());
    };
    return Server;
})();
var server = new Server();
//# sourceMappingURL=server.js.map