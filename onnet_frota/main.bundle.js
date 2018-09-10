webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./abastecimento/abastecimento.module": [
		"../../../../../src/app/layout/abastecimento/abastecimento.module.ts",
		"common",
		"abastecimento.module"
	],
	"./configuracao/configuracao.module": [
		"../../../../../src/app/layout/configuracao/configuracao.module.ts",
		"common",
		"configuracao.module"
	],
	"./controle-veiculo/controle-veiculo.module": [
		"../../../../../src/app/layout/controle-veiculo/controle-veiculo.module.ts",
		"common",
		"controle-veiculo.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/layout/dashboard/dashboard.module.ts"
	],
	"./fornecedor/fornecedor.module": [
		"../../../../../src/app/layout/fornecedor/fornecedor.module.ts",
		"common"
	],
	"./frota/frota.module": [
		"../../../../../src/app/layout/frota/frota.module.ts",
		"common"
	],
	"./item-manutencao/item-manutencao.module": [
		"../../../../../src/app/layout/item-manutencao/item-manutencao.module.ts",
		"common",
		"item-manutencao.module"
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts"
	],
	"./manutencao/manutencao.module": [
		"../../../../../src/app/layout/manutencao/manutencao.module.ts",
		"common"
	],
	"./perfil/perfil.module": [
		"../../../../../src/app/layout/perfil/perfil.module.ts",
		"common",
		"perfil.module"
	],
	"./produto-servico/produto-servico.module": [
		"../../../../../src/app/layout/produto-servico/produto-servico.module.ts",
		"common"
	],
	"./rastreador/rastreador.module": [
		"../../../../../src/app/layout/rastreador/rastreador.module.ts",
		"common"
	],
	"./servico-rastreamento/servico-rastreamento.module": [
		"../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.module.ts",
		"common",
		"servico-rastreamento.module"
	],
	"./tablet-raster/tablet-raster.module": [
		"../../../../../src/app/layout/tablet-raster/tablet-raster.module.ts",
		"common",
		"tablet-raster.module"
	],
	"./tecnicos/tecnicos.module": [
		"../../../../../src/app/layout/tecnicos/tecnicos.module.ts",
		"common",
		"tecnicos.module"
	],
	"./veiculo/veiculo.module": [
		"../../../../../src/app/layout/veiculo/veiculo.module.ts",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.mostrarMenu = false;
        this.logado = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_token_tokenStorage__ = __webpack_require__("../../../../../src/app/shared/token/tokenStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_registrar_module__ = __webpack_require__("../../../../../src/app/registrar/registrar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_drag_drop__ = __webpack_require__("../../../../ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__unauthorized_page_unauthorized_page_component__ = __webpack_require__("../../../../../src/app/unauthorized-page/unauthorized-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__interceptor__ = __webpack_require__("../../../../../src/app/interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_12__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_module__["LoginModule"],
                __WEBPACK_IMPORTED_MODULE_3__registrar_registrar_module__["a" /* RegistrarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_drag_drop__["Ng2DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__unauthorized_page_unauthorized_page_component__["a" /* UnauthorizedPageComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_2__shared_guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_0__shared_token_tokenStorage__["a" /* TokenStorage */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__interceptor__["a" /* Interceptor */],
                    multi: true
                }
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registrar_registrar_component__ = __webpack_require__("../../../../../src/app/registrar/registrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unauthorized_page_unauthorized_page_component__ = __webpack_require__("../../../../../src/app/unauthorized-page/unauthorized-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");







var APP_ROUTES = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__registrar_registrar_component__["a" /* RegistrarComponent */] },
    { path: 'layout', component: __WEBPACK_IMPORTED_MODULE_6__layout_layout_component__["a" /* LayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'paginaNaoAutorizada', component: __WEBPACK_IMPORTED_MODULE_2__unauthorized_page_unauthorized_page_component__["a" /* UnauthorizedPageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px\" style=\"margin-left:2000\">\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_tokenStorage__ = __webpack_require__("../../../../../src/app/shared/token/tokenStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN_HEADER_KEY = 'Authorization';
var Interceptor = (function () {
    function Interceptor(token, router) {
        this.token = token;
        this.router = router;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authReq = req;
        if (this.token.getToken() != null) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())
                    .set("Content-Type", "application/json")
            });
        }
        return next.handle(authReq).do(function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['/login']);
                }
                if (err.status === 403) {
                    _this.router.navigate(['/unauthorized']);
                }
            }
        });
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_token_tokenStorage__["a" /* TokenStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <nav class=\"navbar navbar-expand-lg  col-sm-6 col-md-12 col-lg-12 col-xl-12\">\r\n        <a class=\"navbar-brand\" id=\"titulo\" [routerLink]=\"['/dashboard']\">{{titulo}}</a>\r\n        <a href=\"#\" id=\"toggleButton\" data-target=\"#sidebar\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n            <i class=\"fas fa-bars fa-2x\" id=\"expansive\"></i>\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav  \" id=\"navmenu\">\r\n\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                        aria-expanded=\"false\">\r\n                        <img src=\"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100\" width=\"35px\">\r\n                        {{User}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/perfil']\">Perfil</a>\r\n                        <a class=\"dropdown-item\" href=\"#\" (click)=\"deslogar()\">Logout</a>\r\n                    </div>\r\n                </div>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<div class=\"container-fluid\" class=\"no-print\">\r\n    <div class=\"row d-flex d-md-block flex-nowrap wrapper\">\r\n        <div class=\"col-md-3 float-left col-1 pl-0 pr-0 collapse width \" id=\"sidebar\">\r\n\r\n            <div class=\"list-group border-0 card text-center text-md-left\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" id=\"closeB\" data-target=\"#sidebar\" data-toggle=\"collapse\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <div class=\"text-center\">\r\n                    <img src=\"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100\"\r\n                        class=\"circle\" alt=\"...\" id=\"usuario\">\r\n                </div>\r\n                <h6>Usuário: {{User}}\r\n                    <div class=\"status\">\r\n                        <i class=\"fa fa-circle online\"></i> online\r\n                    </div>\r\n                </h6>\r\n                <a (click)=\"deslogar()\" href=\"#\">\r\n                    <h6>Logout\r\n                        <i class=\"fa fa-sign-out-alt\"></i>\r\n                    </h6>\r\n                </a>\r\n\r\n                <a [routerLink]=\"['/dashboard']\" class=\"list-group-item d-inline-block collapsed\" data-toggle=\"#sidebar\" data-parent=\"#sidebar\">\r\n                    <i class=\"fab fa-cloudscale\"></i>\r\n                    <h6 id=\"dash\">Dashboard</h6>\r\n                    <span class=\"d-none d-md-inline\">Dashboard</span>\r\n                </a>\r\n                <a [routerLink]=\"['/veiculos']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    <h6 id=\"car\">Veiculos</h6>\r\n                    <span class=\"d-none d-md-inline\">Veiculos</span>\r\n                </a>\r\n                <a [routerLink]=\"['/tecnicos']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-id-badge\"></i>\r\n                    <h6 id=\"tec\">Técnicos</h6>\r\n                    <span class=\"d-none d-md-inline\">Técnicos</span>\r\n                </a>\r\n                <a [routerLink]=\"['/frotas']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-flag\"></i>\r\n                    <h6 id=\"frota\">Frotas</h6>\r\n                    <span class=\"d-none d-md-inline\">Frota</span>\r\n                </a>\r\n                <a [routerLink]=\"['/manutencao']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-wrench\"></i>\r\n                    <h6 id=\"manu\">Manutenção</h6>\r\n                    <span class=\"d-none d-md-inline\">Manutenção</span>\r\n                </a>\r\n                <a [routerLink]=\"['/abastecimentos']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-tint\"></i>\r\n                    <h6 id=\"abastecimento\">Abastecimento</h6>\r\n                    <span class=\"d-none d-md-inline\">Abastecimento</span>\r\n                </a>\r\n                <a [routerLink]=\"['/rastreadores']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-microchip\"></i>\r\n                    <h6 id=\"rastreador\">Rastreadores</h6>\r\n                    <span class=\"d-none d-md-inline\">Rastreadores</span>\r\n                </a>\r\n                <a [routerLink]=\"['/servicoRastreamento']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-street-view\"></i>\r\n                    <h6 id=\"servico-rastreamento\">Serviço de rastreamento</h6>\r\n                    <span class=\"d-none d-md-inline\">Serviços de rastreamento</span>\r\n                </a>\r\n                <a [routerLink]=\"['/tabletMap']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-street-view\"></i>\r\n                    <h6 id=\"servico-rastreamento\">TabletMap</h6>\r\n                    <span class=\"d-none d-md-inline\">TabletMap</span>\r\n                </a>\r\n                <a [routerLink]=\"['/controleVeiculo']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-car\"></i>\r\n                    <sup>\r\n                        <i class=\"fa fa-cogs\"></i>\r\n                    </sup>\r\n                    <h6 id=\"controle-veiculo\">Controle de veiculos</h6>\r\n                    <span class=\"d-none d-md-inline\">Controle de veiculos</span>\r\n                </a>\r\n                <a [routerLink]=\"['/itemManutencao']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-cubes\"></i><sup><i class=\"fas fa-wrench\"></i></sup>\r\n                    <h6 id=\"itemManutencao\">Item Manutenção</h6>\r\n                    <span class=\"d-none d-md-inline\">Item Manutenção</span>\r\n                </a>\r\n                <a [routerLink]=\"['/produtoServicos']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-dolly-flatbed\"></i>\r\n                    <h6 id=\"ProdutoServico\">Produto e Serviços</h6>\r\n                    <span class=\"d-none d-md-inline\">Produto e Serviço</span>\r\n                </a>\r\n                <a [routerLink]=\"['/fornecedor']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fas fa-truck\"></i>\r\n                    <h6 id=\"config\">Fornecedor</h6>\r\n                    <span class=\"d-none d-md-inline\">Fornecedor</span>\r\n                </a>\r\n                <a [routerLink]=\"['/configuracao']\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\">\r\n                    <i class=\"fa fa-user\"></i><sup><i class=\"fa fa-cogs\"></i></sup>\r\n                    <h6 id=\"config\">Configuração de usuario</h6>\r\n                    <span class=\"d-none d-md-inline\">Configuração de Usuario</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <main class=\"col-md-12 col px-5 pl-md-2 pt-2 main mx-auto\">\r\n\r\n\r\n\r\n        </main>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sidebar {\n  overflow: hidden;\n  z-index: 3;\n  height: 100em; }\n\n#sidebar .list-group {\n  min-width: 100px;\n  background-color: #1C1C1C;\n  min-height: 120em; }\n\n#sidebar i {\n  margin-right: 6px; }\n\n@media print {\n  .no-print, .no-print * {\n    display: none !important; } }\n\n.status {\n  color: green; }\n\n#sidebar .list-group-item {\n  border-radius: 0;\n  background-color: #1C1C1C;\n  color: #ccc;\n  border-left: 0;\n  border-right: 0;\n  border-color: #2c2c2c;\n  white-space: nowrap;\n  transition: width;\n  transition-duration: 2s;\n  height: 57px; }\n\n#sidebar .list-group-item:hover {\n  color: #33ff00; }\n\n/* highlight active menu */\n#sidebar .list-group-item:not(.collapsed) {\n  background-color: #1C1C1C; }\n\n/* closed state */\n#sidebar .list-group .list-group-item[aria-expanded=\"false\"]::after {\n  content: \" \\F0D7\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px; }\n\n/* open state */\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"] {\n  background-color: #222; }\n\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"]::after {\n  content: \" \\F0DA\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px; }\n\n/* level 1*/\n#sidebar .list-group .collapse .list-group-item,\n#sidebar .list-group .collapsing .list-group-item {\n  padding-left: 20px; }\n\n/* level 2*/\n#sidebar .list-group .collapse > .collapse .list-group-item,\n#sidebar .list-group .collapse > .collapsing .list-group-item {\n  padding-left: 30px; }\n\n/* level 3*/\n#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {\n  padding-left: 40px; }\n\n@media (max-width: 768px) {\n  #sidebar {\n    min-width: 300px;\n    max-width: 300px;\n    overflow-y: auto;\n    overflow-x: visible;\n    transition: all 0.25s ease;\n    -webkit-transform: translateX(-45px);\n            transform: translateX(-45px);\n    position: absolute; }\n  #sidebar.show {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  #sidebar::-webkit-scrollbar {\n    width: 0px; }\n  #sidebar, #sidebar .list-group {\n    min-width: 35px;\n    overflow: visible; }\n  /* overlay sub levels on small screens */\n  #sidebar .list-group .collapse.show, #sidebar .list-group .collapsing {\n    position: relative;\n    z-index: 1;\n    width: 190px;\n    top: 0; }\n  #sidebar .list-group > .list-group-item {\n    text-align: center;\n    padding: .75rem .5rem; }\n  /* hide caret icons of top level when collapsed */\n  #sidebar .list-group > .list-group-item[aria-expanded=\"true\"]::after,\n  #sidebar .list-group > .list-group-item[aria-expanded=\"false\"]::after {\n    display: none; } }\n\n.collapse.show {\n  visibility: visible; }\n\n.collapsing {\n  visibility: visible;\n  height: 0;\n  transition-property: height, visibility;\n  transition-timing-function: ease-out; }\n\n.collapsing.width {\n  transition-property: width, visibility;\n  width: 0;\n  height: 100%;\n  transition-timing-function: ease-out; }\n\n#titulo {\n  font-size: 35px;\n  color: #d3cece; }\n\n#titulo:hover {\n  color: #33ff00; }\n\na {\n  color: white; }\n\na:hover {\n  color: #33ff00; }\n\n.collapse {\n  float: right; }\n\n.dropdown-menu {\n  background-color: #2c2c2c; }\n\n.dropdown-menu > a:hover {\n  background-color: #2c2c2c; }\n\n.navbar {\n  background-color: #1C1C1C; }\n\n.navbar-toggler-icon {\n  color: white; }\n\n#toggleButton {\n  color: #222; }\n\n.navbar-toggler-icon {\n  background-image: url(\"https://image.flaticon.com/icons/svg/148/148795.svg\"); }\n\n#config {\n  overflow: hidden; }\n\n#dash {\n  overflow: hidden; }\n\n#car {\n  overflow: hidden; }\n\n#tec {\n  overflow: hidden; }\n\n#frota {\n  overflow: hidden; }\n\n#manu {\n  overflow: hidden; }\n\n#abastecimento {\n  overflow: hidden; }\n\n#rastreador {\n  overflow: hidden; }\n\n@media (min-width: 667px) {\n  #config {\n    display: none; }\n  #dash {\n    display: none; }\n  #car {\n    display: none; }\n  #tec {\n    display: none; }\n  #frota {\n    display: none; }\n  #manu {\n    display: none; }\n  #abastecimento {\n    display: none; }\n  #rastreador {\n    display: none; }\n  #servico-rastreamento {\n    display: none; }\n  #controle-veiculo {\n    display: none; }\n  #itemManutencao {\n    display: none; }\n  #ProdutoServico {\n    display: none; } }\n\n#navmenu {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#navbarSupportedContent {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-right: 90px; }\n\n#expansive {\n  color: white; }\n\n#expansive:hover {\n  color: #15ff00; }\n\n#usuario {\n  width: 150px;\n  height: 150px;\n  float: left;\n  position: static;\n  border-radius: 50%;\n  margin-left: 20%; }\n\nh6 {\n  text-align: center;\n  margin-left: -70px;\n  color: white; }\n\n.h6 a {\n  display: none; }\n\n#usuario1 {\n  border-radius: 8px;\n  border: outset 2px #6b6767; }\n\n#usuario1:hover {\n  background-color: #238723;\n  color: white; }\n\n.dropdown-menu a:hover {\n  color: green; }\n\n#closeB {\n  color: white;\n  margin-left: 280px;\n  float: left; }\n\n#closeB:hover {\n  color: #48ff00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_token_tokenStorage__ = __webpack_require__("../../../../../src/app/shared/token/tokenStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, token) {
        this.authService = authService;
        this.token = token;
        this.titulo = "OnNet Telecom";
        this.conectado = true;
        this.status = "Logout";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            // toggle sidebar when button clicked
            $('.sidebar-toggle').on('click', function () {
                $('.sidebar').toggleClass('toggled');
            });
            // auto-expand submenu if an item is active
            var active = $('.sidebar .active');
            if (active.length && active.parent('.collapse').length) {
                var parent = active.parent('.collapse');
                parent.prev('a').attr('aria-expanded', true);
                parent.addClass('show');
            }
        });
        if (this.conectado == true) {
            this.status = "Logout";
        }
        this.User = this.token.getUser();
    };
    NavbarComponent.prototype.deslogar = function () {
        this.token.signOut();
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_token_tokenStorage__["a" /* TokenStorage */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/configuracao/usuario/shared/class/usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "../../../../../src/app/layout/configuracao/usuario/shared/service/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = (function () {
    function UsuarioService(http, https) {
        this.http = http;
        this.https = https;
        this.url = "http://177.85.0.23:2222/security/users";
        this.urlSignUp = "http://177.85.0.23:2222/security/users/signup";
        this.urltest = "http://localhost:2222/security/users/perfil";
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(this.url);
    };
    UsuarioService.prototype.getUsuario = function (id) {
        return this.http.get(this.getUsuarioUrl(id));
    };
    UsuarioService.prototype.getUsuarioByUsername = function (username) {
        console.log(this.urltest + "/" + username);
        return this.http.get(this.urltest + "/" + username);
    };
    UsuarioService.prototype.addUsuario = function (usuario) {
        return this.http.post(this.urlSignUp, JSON.stringify(usuario));
    };
    UsuarioService.prototype.updateUsuario = function (usuario) {
        return this.http.post(this.getUsuarioUrl(usuario.id), JSON.stringify(usuario));
    };
    UsuarioService.prototype.deleteUsuario = function (id) {
        return this.http.delete(this.getUsuarioUrl(id));
    };
    UsuarioService.prototype.getUsuarioUrl = function (id) {
        return this.url + "/" + id;
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/controle-veiculo/emprego-veiculo/shared/service/emprego-veiculo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpregoVeiculoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpregoVeiculoService = (function () {
    function EmpregoVeiculoService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/emprego_veiculo";
    }
    EmpregoVeiculoService.prototype.getEmpregoVeiculos = function () {
        return this.http.get(this.url);
    };
    EmpregoVeiculoService.prototype.getEmpregoVeiculo = function (id) {
        return this.http.get(this.getEmpregoVeiculoUrl(id));
    };
    EmpregoVeiculoService.prototype.addEmpregoVeiculo = function (empregoVeiculo) {
        return this.http.post(this.url, JSON.stringify(empregoVeiculo));
    };
    EmpregoVeiculoService.prototype.updateEmpregoVeiculo = function (empregoVeiculo) {
        return this.http.put(this.getEmpregoVeiculoUrl(empregoVeiculo.id), JSON.stringify(empregoVeiculo));
    };
    EmpregoVeiculoService.prototype.deleteEmpregoVeiculo = function (id) {
        return this.http.delete(this.getEmpregoVeiculoUrl(id));
    };
    EmpregoVeiculoService.prototype.getEmpregoVeiculoUrl = function (id) {
        return this.url + "/" + id;
    };
    EmpregoVeiculoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], EmpregoVeiculoService);
    return EmpregoVeiculoService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoAlocadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeiculoAlocadoService = (function () {
    function VeiculoAlocadoService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/veiculo_alocado";
    }
    VeiculoAlocadoService.prototype.getVeiculoAlocados = function () {
        return this.http.get(this.url);
    };
    VeiculoAlocadoService.prototype.getVeiculoAlocado = function (id) {
        return this.http.get(this.getVeiculoAlocadoUrl(id));
    };
    VeiculoAlocadoService.prototype.addVeiculoAlocado = function (veiculoAlocado) {
        return this.http.post(this.url, JSON.stringify(veiculoAlocado));
    };
    VeiculoAlocadoService.prototype.updateVeiculoAlocado = function (veiculoAlocado) {
        return this.http.put(this.getVeiculoAlocadoUrl(veiculoAlocado.id), JSON.stringify(veiculoAlocado));
    };
    VeiculoAlocadoService.prototype.deleteVeiculoAlocado = function (id) {
        return this.http.delete(this.getVeiculoAlocadoUrl(id));
    };
    VeiculoAlocadoService.prototype.getVeiculoAlocadoUrl = function (id) {
        return this.url + "/" + id;
    };
    VeiculoAlocadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], VeiculoAlocadoService);
    return VeiculoAlocadoService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"card text-white bg-primary col-6  col-md-3  col-lg-2  col-xl-3\" id=\"infoCard\">\r\n      <div class=\"card-header\">\r\n        <br>\r\n      </div>\r\n      <a [routerLink]=\"['/veiculos']\">\r\n        <button type=\"btn\" class=\"btn btn-dark\" id=\"carButton\">\r\n          <i class=\"fa fa-car fa-fw fa-2x\"></i>\r\n        </button>\r\n      </a>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Veiculos Cadastrados:</h5>\r\n        <p class=\"card-text\" id=\"card1\">{{veiculosTotal}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card text-white bg-danger col-6 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1\" id=\"infoCard\">\r\n      <div class=\"card-header\">\r\n        <br>\r\n      </div>\r\n\r\n      <a [routerLink]=\"['/tecnicos/condutor']\">\r\n        <button type=\"btn\" class=\"btn btn-dark\" id=\"carButton\">\r\n          <i class=\"fa fa-users fa-fw fa-2x\"></i>\r\n        </button>\r\n      </a>\r\n\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Técnicos Cadastrados:</h5>\r\n        <p class=\"card-text\" id=\"card1\">{{tecnicoTotal}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card text-white bg-info  col-12 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1 \"\r\n      id=\"infoCard\">\r\n      <div class=\"card-header\">\r\n        <br>\r\n      </div>\r\n\r\n      <a [routerLink]=\"['/controleVeiculo/empregoVeiculo']\">\r\n        <button type=\"btn\" class=\"btn btn-dark\" id=\"carButton\">\r\n          <i class=\"fa fa-road fa-fw fa-2x\"></i>\r\n        </button>\r\n      </a>\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Veiculos Empregados:</h5>\r\n        <p class=\"card-text\" id=\"card1\">{{veiculosEmpregadosTotal}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-9 col-lg-9 col-xl-9\">\r\n      <h4>Gráfico de Despesas</h4>\r\n      <p-chart type=\"bar\" [data]=\"data\"></p-chart>\r\n    </div>\r\n\r\n    <div class=\"card text-white col-12 col-md-3 col-lg-3 col-xl-3\" id=\"infoCard\">\r\n      <div class=\"card-header\">\r\n        <br>\r\n      </div>\r\n\r\n      <a [routerLink]=\"['/controleVeiculo/empregoVeiculo']\">\r\n        <button type=\"btn\" class=\"btn btn-dark\" id=\"carButton\">\r\n          <i class=\"fa fa-road fa-fw fa-2x\"></i>\r\n        </button>\r\n      </a>\r\n\r\n\r\n      <div class=\"card-body\" id=\"gastosCard\">\r\n        <h5 class=\"card-title\">Ultimas Despesas</h5>\r\n\r\n\r\n        <div id=\"accordion\">\r\n          <div class=\"card\" id=\"abastecimentoD\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                  Abastecimento\r\n                </button>\r\n              </h5>\r\n            </div>\r\n\r\n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                Valor: valor-total\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card\" id=\"manutencaoD\">\r\n            <div class=\"card-header\" id=\"heading2\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                  Manutenção\r\n                </button>\r\n              </h5>\r\n            </div>\r\n\r\n            <div id=\"collapse2\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                <p>Descrição: descricao</p>\r\n                <p>Valor: Valor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <br>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"card col-12 col-md-3 col-lg-3 col-xl-3\" id=\"rastreador1\">\r\n\r\n      <div class=\"card-body\">\r\n        <i class=\"fa fa-microchip fa-fw fa-3x\" id=\"icone3\"></i>\r\n\r\n        <h6>Rastreadores:</h6>\r\n        {{rastreadorTotal}}\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"card col-12 col-md-3 col-lg-3 offset-md-1 col-xl-3\" id=\"rastreador1\">\r\n\r\n      <div class=\"card-body\">\r\n        <i class=\"fa fa-microchip fa-fw fa-3x\" id=\"icone3\"></i>\r\n\r\n        <h6>Veiculo rastreados:</h6>\r\n        {{VeiculoRastreadosTotal}}\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card col-12 col-md-3 col-lg-3 offset-md-1 col-xl-3\" id=\"rastreador1\">\r\n\r\n      <div class=\"card-body\">\r\n        <i class=\"fa fa-microchip fa-fw fa-3x\" id=\"icone3\"></i>\r\n\r\n        <h6>Rastreadores:</h6>\r\n    \r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#card1 {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 2em;\n  position: relative; }\n\n#infoCard {\n  max-height: 210 px;\n  float: left;\n  text-align: center;\n  background-color: rgba(17, 115, 191, 0.748); }\n\n#carButton {\n  border-radius: 150px;\n  height: 100px;\n  width: 100px;\n  position: static;\n  margin: auto;\n  margin-top: -40px; }\n\na {\n  position: static;\n  margin: auto; }\n\n#menu-header {\n  background-color: #336cc1;\n  color: white;\n  text-align: center; }\n\n#mapa1 {\n  background-color: green; }\n\n#mapa1:hover {\n  border: outset 3px green; }\n\n#rastreador1 {\n  background-color: #b61818; }\n\n#emprego1 {\n  background-color: #3075dc; }\n\n#abastecimento1 {\n  background-color: #ffe100; }\n\nh4 {\n  text-align: center; }\n\n#icone {\n  float: right;\n  opacity: 0.2; }\n\n#icone2 {\n  float: left;\n  opacity: 0.2; }\n\nsup {\n  opacity: 0.2; }\n\n#rastreador1 {\n  background-color: green;\n  color: white;\n  text-align: center; }\n\n#icone3 {\n  float: right;\n  opacity: 0.2; }\n\n#accordion {\n  color: black; }\n\n#abastecimentoD {\n  background-color: #aeadad;\n  border: solid 1px #6a6969; }\n\n#manutencaoD {\n  background-color: #aeaeae;\n  border: solid 1px #6a6969; }\n\n.btn-link {\n  color: black;\n  -webkit-text-decoration-style: none;\n          text-decoration-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_emprego_veiculo_shared_service_emprego_veiculo_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/emprego-veiculo/shared/service/emprego-veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__veiculo_shared_service_veiculo_service__ = __webpack_require__("../../../../../src/app/layout/veiculo/shared/service/veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tecnicos_condutor_shared_service_condutor_service__ = __webpack_require__("../../../../../src/app/layout/tecnicos/condutor/shared/service/condutor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animation__ = __webpack_require__("../../../../../src/app/router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rastreador_shared_service_rastreador_service__ = __webpack_require__("../../../../../src/app/layout/rastreador/shared/service/rastreador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servico_rastreamento_shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(condutorService, empregoVeiculoService, veiculoService, rastreadorService, veiculoRastreadoService) {
        this.condutorService = condutorService;
        this.empregoVeiculoService = empregoVeiculoService;
        this.veiculoService = veiculoService;
        this.rastreadorService = rastreadorService;
        this.veiculoRastreadoService = veiculoRastreadoService;
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Manutenção',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Abastecimento',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
        this.veiculoService.getVeiculos()
            .subscribe(function (veiculos) { return _this.veiculos = veiculos; });
        setTimeout(function () {
            var carroTotal = _this.veiculos.length;
            console.log(carroTotal);
        }, 2000);
        // this.veiculoService.getVeiculos()
        //   .subscribe(veiculos => this.veiculos = veiculos);
        // this.veiculosTotal = this.veiculos.length;
        // this.condutorService.getCondutores()
        //   .subscribe(condutores => this.condutores = condutores);
        // this.tecnicoTotal = this.condutores.length;
        // this.empregoVeiculoService.getEmpregoVeiculos()
        //   .subscribe(empregoVeiculos => this.empregoVeiculos = empregoVeiculos);
        // this.veiculosEmpregadosTotal = this.empregoVeiculos.length;
        // this.rastreadorService.getRastreadores()
        //   .subscribe(rastreadores => this.rastreadorService = rastreadores);
        // this.rastreadorTotal = this.rastreadores.length;
        // this.veiculoRastreadoService.getVeiculoRastreados()
        // .subscribe(veiculoRastreados => this.veiculoRastreados = veiculoRastreados);
        // this.VeiculoRastreadosTotal = this.veiculoRastreados.length;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tecnicos_condutor_shared_service_condutor_service__["a" /* CondutorService */],
            __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_emprego_veiculo_shared_service_emprego_veiculo_service__["a" /* EmpregoVeiculoService */],
            __WEBPACK_IMPORTED_MODULE_1__veiculo_shared_service_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_5__rastreador_shared_service_rastreador_service__["a" /* RastreadorService */],
            __WEBPACK_IMPORTED_MODULE_6__servico_rastreamento_shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rastreador_shared_service_rastreador_service__ = __webpack_require__("../../../../../src/app/layout/rastreador/shared/service/rastreador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_shared_service_veiculo_service__ = __webpack_require__("../../../../../src/app/layout/veiculo/shared/service/veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controle_veiculo_emprego_veiculo_shared_service_emprego_veiculo_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/emprego-veiculo/shared/service/emprego-veiculo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tecnicos_condutor_shared_service_condutor_service__ = __webpack_require__("../../../../../src/app/layout/tecnicos/condutor/shared/service/condutor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_chart__ = __webpack_require__("../../../../primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servico_rastreamento_shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_chart__["ChartModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__tecnicos_condutor_shared_service_condutor_service__["a" /* CondutorService */],
                __WEBPACK_IMPORTED_MODULE_3__controle_veiculo_emprego_veiculo_shared_service_emprego_veiculo_service__["a" /* EmpregoVeiculoService */],
                __WEBPACK_IMPORTED_MODULE_2__veiculo_shared_service_veiculo_service__["a" /* VeiculoService */],
                __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__["a" /* VeiculoAlocadoService */],
                __WEBPACK_IMPORTED_MODULE_0__rastreador_shared_service_rastreador_service__["a" /* RastreadorService */],
                __WEBPACK_IMPORTED_MODULE_10__servico_rastreamento_shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var dashboardRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(dashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<section class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
        this.titulo = "Onnet";
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout',
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__ = __webpack_require__("../../../../../src/app/layout/layout.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__["a" /* layoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__["DashboardModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__shared_guard_auth_guard__["a" /* AuthGuard */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return layoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var layoutRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guard_auth_guard__["a" /* AuthGuard */]], children: [
            { path: 'abastecimentos', loadChildren: './abastecimento/abastecimento.module#AbastecimentoModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'veiculos', loadChildren: './veiculo/veiculo.module#VeiculoModule' },
            { path: 'tecnicos', loadChildren: './tecnicos/tecnicos.module#TecnicosModule' },
            { path: 'fornecedor', loadChildren: './fornecedor/fornecedor.module#FornecedorModule' },
            { path: 'frotas', loadChildren: './frota/frota.module#FrotaModule' },
            { path: 'manutencao', loadChildren: './manutencao/manutencao.module#ManutencaoModule' },
            { path: 'rastreadores', loadChildren: './rastreador/rastreador.module#RastreadorModule' },
            { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule' },
            { path: 'servicoRastreamento', loadChildren: './servico-rastreamento/servico-rastreamento.module#ServicoRastreamentoModule' },
            { path: 'controleVeiculo', loadChildren: './controle-veiculo/controle-veiculo.module#ControleVeiculoModule' },
            { path: 'produtoServicos', loadChildren: './produto-servico/produto-servico.module#ProdutoServicoModule' },
            { path: 'itemManutencao', loadChildren: './item-manutencao/item-manutencao.module#ItemManutencaoModule' },
            { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule' },
            { path: 'tabletMap', loadChildren: './tablet-raster/tablet-raster.module#TabletRasterModule' }
        ] }
];
var layoutRoutingModule = (function () {
    function layoutRoutingModule() {
    }
    layoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(layoutRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]]
        })
    ], layoutRoutingModule);
    return layoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/rastreador/shared/service/rastreador.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RastreadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RastreadorService = (function () {
    function RastreadorService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/rastreador";
    }
    RastreadorService.prototype.getRastreadores = function () {
        return this.http.get(this.url);
    };
    RastreadorService.prototype.getRastreador = function (id) {
        return this.http.get(this.getRastreadorUrl(id));
    };
    RastreadorService.prototype.addRastreador = function (Rastreador) {
        return this.http.post(this.url, JSON.stringify(Rastreador));
    };
    RastreadorService.prototype.updateRastreador = function (Rastreador) {
        return this.http.put(this.getRastreadorUrl(Rastreador.id), JSON.stringify(Rastreador));
    };
    RastreadorService.prototype.deleteRastreador = function (id) {
        return this.http.delete(this.getRastreadorUrl(id));
    };
    RastreadorService.prototype.getRastreadorUrl = function (id) {
        return this.url + "/" + id;
    };
    RastreadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RastreadorService);
    return RastreadorService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoRastreadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeiculoRastreadoService = (function () {
    function VeiculoRastreadoService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/veiculo_rastreado";
        this.ROUTE_URL = "";
    }
    VeiculoRastreadoService.prototype.getVeiculoRastreados = function () {
        return this.http.get(this.url);
    };
    VeiculoRastreadoService.prototype.getVeiculoRastreadosCoord = function () {
        return this.http.get(this.url + "/initRast");
    };
    VeiculoRastreadoService.prototype.getVeiculoRastreado = function (id) {
        return this.http.get(this.getVeiculoRastreadorUrl(id));
    };
    VeiculoRastreadoService.prototype.getVeiculosRoutes = function (imei, data, horaInicial, horaFinal) {
        return this.http.get(this.CriaUrlBuscarRotas(imei, data, horaInicial, horaFinal));
    };
    VeiculoRastreadoService.prototype.getVeiculoPosicao = function (imei) {
        return this.http.get(this.CrirUrlBuscarPosicao(imei));
    };
    VeiculoRastreadoService.prototype.getRastreadorVeiculo = function () {
        return this.http.get(this.url + "/rastreador");
    };
    VeiculoRastreadoService.prototype.addVeiculoRastreado = function (veiculoRastreado) {
        return this.http.post(this.url, JSON.stringify(veiculoRastreado));
    };
    VeiculoRastreadoService.prototype.updateVeiculoRastreado = function (veiculoRastreado) {
        return this.http.put(this.getVeiculoRastreadorUrl(veiculoRastreado.id), JSON.stringify(veiculoRastreado));
    };
    VeiculoRastreadoService.prototype.deleteVeiculoRastreado = function (id) {
        return this.http.delete(this.getVeiculoRastreadorUrl(id));
    };
    VeiculoRastreadoService.prototype.getVeiculoRastreadorUrl = function (id) {
        return this.url + "/" + id;
    };
    VeiculoRastreadoService.prototype.CriaUrlBuscarRotas = function (imei, data, horaInicio, HoraFinal) {
        return this.ROUTE_URL = "http://177.85.0.23:2222/security/veiculo_rastreado/rotas/imei=" + imei + "/data=" + data + "/hora_inicial=" + horaInicio + "/hora_final=" + HoraFinal;
    };
    VeiculoRastreadoService.prototype.CrirUrlBuscarPosicao = function (imei) {
        return this.ROUTE_URL = "http://177.85.0.23:2222/security/veiculo_rastreado/posicao/imei=" + imei;
    };
    VeiculoRastreadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], VeiculoRastreadoService);
    return VeiculoRastreadoService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tecnicos/condutor/shared/service/condutor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CondutorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CondutorService = (function () {
    function CondutorService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/condutor";
    }
    CondutorService.prototype.getCondutores = function () {
        return this.http.get(this.url);
    };
    CondutorService.prototype.getCondutor = function (id) {
        return this.http.get(this.getCondutorUrl(id));
    };
    CondutorService.prototype.addCondutor = function (condutor) {
        return this.http.post(this.url, JSON.stringify(condutor));
    };
    CondutorService.prototype.updateCondutor = function (condutor) {
        return this.http.put(this.getCondutorUrl(condutor.id), JSON.stringify(condutor));
    };
    CondutorService.prototype.deleteCondutor = function (id) {
        return this.http.delete(this.getCondutorUrl(id));
    };
    CondutorService.prototype.getCondutorUrl = function (id) {
        return this.url + "/" + id;
    };
    CondutorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CondutorService);
    return CondutorService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/veiculo/shared/service/veiculo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeiculoService = (function () {
    function VeiculoService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/veiculos";
    }
    VeiculoService.prototype.getVeiculos = function () {
        return this.http.get(this.url);
    };
    VeiculoService.prototype.getVeiculo = function (id) {
        return this.http.get(this.getVeiculoUrl(id));
    };
    VeiculoService.prototype.addVeiculo = function (veiculo) {
        return this.http.post(this.url, JSON.stringify(veiculo));
    };
    VeiculoService.prototype.updateVeiculo = function (veiculo) {
        return this.http.put(this.getVeiculoUrl(veiculo.id), JSON.stringify(veiculo));
    };
    VeiculoService.prototype.deleteVeiculo = function (id) {
        return this.http.delete(this.getVeiculoUrl(id));
    };
    VeiculoService.prototype.getVeiculoUrl = function (id) {
        return this.url + "/" + id;
    };
    VeiculoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], VeiculoService);
    return VeiculoService;
}());



/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.loginUrl = "http://177.85.0.23:2222/user/login";
    }
    AuthService.prototype.fazerLogin = function (username, password) {
        var _this = this;
        this.router.navigate(['/dashboard']);
        var credentials = { username: username, password: password };
        console.log("Autenticando ::");
        return this.http.post("http://177.85.0.23:2222/token/login", credentials).do(function (success) {
            if (window.sessionStorage.length > 0) {
                _this.usuarioAutenticado = true;
                _this.mostrarMenuEmitter.emit(true);
                _this.router.navigate(['/dashboard']);
            }
        });
        // if (usuario.email != undefined &&
        //     usuario.senha != undefined) {
        // } else {
        //     alert("Email ou a Senha estão incorretos")
        //     this.usuarioAutenticado = false;
        //     this.mostrarMenuEmitter.emit(false);
        // }
    };
    AuthService.prototype.logout = function () {
    };
    AuthService.prototype.usuarioEstaAutenticado = function () {
        return this.usuarioAutenticado;
    };
    AuthService.prototype.deslogarDoSistema = function () {
        this.usuarioAutenticado = false;
        return this.usuarioAutenticado;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"assets/imagens/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            <h1>OnNet Telecom</h1>\r\n\r\n            <h5>Login</h5>\r\n            <br>\r\n\r\n            <form [formGroup]=\"formLogin\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s12\">\r\n                        <input [(ngModel)]=\"userLogin.username\" formControlName=\"username\" id=\"username\" type=\"text\" class=\"validate\" class=\"form-control\">\r\n                        <label class=\"active\" for=\"usuario\">Usuário</label>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s12\">\r\n                        <input [(ngModel)]=\"userLogin.password\" formControlName=\"password\" id=\"password\" type=\"password\" class=\"validate\" class=\"form-control\">\r\n                        <label class=\"active\" for=\"password\">Password</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <button class=\"btn waves-effect waves-light\" type=\"btn\" (click)=\"login()\">Login\r\n                </button>\r\n                <a [routerLink]=\"['/register']\">\r\n                    <button class=\"btn waves-effect waves-light\" type=\"btn\" name=\"action\">Registrar</button>\r\n                </a>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #006A31;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0;\n    border-top: none !important; }\n  .login-page #usuario {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white; }\n  .login-page #usuario:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page #senha {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white; }\n  .login-page #senha:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page .btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #006A31;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .btn:hover {\n    background-color: black; }\n  .login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n  .login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login__ = __webpack_require__("../../../../../src/app/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_token_tokenStorage__ = __webpack_require__("../../../../../src/app/shared/token/tokenStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, token, toasterService) {
        this.authService = authService;
        this.router = router;
        this.token = token;
        this.toasterService = toasterService;
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_5__login__["a" /* UserLogin */]();
        this.formLogin = formBuilder.group({
            username: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.fazerLogin(this.userLogin.username, this.userLogin.password).subscribe(function (data) {
            _this.token.saveToken(data.token);
            _this.token.saveUser(_this.userLogin.username);
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.mostrar();
        });
    };
    LoginComponent.prototype.usuarioEstaAutenticado = function () {
        return this.usuarioAutenticado;
    };
    LoginComponent.prototype.logout = function () {
    };
    LoginComponent.prototype.mostrar = function () {
        this.toasterService.Error("Usuario ou senha estão incorretos.");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6__shared_token_tokenStorage__["a" /* TokenStorage */],
            __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__login_routing_module__["a" /* loginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var loginRoutingModule = (function () {
    function loginRoutingModule() {
    }
    loginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(loginRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], loginRoutingModule);
    return loginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  svg {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -250px;\r\n    margin-left: -400px;\r\n  }\r\n  .message-box {\r\n    height: 200px;\r\n    width: 380px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -100px;\r\n    margin-left: 50px;\r\n    color: #FFF;\r\n    font-family: Roboto;\r\n    font-weight: 300;\r\n  }\r\n  .message-box h1 {\r\n    font-size: 60px;\r\n    line-height: 46px;\r\n    margin-bottom: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap {\r\n    margin-top: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap a {\r\n    background: #5282e9;\r\n    padding: 8px 25px;\r\n    border-radius: 4px;\r\n    color: #FFF;\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n    transition: all 0.3s linear;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin-right: 10px\r\n  }\r\n  .buttons-con .action-link-wrap a:hover {\r\n    background: #5A5C6C;\r\n    color: #fff;\r\n  }\r\n  \r\n  .notfound{\r\n    background-color: #323533;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {\r\n    -webkit-animation: float 1s infinite ease-in-out alternate;\r\n            animation: float 1s infinite ease-in-out alternate;\r\n  }\r\n  #Polygon-2 {\r\n    -webkit-animation-delay: .2s;\r\n            animation-delay: .2s; \r\n  }\r\n  #Polygon-3 {\r\n    -webkit-animation-delay: .4s;\r\n            animation-delay: .4s; \r\n  }\r\n  #Polygon-4 {\r\n    -webkit-animation-delay: .6s;\r\n            animation-delay: .6s; \r\n  }\r\n  #Polygon-5 {\r\n    -webkit-animation-delay: .8s;\r\n            animation-delay: .8s; \r\n  }\r\n  \r\n  @-webkit-keyframes float {\r\n      100% {\r\n      -webkit-transform: translateY(20px);\r\n              transform: translateY(20px);\r\n    }\r\n  }\r\n  \r\n  @keyframes float {\r\n      100% {\r\n      -webkit-transform: translateY(20px);\r\n              transform: translateY(20px);\r\n    }\r\n  }\r\n  @media (max-width: 450px) {\r\n    svg {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -250px;\r\n      margin-left: -190px;\r\n    }\r\n    .message-box {\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -100px;\r\n      margin-left: -190px;\r\n      text-align: center;\r\n    }\r\n  }  \r\n \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notfound\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n        <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\"\r\n          stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\"\r\n          stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\"\r\n          stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\"\r\n          stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\"\r\n          stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n      </g>\r\n    </svg>\r\n\r\n\r\n    <div class=\"message-box\">\r\n      <h2>\r\n        <font color=\"white\">Erro 404</font>\r\n      </h2>\r\n      <br>\r\n      <h2>\r\n        <font color=\"white\">Página não encontrada</font>\r\n      </h2>\r\n      <div class=\"buttons-con\">\r\n        <div class=\"action-link-wrap\">\r\n          <a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Voltar a página anterior</a>\r\n          <br>\r\n          <br>\r\n          <a routerLink=\"/dashboard\" class=\"link-button\">Home page</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"/assets/imagens/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            <h1>OnNet Telecom</h1>\r\n\r\n            <h5>Cadastro de usuário</h5>\r\n            <br>\r\n\r\n            <form [formGroup]=\"formUsuario\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s12\">\r\n                        <input formControlName=\"nome\" [(ngModel)]=\"usuario.nome\" id=\"nome\" type=\"text\" class=\"validate\" class=\"form-control\">\r\n                        <label class=\"active\" for=\"nome\">Nome</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s12\">\r\n                        <input formControlName=\"email\" [(ngModel)]=\"usuario.email\" id=\"email\" type=\"text\" class=\"validate\" class=\"form-control\">\r\n                        <label class=\"active\" for=\"Email\">Email</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s12\">\r\n                        <input formControlName=\"senha\" [(ngModel)]=\"usuario.senha\" id=\"senha\" type=\"password\" class=\"validate\" class=\"form-control\">\r\n                        <label class=\"active\" for=\"usuario\">Senha</label>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n\r\n\r\n\r\n            </form>\r\n\r\n            <br>\r\n\r\n            <a [routerLink]=\"['/login']\">\r\n                <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Voltar\r\n                </button>\r\n            </a>\r\n\r\n\r\n          \r\n                <button class=\"btn waves-effect waves-light\" type=\"submit\" (click)=\"save()\" name=\"action\">Concluir</button>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #006A31;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0;\n    border-top: none !important; }\n  .login-page #usuario {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white; }\n  .login-page #usuario:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page #usuario {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white; }\n  .login-page #email:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page #email {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white;\n    text-align: center; }\n  .login-page #senha {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white;\n    text-align: center; }\n  .login-page #senha:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page #nome {\n    background-color: #006a31;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    color: white;\n    border-bottom-color: white;\n    text-align: center; }\n  .login-page #nome:focus {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #15ff00; }\n  .login-page .btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #006A31;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .btn:hover {\n    background-color: black; }\n  .login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n  .login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_configuracao_usuario_shared_class_usuario__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/class/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_configuracao_usuario_shared_service_usuario_service__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/service/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrarComponent = (function () {
    function RegistrarComponent(formBuilder, router, route, usuarioService) {
        this.router = router;
        this.route = route;
        this.usuarioService = usuarioService;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__layout_configuracao_usuario_shared_class_usuario__["a" /* Usuario */]();
        this.formUsuario = formBuilder.group({
            id: [''],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            senha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            ativo: ['true'],
            nome: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    }
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    RegistrarComponent.prototype.save = function () {
        var result, usuarioValue = this.formUsuario.value;
        result = this.usuarioService.addUsuario(usuarioValue);
        this.router.navigate(["login"]);
        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
    };
    RegistrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__("../../../../../src/app/registrar/registrar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registrar/registrar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__layout_configuracao_usuario_shared_service_usuario_service__["a" /* UsuarioService */]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registrar/registrar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_component__ = __webpack_require__("../../../../../src/app/registrar/registrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrar_routing_module__ = __webpack_require__("../../../../../src/app/registrar/registrar.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_configuracao_usuario_shared_service_usuario_service__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/service/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegistrarModule = (function () {
    function RegistrarModule() {
    }
    RegistrarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__registrar_routing_module__["a" /* registrarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__registrar_component__["a" /* RegistrarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__layout_configuracao_usuario_shared_service_usuario_service__["a" /* UsuarioService */]
            ]
        })
    ], RegistrarModule);
    return RegistrarModule;
}());



/***/ }),

/***/ "../../../../../src/app/registrar/registrar.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registrarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_component__ = __webpack_require__("../../../../../src/app/registrar/registrar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var registrarRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__registrar_component__["a" /* RegistrarComponent */] }
];
var registrarRoutingModule = (function () {
    function registrarRoutingModule() {
    }
    registrarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(registrarRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
        })
    ], registrarRoutingModule);
    return registrarRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/router.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

