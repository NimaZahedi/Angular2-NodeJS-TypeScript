var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
//# sourceMappingURL=app.js.map