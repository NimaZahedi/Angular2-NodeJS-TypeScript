(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var express = require('express');
    var Test = (function () {
        function Test() {
            this.routes = express.Router();
        }
        Test.prototype.init = function () {
            this.routes.get('/test', function (req, res) {
                res.send({ message: "This is the new Module!!! :) This Is From Test Module And This Route Also Registered By 'TestModule'!" });
            });
            return this.routes;
        };
        return Test;
    })();
    exports.Test = Test;
});
//# sourceMappingURL=testModule.js.map