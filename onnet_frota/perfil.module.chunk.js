webpackJsonp(["perfil.module"],{

/***/ "../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<perfil-body></perfil-body>"

/***/ }),

/***/ "../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilAdminComponent; });
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

var PerfilAdminComponent = (function () {
    function PerfilAdminComponent() {
    }
    PerfilAdminComponent.prototype.ngOnInit = function () {
    };
    PerfilAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'perfil-admin',
            template: __webpack_require__("../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilAdminComponent);
    return PerfilAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <!-- Painel do usuario -->\r\n      <div class=\"card col-12 col-md-3 col-lg-3 col-xl-3\">\r\n        <div class=\"card-header\">\r\n          <img src=\"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100\"\r\n            width=\"150px\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\"><a href=\"#\">Editar Perfil</a></li>\r\n            <li class=\"list-group-item\"><a href=\"#\">Redefinição de senha</a></li>\r\n            <li class=\"list-group-item\"><a href=\"#\">Deslogar</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Painel do usuario dados -->\r\n\r\n      <div class=\"card col-12 col-md-9 col-lg-9 col-xl-9\">\r\n        <div class=\"card-header\">\r\n          Dados do seu usuario\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- Formulario Usuario -->\r\n          <form [formGroup]=\"formUsuario\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                <label for=\"cod\">\r\n                  <font color=\"black\">Sequencial</font>\r\n                </label>\r\n                <div class=\"input-group mb-2\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                      <i class=\"fa fa-asterisk\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <input readonly type=\"text\" id=\"id\" formControlName=\"id\" [(ngModel)]=\"usuario.id\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n                <label for=\"nome\">\r\n                  <font color=\"black\">Nome</font>\r\n                </label>\r\n                <div class=\"input-group mb-2\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                      <i class=\"fas fa-user\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <input readonly type=\"text\" formControlName=\"nome\" [(ngModel)]=\"usuario.nome\" class=\"form-control\">\r\n                </div>\r\n                <app-campo-invalid [mostrarErro]=\"verificaValidTouched('nome')\" msgErro=\"O nome do usuario é obrigatório.\">\r\n                </app-campo-invalid>\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n                <label for=\"username\">\r\n                  <font color=\"black\">Nome de usuario</font>\r\n                </label>\r\n                <div class=\"input-group mb-2\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                      <i class=\"fas fa-user\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <input readonly type=\"text\" formControlName=\"username\" [(ngModel)]=\"usuario.username\" class=\"form-control\">\r\n                </div>\r\n                <app-campo-invalid [mostrarErro]=\"verificaValidTouched('username')\" msgErro=\"O nome de usuario é obrigatório.\">\r\n                </app-campo-invalid>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"form-group col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n                <label for=\"email\">\r\n                  <font color=\"black\">Email</font>\r\n                </label>\r\n                <div class=\"input-group mb-2\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                      <i class=\"fas fa-at\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <input readonly type=\"email\" formControlName=\"email\" [(ngModel)]=\"usuario.email\" class=\"form-control\">\r\n                </div>\r\n                <app-campo-invalid [mostrarErro]=\"verificaValidTouched('email')\" msgErro=\"O nome de usuario é obrigatório.\">\r\n                  </app-campo-invalid>\r\n              </div>\r\n\r\n              \r\n            </div>\r\n\r\n\r\n\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracao_usuario_shared_class_usuario__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/class/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuracao_usuario_shared_service_usuario_service__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/service/usuario.service.ts");
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







var PerfilBodyComponent = (function () {
    function PerfilBodyComponent(formBuilder, router, route, ToasterService, usuarioService, token) {
        this.router = router;
        this.route = route;
        this.ToasterService = ToasterService;
        this.usuarioService = usuarioService;
        this.token = token;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__configuracao_usuario_shared_class_usuario__["a" /* Usuario */]();
        this.formUsuario = formBuilder.group({
            id: [''],
            nome: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            senha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            ativo: [true]
        });
    }
    PerfilBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarioByUsername(sessionStorage.getItem("UserName"))
            .subscribe(function (dados) { return _this.popularDadosForm(dados); }, function (response) {
            if (response.status == 404) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    PerfilBodyComponent.prototype.popularDadosForm = function (dados) {
        this.formUsuario.patchValue({
            id: dados.id,
            nome: dados.nome,
            username: dados.username,
            email: dados.email,
            senha: dados.senha
        });
    };
    PerfilBodyComponent.prototype.save = function () {
        var _this = this;
        var result, usuarioValue = this.formUsuario.value;
        if (usuarioValue.id) {
            result = this.usuarioService.updateUsuario(usuarioValue)
                .subscribe(function (suc) {
                _this.ToasterService.Success("Perfil editado com sucesso !!");
            }, function (err) {
                _this.ToasterService.Error("Ocorreu algum erro ao tentar editar o perfil !!");
            });
        }
        else {
            return;
        }
        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
        var username = sessionStorage.getItem("UserName");
        setTimeout(function () {
            _this.usuarioService.getUsuarioByUsername(username)
                .subscribe(function (dados) { return _this.popularDadosForm(dados); }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['/dashboard']);
                }
            });
        }, 1000);
        // processo de salvar concluido e prox etapa é bloquear os campos novamente
    };
    PerfilBodyComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formUsuario.get(campo).valid && this.formUsuario.get(campo).touched;
    };
    PerfilBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'perfil-body',
            template: __webpack_require__("../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__configuracao_usuario_shared_service_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_token_tokenStorage__["a" /* TokenStorage */]])
    ], PerfilBodyComponent);
    return PerfilBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/perfil/perfil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <perfil-admin></perfil-admin>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animation__ = __webpack_require__("../../../../../src/app/router.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilComponent = (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__("../../../../../src/app/layout/perfil/perfil.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/perfil/perfil.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/perfil/perfil.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuracao_usuario_shared_service_usuario_service__ = __webpack_require__("../../../../../src/app/layout/configuracao/usuario/shared/service/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_tokenStorage__ = __webpack_require__("../../../../../src/app/shared/token/tokenStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_perfil_body_perfil_body_component__ = __webpack_require__("../../../../../src/app/layout/perfil/components/perfil-body/perfil-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_component__ = __webpack_require__("../../../../../src/app/layout/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__perfil_routing_module__ = __webpack_require__("../../../../../src/app/layout/perfil/perfil.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_perfil_admin_perfil_admin_component__ = __webpack_require__("../../../../../src/app/layout/perfil/components/perfil-admin/perfil-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__campo_invalid_campo_invalid_module__ = __webpack_require__("../../../../../src/app/campo-invalid/campo-invalid.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PerfilModule = (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__perfil_routing_module__["a" /* PerfilRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__campo_invalid_campo_invalid_module__["a" /* CampoInvalidModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__perfil_component__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_perfil_admin_perfil_admin_component__["a" /* PerfilAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_perfil_body_perfil_body_component__["a" /* PerfilBodyComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__shared_token_tokenStorage__["a" /* TokenStorage */],
                __WEBPACK_IMPORTED_MODULE_0__configuracao_usuario_shared_service_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_10__toaster_service__["a" /* ToasterService */]
            ],
            exports: []
        })
    ], PerfilModule);
    return PerfilModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/perfil/perfil.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_component__ = __webpack_require__("../../../../../src/app/layout/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var perfilRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__perfil_component__["a" /* PerfilComponent */] },
];
var PerfilRoutingModule = (function () {
    function PerfilRoutingModule() {
    }
    PerfilRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(perfilRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
        })
    ], PerfilRoutingModule);
    return PerfilRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=perfil.module.chunk.js.map