function routerTransition() {
    return slideToRight();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/shared/guard/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_KEY = 'AuthToken';
var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (window.sessionStorage.getItem(TOKEN_KEY) != null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/token/tokenStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var USER_ID = 'UserName';
var TokenStorage = (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.saveUser = function (user) {
        window.sessionStorage.removeItem(USER_ID);
        window.sessionStorage.setItem(USER_ID, user);
    };
    TokenStorage.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorage.prototype.getUser = function () {
        return sessionStorage.getItem(USER_ID);
    };
    TokenStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "../../../../../src/app/toaster-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = (function () {
    function ToasterService() {
    }
    ToasterService.prototype.Success = function (title, message) {
        toastr.success(title, message);
    };
    ToasterService.prototype.Warning = function (title, message) {
        toastr.warning(title, message);
    };
    ToasterService.prototype.Info = function (message) {
        toastr.info(message);
    };
    ToasterService.prototype.Error = function (title, message) {
        toastr.error(title, message);
    };
    ToasterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "../../../../../src/app/unauthorized-page/unauthorized-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background-color: #2F3242;\r\n  }\r\n  svg {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -250px;\r\n    margin-left: -400px;\r\n  }\r\n  .message-box {\r\n    height: 200px;\r\n    width: 380px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -100px;\r\n    margin-left: 50px;\r\n    color: #FFF;\r\n    font-family: Roboto;\r\n    font-weight: 300;\r\n  }\r\n  .message-box h1 {\r\n    font-size: 60px;\r\n    line-height: 46px;\r\n    margin-bottom: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap {\r\n    margin-top: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap a {\r\n    background: #5282e9;\r\n    padding: 8px 25px;\r\n    border-radius: 4px;\r\n    color: #FFF;\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n    transition: all 0.3s linear;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin-right: 10px\r\n  }\r\n  .buttons-con .action-link-wrap a:hover {\r\n    background: #5A5C6C;\r\n    color: #fff;\r\n  }\r\n  \r\n  #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {\r\n    -webkit-animation: float 1s infinite ease-in-out alternate;\r\n            animation: float 1s infinite ease-in-out alternate;\r\n  }\r\n  #Polygon-2 {\r\n    -webkit-animation-delay: .2s;\r\n            animation-delay: .2s; \r\n  }\r\n  #Polygon-3 {\r\n    -webkit-animation-delay: .4s;\r\n            animation-delay: .4s; \r\n  }\r\n  #Polygon-4 {\r\n    -webkit-animation-delay: .6s;\r\n            animation-delay: .6s; \r\n  }\r\n  #Polygon-5 {\r\n    -webkit-animation-delay: .8s;\r\n            animation-delay: .8s; \r\n  }\r\n  \r\n  @-webkit-keyframes float {\r\n      100% {\r\n      -webkit-transform: translateY(20px);\r\n              transform: translateY(20px);\r\n    }\r\n  }\r\n  \r\n  @keyframes float {\r\n      100% {\r\n      -webkit-transform: translateY(20px);\r\n              transform: translateY(20px);\r\n    }\r\n  }\r\n  @media (max-width: 450px) {\r\n    svg {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -250px;\r\n      margin-left: -190px;\r\n    }\r\n    .message-box {\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -100px;\r\n      margin-left: -190px;\r\n      text-align: center;\r\n    }\r\n  }  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unauthorized-page/unauthorized-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n\r\n  <svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n        <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n    </g>\r\n  </svg>\r\n  \r\n  \r\n  <div class=\"message-box\">\r\n  <h2><font color=\"black\">Página não autorizada</font></h2>\r\n  <div class=\"buttons-con\">\r\n    <div class=\"action-link-wrap\">\r\n      <a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Voltar a página anterior</a>\r\n      <a routerLink=\"/dashboard\" class=\"link-button\">Dashboard</a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/unauthorized-page/unauthorized-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedPageComponent = (function () {
    function UnauthorizedPageComponent() {
    }
    UnauthorizedPageComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unauthorized-page',
            template: __webpack_require__("../../../../../src/app/unauthorized-page/unauthorized-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/unauthorized-page/unauthorized-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedPageComponent);
    return UnauthorizedPageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map