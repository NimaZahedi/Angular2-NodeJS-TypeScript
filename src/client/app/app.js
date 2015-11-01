var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "angular2/angular2", "angular2/http"], factory);
    }
})(function (require, exports) {
    var angular2_1 = require("angular2/angular2");
    var http_1 = require("angular2/http");
    var MyApp = (function () {
        function MyApp(http) {
            var _this = this;
            this.message = '...';
            http.get("http://localhost:3000/api/test")
                .subscribe(function (res) {
                var result = res.json();
                _this.message = result.message;
            });
        }
        MyApp = __decorate([
            angular2_1.Component({
                selector: 'my-app',
                template: '{{message}}',
                viewProviders: [http_1.HTTP_PROVIDERS]
            }), 
            __metadata('design:paramtypes', [http_1.Http])
        ], MyApp);
        return MyApp;
    })();
    exports.MyApp = MyApp;
    angular2_1.bootstrap(MyApp);
});
//# sourceMappingURL=app.js.map