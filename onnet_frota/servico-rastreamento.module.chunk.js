webpackJsonp(["servico-rastreamento.module"],{

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<servico-rastreamento-tools></servico-rastreamento-tools>\r\n<servico-rastreamento-header></servico-rastreamento-header>\r\n<servico-rastreamento-search></servico-rastreamento-search>\r\n<servico-rastreamento-table></servico-rastreamento-table>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicoRastreamentoAdminComponent = (function () {
    function ServicoRastreamentoAdminComponent() {
    }
    ServicoRastreamentoAdminComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('html, body').animate({ scrollTop: 0 });
    };
    ServicoRastreamentoAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'servico-rastreamento-admin',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoRastreamentoAdminComponent);
    return ServicoRastreamentoAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header{\r\n    background-color: green;\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form):not(div){\r\n    border: solid 1px red;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.ng-valid:not(form):not(div){\r\n    border: solid 1px rgb(19, 219, 19);\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"container-fluid\">\r\n\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n          <a [routerLink]=\"['']\">home</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n          <a [routerLink]=\"['/servicoRastreamento']\">servicoRastreado</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">form</li>\r\n      </ol>\r\n    </nav>\r\n\r\n    <header>\r\n      <h2>\r\n        <font color=\"black\">Formulario de vinculo de rastreador</font>\r\n      </h2>\r\n    </header>\r\n\r\n    <form [formGroup]=\"formVeiculoRastreado\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n          <label for=\"cod\">\r\n            <font color=\"black\">Código</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-asterisk\"></i>\r\n              </div>\r\n            </div>\r\n            <input readonly type=\"text\" formControlName=\"id\" [(ngModel)]=\"veiculoRastreado.id\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <div formGroupName=\"veiculo_alocado\">\r\n            <label for=\"veiculo_alocado\">\r\n              <font color=\"black\">Veiculo</font>\r\n            </label>\r\n            <div class=\"input-group mb-2\">\r\n              <select id=\"veiculo_alocado\" formControlName=\"id\" [(ngModel)]=\"veiculoRastreado.veiculoAlocado.id\" class=\"form-control\">\r\n                <option selected>Selecione um veiculo</option>\r\n                <option *ngFor=\"let veiculoAlocado of veiculoAlocados\" value=\"{{veiculoAlocado.id}}\">{{veiculoAlocado.veiculo.placa}} - {{veiculoAlocado.frota.nome}}</option>\r\n              </select>\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-btn\">\r\n                  <button type=\"btn\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#veiculoAlocadoModal\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <app-campo-invalid\r\n            [mostrarErro]=\"verificaValidTouched('veiculo_alocado.id')\"\r\n             msgErro=\"O veiculo a ser rastreador é obrigatório.\">\r\n           </app-campo-invalid>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <div formGroupName=\"rastreador\">\r\n            <label for=\"rastreador\">\r\n              <font color=\"black\">Rastreador</font> \r\n            </label>\r\n            <div class=\"input-group mb-2\">\r\n              <select id=\"rastreador\" formControlName=\"id\" [(ngModel)]=\"veiculoRastreado.rastreador.id\" class=\"form-control\">\r\n                <option selected>Selecione um rastreador</option>\r\n                <option *ngFor=\"let rastreador of rastreadores\" value=\"{{rastreador.id}}\">{{rastreador.imei}} - {{rastreador.numero_chip}}</option>\r\n              </select>\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-btn\">\r\n                  <button type=\"btn\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#rastreadorModal\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <app-campo-invalid\r\n            [mostrarErro]=\"verificaValidTouched('rastreador.id')\"\r\n             msgErro=\"O rastreador é obrigatório.\">\r\n           </app-campo-invalid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <label for=\"data_inicio\">\r\n            <font color=\"black\">Data de inicio</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-calendar-check\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"date\" formControlName=\"data_inicio\" [(ngModel)]=\"veiculoRastreado.data_inicio\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid\r\n          [mostrarErro]=\"verificaValidTouched('data_inicio')\"\r\n           msgErro=\"A data de inicio é obrigatório.\">\r\n         </app-campo-invalid>\r\n        </div>\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <label for=\"data_termino\">\r\n            <font color=\"black\">Data de termino</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-calendar-times\"></i>\r\n              </div>\r\n            </div>\r\n            <input readonly  id=\"termino\" type=\"date\" formControlName=\"data_termino\" [(ngModel)]=\"veiculoRastreado.data_termino\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid\r\n          [mostrarErro]=\"verificaValidTouched('data_termino')\"\r\n           msgErro=\"A data de termino é obrigatório.\">\r\n         </app-campo-invalid>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formVeiculoRastreado.valid\" (click)=\"save()\">Salvar\r\n            <i class=\"fa fa-save\"></i>\r\n          </button>\r\n\r\n          <button type=\"reset\" class=\"btn btn-danger\">Cancelar\r\n            <i class=\"fa fa-times\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"veiculoAlocadoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <veiculo-alocado-form></veiculo-alocado-form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"rastreadorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <rastreador-form></rastreador-form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animation__ = __webpack_require__("../../../../../src/app/router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_class_veiculo_rastreado__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/class/veiculo-rastreado.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rastreador_shared_service_rastreador_service__ = __webpack_require__("../../../../../src/app/layout/rastreador/shared/service/rastreador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ServicoRastreamentoFormComponent = (function () {
    function ServicoRastreamentoFormComponent(formBuilder, router, route, veiculoRastreadoService, veiculoAlocadoService, rastreadorService, toasterService) {
        this.router = router;
        this.route = route;
        this.veiculoRastreadoService = veiculoRastreadoService;
        this.veiculoAlocadoService = veiculoAlocadoService;
        this.rastreadorService = rastreadorService;
        this.toasterService = toasterService;
        this.mostrarBread = true;
        this.url = "http:177.85.0.23/onnet_frota/servicoRastreamento/form";
        this.urlEdit = "http:177.85.0.23/onnet_frota/servicoRastreamento/edit/";
        this.veiculoRastreado = new __WEBPACK_IMPORTED_MODULE_5__shared_class_veiculo_rastreado__["a" /* VeiculoRastreado */];
        this.formVeiculoRastreado = formBuilder.group({
            id: [''],
            data_inicio: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            data_termino: ['', []],
            rastreador: formBuilder.group({
                id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
            }),
            veiculo_alocado: formBuilder.group({
                id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
            })
        });
    }
    ServicoRastreamentoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.veiculoAlocadoService.getVeiculoAlocados()
            .subscribe(function (veiculoAlocados) { return _this.veiculoAlocados = veiculoAlocados; });
        this.rastreadorService.getRastreadores()
            .subscribe(function (rastreadores) { return _this.rastreadores = rastreadores; });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('html, body').animate({ scrollTop: 0 });
        var urls = window.location.protocol + window.location.host + window.location.pathname;
        if (urls != this.url) {
            this.mostrarBread = false;
        }
        var cod = this.route.params.subscribe(function (params) {
            var cod = params['id'];
            if (urls == _this.urlEdit + cod) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__("#termino").removeAttr('readonly');
            }
        });
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            if (urls == _this.urlEdit + id) {
                _this.veiculoRastreadoService.getVeiculoRastreado(id)
                    .subscribe(function (dados) { return _this.popularDadosForm(dados); }, function (response) {
                    if (response.status == 404) {
                        _this.router.navigate(['NotFound']);
                    }
                });
            }
        });
    };
    ServicoRastreamentoFormComponent.prototype.popularDadosForm = function (dados) {
        this.formVeiculoRastreado.patchValue({
            id: dados.id,
            data_inicio: dados.data_inicio,
            data_termino: dados.data_termino,
            rastreador: dados.rastreador,
            veiculo_alocado: dados.veiculo_alocado
        });
    };
    ServicoRastreamentoFormComponent.prototype.save = function () {
        var _this = this;
        var result, veiculoRastreadoValue = this.formVeiculoRastreado.value;
        if (veiculoRastreadoValue.id) {
            result = this.veiculoRastreadoService.updateVeiculoRastreado(veiculoRastreadoValue)
                .subscribe(function (suc) {
                _this.toasterService.Success("Informação do veiculo rastreado foram alteradas com sucesso !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do veiculo rastreado !!");
            });
            setTimeout(function () {
                _this.router.navigate(['/servicoRastreamento']);
            }, 500);
        }
        else {
            result = this.veiculoRastreadoService.addVeiculoRastreado(veiculoRastreadoValue)
                .subscribe(function (suc) {
                _this.toasterService.Success("Cadastro efetuado com sucesso !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo veiculo rastreado !!");
            });
        }
        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
        var urls = window.location.protocol + window.location.host + window.location.pathname;
        if (urls == this.url) {
            setTimeout(function () {
                _this.router.navigate(['servicoRastreamento']);
            }, 500);
        }
    };
    ServicoRastreamentoFormComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formVeiculoRastreado.get(campo).valid && this.formVeiculoRastreado.get(campo).touched;
    };
    ServicoRastreamentoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'servico-rastreamento-form',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */],
            __WEBPACK_IMPORTED_MODULE_8__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__["a" /* VeiculoAlocadoService */],
            __WEBPACK_IMPORTED_MODULE_7__rastreador_shared_service_rastreador_service__["a" /* RastreadorService */],
            __WEBPACK_IMPORTED_MODULE_9__toaster_service__["a" /* ToasterService */]])
    ], ServicoRastreamentoFormComponent);
    return ServicoRastreamentoFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Clearing floats */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n.cf {\r\n  *zoom: 1;\r\n}\r\n\r\n/* Mini reset, no margins, paddings or bullets */\r\n.menu,\r\n.submenu {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n/* Main level */\r\n.menu {\t\t\t\r\n  margin: 50px auto;\r\n  width: 800px;\r\n  /* http://www.red-team-design.com/horizontal-centering-using-css-fit-content-value */\r\n  width: -moz-fit-content;\r\n  width: -webkit-fit-content;\r\n  width: fit-content;\t\r\n}\r\n\r\n.menu > li {\r\n  background: #284b6f;\r\n  float: left;\r\n  position: relative;\r\n  -webkit-transform: skewX(25deg);\r\n          transform: skewX(25deg);\r\n  width: 400px;\r\n}\r\n\r\n.menu a {\r\n  display: block;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-family: Arial, Helvetica;\r\n  font-size: 14px;\r\n}\t\t\r\n\r\n.menu li:hover {\r\n  background: #e74c3c;\r\n}\t\t\r\n\r\n.menu > li > a {\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n  padding: 1em 2em;\r\n}\r\n\r\n/* Dropdown */\r\n.submenu {\r\n  position: absolute;\r\n  width: 200px;\r\n  left: 50%; margin-left: -100px;\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top;\r\n}\r\n\r\n.submenu li {\r\n  background-color: #34495e;\r\n  position: relative;\r\n  overflow: hidden;\t\t\r\n}\t\t\t\t\t\t\r\n\r\n.submenu > li > a {\r\n  padding: 1em 2em;\t\t\t\r\n}\r\n\r\n.submenu > li::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -125%;\r\n  height: 100%;\r\n  width: 100%;\t\t\t\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, .9);\t\t\t\r\n}\t\t\r\n\r\n/* Odd stuff */\r\n.submenu > li:nth-child(odd){\r\n  -webkit-transform: skewX(-25deg) translateX(0);\r\n          transform: skewX(-25deg) translateX(0);\r\n}\r\n\r\n.submenu > li:nth-child(odd) > a {\r\n  -webkit-transform: skewX(25deg);\r\n          transform: skewX(25deg);\r\n}\r\n\r\n.submenu > li:nth-child(odd)::after {\r\n  right: -50%;\r\n  -webkit-transform: skewX(-25deg) rotate(3deg);\r\n          transform: skewX(-25deg) rotate(3deg);\r\n}\t\t\t\t\r\n\r\n/* Even stuff */\r\n.submenu > li:nth-child(even){\r\n  -webkit-transform: skewX(25deg) translateX(0);\r\n          transform: skewX(25deg) translateX(0);\r\n}\r\n\r\n.submenu > li:nth-child(even) > a {\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n}\r\n\r\n.submenu > li:nth-child(even)::after {\r\n  left: -50%;\r\n  -webkit-transform: skewX(25deg) rotate(3deg);\r\n          transform: skewX(25deg) rotate(3deg);\r\n}\r\n\r\n/* Show dropdown */\r\n.submenu,\r\n.submenu li {\r\n  opacity: 0;\r\n  visibility: hidden;\t\t\t\r\n}\r\n\r\n.submenu li {\r\n  transition: .2s ease transform;\r\n}\r\n\r\n.menu > li:hover .submenu,\r\n.menu > li:hover .submenu li {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\t\t\r\n\r\n.menu > li:hover .submenu li:nth-child(even){\r\n  -webkit-transform: skewX(25deg) translateX(15px);\r\n          transform: skewX(25deg) translateX(15px);\t\t\t\r\n}\r\n\r\n.menu > li:hover .submenu li:nth-child(odd){\r\n  -webkit-transform: skewX(-25deg) translateX(-15px);\r\n          transform: skewX(-25deg) translateX(-15px);\t\t\t\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu cf\">\r\n  <li>\r\n    <a [routerLink]=\"['netmap']\">Mapa\r\n      <i class=\"fas fa-user\"></i>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a [routerLink]=\"['form']\">Vincular rastreador\r\n      <i class=\"fa fa-car\"></i>\r\n      <sup>\r\n        <i class=\"fa fa-microchip\"></i>\r\n      </sup>\r\n    </a>\r\n  </li>\r\n  \r\n\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoHeaderComponent; });
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

var ServicoRastreamentoHeaderComponent = (function () {
    function ServicoRastreamentoHeaderComponent() {
    }
    ServicoRastreamentoHeaderComponent.prototype.ngOnInit = function () {
    };
    ServicoRastreamentoHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'servico-rastreamento-header',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoRastreamentoHeaderComponent);
    return ServicoRastreamentoHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-toolbar{\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.card-body{\r\n    background-color: rgb(238, 235, 235);\r\n   \r\n}\r\n\r\n.card-header{\r\n    background-color: rgb(238, 235, 235);\r\n    border-radius: 5px;\r\n    border: solid 1px rgb(194, 192, 192);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-sm-12 col-md-12 col-lg-12 col-xl-12\" class=\"noprint\">\r\n\r\n  <div class=\"card-header\">\r\n\r\n\r\n\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n        <div class=\"btn-toolbar\" role=\"toolbar\">\r\n          <div class=\"btn-group btn-group-justified\" role=\"group\">\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button id=\"list\" class=\"btn btn-primary\" data-original-title=\"Refreshr\" onClick=\"history.go(0)\" value=\"REFRESH\">\r\n                <i class=\"fa fa-sync fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n            <a href=\"javascript:window.print()\">\r\n              <button id=\"passreset\" class=\"btn btn-primary\" data-original-title=\"Password Reset\">\r\n                <i class=\"fa fa-print fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </a>\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button id=\"new\" class=\"btn btn-success\" data-original-title=\"New\" [routerLink]=\"['form']\">\r\n                <i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\">\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button id=\"desact\" class=\"btn btn-warning\" data-original-title=\"Deactivate\" (click)=\"editar()\">\r\n                <i class=\"fa fa-edit fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button id=\"react\" class=\"btn btn-info\" data-original-title=\"Activate\">\r\n                <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button id=\"delete\" class=\"btn btn-danger\" data-original-title=\"Delete\" (click)=\"deletar()\">\r\n                <i class=\"fas fa-trash fa-lg\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n        <!-- Campo deletar -->\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\" *ngIf=\"seletorDelete\">\r\n            <div class=\"input-group mb-3\">\r\n              <input id=\"campoDeletar\" type=\"number\" class=\"form-control\" placeholder=\"Veiculo Rastreado ID:\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"deletarItem()\">\r\n                  <i class=\"fas fa-trash fa-lg\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <!-- Campo deletar-->\r\n          <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\" *ngIf=\"seletorEditar\">\r\n            <div class=\"input-group mb-3\">\r\n              <input id=\"campoEditar\" type=\"number\" class=\"form-control\" placeholder=\"Veiculo Rastreado ID:\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-warning\" type=\"button\" (click)=\"editarItem()\">\r\n                  <i class=\"fas fa-edit fa-lg\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicoRastreamentoSearchComponent = (function () {
    function ServicoRastreamentoSearchComponent(veiculoRastreadoService, router, toasterService) {
        this.veiculoRastreadoService = veiculoRastreadoService;
        this.router = router;
        this.toasterService = toasterService;
        this.seletorDelete = false;
        this.seletorEditar = false;
    }
    ServicoRastreamentoSearchComponent.prototype.ngOnInit = function () {
    };
    ServicoRastreamentoSearchComponent.prototype.editar = function () {
        if (this.seletorEditar == false) {
            this.seletorEditar = true;
        }
        else {
            this.seletorEditar = false;
        }
    };
    ServicoRastreamentoSearchComponent.prototype.editarItem = function () {
        var id = __WEBPACK_IMPORTED_MODULE_4_jquery__("#campoEditar").val();
        var item = this.veiculoRastreadoService.getVeiculoRastreado(id);
        this.router.navigate(['servicoRastreamento/edit/' + id]);
    };
    ServicoRastreamentoSearchComponent.prototype.deletar = function () {
        if (this.seletorDelete == false) {
            this.seletorDelete = true;
        }
        else {
            this.seletorDelete = false;
        }
    };
    ServicoRastreamentoSearchComponent.prototype.deletarItem = function () {
        var _this = this;
        var resp = confirm("Deseja realmente deletar este vinculo do rastreador?");
        if (resp == true) {
            var id = __WEBPACK_IMPORTED_MODULE_4_jquery__("#campoDeletar").val();
            this.veiculoRastreadoService.deleteVeiculoRastreado(id)
                .subscribe(function (suc) {
                _this.toasterService.Warning("Exclusão do veiculo rastreado realizado com sucesso  !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar deletar o veiculo rastreado !!");
            });
        }
        return;
    };
    ServicoRastreamentoSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'servico-rastreamento-search',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */]])
    ], ServicoRastreamentoSearchComponent);
    return ServicoRastreamentoSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"30\" placeholder=\"Filtro Global\">\r\n\r\n\r\n      <div id=\"table\">\r\n        <p-dataTable [value]=\"veiculoRastreados\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt scrollable=\"true\" scrollWidth=\"100%\"\r\n          [style]=\"{'margin-top':'30px'}\">\r\n          <p-header>Tabela de veiculos rastreados</p-header>\r\n          <p-column field=\"id\" header=\"ID\" [filter]=\"true\" filterPlaceholder=\"ID\" [style]=\"{'width':'150px'}\"></p-column>\r\n\r\n          <p-column field=\"data_inicio\" header=\"Data de inicio\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Data de inicio\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n\r\n          <p-column field=\"data_termino\" header=\"Data de termino\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Data de termino\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n\r\n          <p-column field=\"rastreador.imei\" header=\"Rastreador\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Rastreador\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n\r\n          <p-column field=\"veiculo_alocado.veiculo.placa\" header=\"Veiculo rastreado\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Veiculo rastreado\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n\r\n          <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:10%\" class=\"noprint\">\r\n              <a routerLink=\"form\">\r\n                <button type=\"btn\" class=\"btn btn-info\" icon=\"fa-plus\" label=\"Add\" iconPos=\"left\">Add\r\n                  <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n              </a>\r\n            </div>\r\n          </p-footer>\r\n\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicoRastreamentoTableComponent = (function () {
    function ServicoRastreamentoTableComponent(veiculoRastreadoService) {
        this.veiculoRastreadoService = veiculoRastreadoService;
    }
    ServicoRastreamentoTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.veiculoRastreadoService.getVeiculoRastreados()
            .subscribe(function (veiculoRastreados) { return _this.veiculoRastreados = veiculoRastreados; });
    };
    ServicoRastreamentoTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'servico-rastreamento-table',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */]])
    ], ServicoRastreamentoTableComponent);
    return ServicoRastreamentoTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">serviçoRastreamento</li>\r\n    </ol>\r\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoToolsComponent; });
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

var ServicoRastreamentoToolsComponent = (function () {
    function ServicoRastreamentoToolsComponent() {
    }
    ServicoRastreamentoToolsComponent.prototype.ngOnInit = function () {
    };
    ServicoRastreamentoToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'servico-rastreamento-tools',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoRastreamentoToolsComponent);
    return ServicoRastreamentoToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n        <h2>\r\n          <font color=\"white\">Rastreamento</font>\r\n        </h2>\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Procurar por...\" id=\"address\">\r\n              <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" type=\"button\" id=\"submit\">\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12 col-md-4 col-4 col-lg-4 col-xl-4\">\r\n            <div class=\"input-group\">\r\n              <select id=\"localization\" class=\"form-control\">\r\n                <option selected>Selecione um veiculo</option>\r\n                <option *ngFor=\"let veiculoR of pontoCoord\" value=\"{{veiculoR.latitude}} , {{veiculoR.longitude}}\">{{veiculoR.veiculoAlocado.veiculo.placa}} - Frota: {{veiculoR.veiculoAlocado.frota.nome}}</option>\r\n              </select>\r\n              <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-info\" type=\"button\" id=\"localizationBtn\" data-toggle=\"modal\" data-target=\"#localizationModal\" (click)=\"localizarEndereco()\">\r\n                  <i class=\"fas fa-street-view\"></i>\r\n                </button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"btn\" id=\"atualizarBtn\" class=\"btn btn-warning\" (click)=\"initMapRaster()\" title=\"Mostrar todos os veiculos\">Atualizar mapa\r\n            <i class=\"fas fa-sync-alt\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div id=\"map\"></div>\r\n      </div>\r\n      <div class=\"card-footer text-muted\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\r\n            <button type=\"btn\" id=\"tabelasBtn\" (click)=\"mostrarTabelaAction()\" class=\"btn btn-primary\" title=\"Tabelas\">\r\n              <i class=\"fas fa-table\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\r\n            <button type=\"btn\" id=\"buscarVeiculoBtn\" class=\"btn btn-primary\" (click)=\"mostrarBuscaVeiculo()\" title=\"Buscar por veiculo\">\r\n              <i class=\"fas fa-car\">\r\n                <sup>\r\n                  <i class=\"fas fa-search\"></i>\r\n                </sup>\r\n              </i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\r\n            <button type=\"btn\" id=\"buscarTecnicoBtn\" class=\"btn btn-primary\" (click)=\"mostrarBuscaCondutor()\" title=\"buscar por tecnico\">\r\n              <i class=\"fas fa-user-tag\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\r\n            <button type=\"btn\" id=\"visualizarBtn\" class=\"btn btn-primary\" title=\"Visualizar\">\r\n              <i class=\"far fa-eye\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\r\n            <button type=\"btn\" id=\"mapaConfigBtn\" class=\"btn btn-primary\" title=\"Configurar o mapa\" (click)=\"mostrarMapConfig()\">\r\n              <i class=\"fas fa-map-marked-alt\">\r\n                <sup>\r\n                  <i class=\"fa fa-cog\"></i>\r\n                </sup>\r\n              </i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Tabelas de veiculos sendo rastreado -->\r\n<div class=\"tabelas\" *ngIf=\"mostraTabela\" [@enterAnimation]>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n      <table class=\"table table-hover table-responsive\">\r\n        <thead class=\"thead\">\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">Veiculo: Modelo</th>\r\n            <th scope=\"col\">Veiculo: Placa</th>\r\n            <th scope=\"col\">Veiculo: Frota </th>\r\n            <th scope=\"col\">Condutor</th>\r\n            <th scope=\"col\">Categoria</th>\r\n            <th scope=\"col\">Vencimento CNH</th>\r\n            <th scope=\"col\">rastreador: Imei</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let carInfo of pontoCoord\">\r\n            <td>{{carInfo.id}}</td>\r\n            <td>{{carInfo.veiculoAlocado.veiculo.modelo.nome}}</td>\r\n            <td>{{carInfo.veiculoAlocado.veiculo.placa}}</td>\r\n            <td>{{carInfo.veiculoAlocado.frota.nome}}</td>\r\n            <td>{{carInfo.veiculoAlocado.condutor.nome}}</td>\r\n            <td>{{carInfo.veiculoAlocado.condutor.categoria}}</td>\r\n            <td>{{carInfo.veiculoAlocado.condutor.vencimento_cnh}}</td>\r\n            <td>{{carInfo.rastreador.imei}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- fim da tabela de veiculos  -->\r\n\r\n<!-- Formulario para procurar por veiculo -->\r\n\r\n<div class=\"findByVeiculo\" *ngIf=\"mostraBuscaVeiculo\" [@enterAnimation]>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n      <div class=\"card\" id=\"card-veiculo\">\r\n        <div class=\"card-header\">\r\n          Buscar um veiculo\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Formulario de busca</h5>\r\n          <br>\r\n          <label for=\"veiculoRastreado\">\r\n            <font color=\"black\">Veiculo Rastreado</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <select id=\"veiculoR\" class=\"form-control\">\r\n              <option selected>Selecione um veiculo</option>\r\n              <option *ngFor=\"let veiculoR of veiculosRastreados\" value=\"{{veiculoR.rastreador.imei}}\">{{veiculoR.veiculo_alocado.veiculo.placa}}| Frota: {{veiculoR.veiculo_alocado.frota.nome}}</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n\r\n              <label for=\"data\">Data</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"dataV\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <label for=\"hora_inicial\">\r\n                <font color=\"black\">Hora Inicial</font>\r\n              </label>\r\n              <div class=\"input-group mb-1\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </div>\r\n                </div>\r\n                <input [textMask]=\"{mask: hora}\" id=\"horaInicial\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <label for=\"hora_inicial\">\r\n                <font color=\"black\">Hora Final</font>\r\n              </label>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </div>\r\n                </div>\r\n                <input [textMask]=\"{mask: hora}\" id=\"horaFinal\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <button type=\"btn\" id=\"buscarPosicaoBtn\" class=\"btn btn-primary\" (click)=\"buscarPosicao()\">\r\n                Buscar posição atual\r\n                <i class=\"fas fa-map-marked\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <button type=\"btn\" id=\"buscarRotaBtn\" class=\"btn btn-primary\" (click)=\"buscarRota()\">\r\n                Buscar rota do veiculo\r\n                <i class=\"fas fa-road\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- fim do menu buscar veiculos -->\r\n\r\n<!-- Inicio do menu buscar condutor -->\r\n\r\n<div class=\"findByCondutor\" *ngIf=\"mostraBuscaCondutor\" [@enterAnimation]>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n      <div class=\"card\" id=\"card-veiculo\">\r\n        <div class=\"card-header\">\r\n          Buscar um condutor\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Formulario de busca</h5>\r\n          <br>\r\n          <label for=\"veiculoRastreado\">\r\n            <font color=\"black\">Condutor</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <select id=\"condutorR\" class=\"form-control\">\r\n              <option selected>Selecione um condutor</option>\r\n              <option *ngFor=\"let veiculoR of veiculosRastreados\" value=\"{{veiculoR.rastreador.imei}}\">{{veiculoR.veiculo_alocado.condutor.nome}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n\r\n              <label for=\"data\">Data</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"dataCondutor\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <label for=\"hora_inicial\">\r\n                <font color=\"black\">Hora Inicial</font>\r\n              </label>\r\n              <div class=\"input-group mb-1\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </div>\r\n                </div>\r\n                <input [textMask]=\"{mask: hora}\" id=\"horaInicialCondutor\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <label for=\"hora_inicial\">\r\n                <font color=\"black\">Hora Final</font>\r\n              </label>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </div>\r\n                </div>\r\n                <input [textMask]=\"{mask: hora}\" id=\"horaFinalCondutor\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <button type=\"btn\" id=\"buscarPosicaoBtn\" class=\"btn btn-primary\" (click)=\"buscarPosicaoCondutor()\">\r\n                Buscar posição atual\r\n                <i class=\"fas fa-map-marked\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <button type=\"btn\" id=\"buscarRotaBtn\" class=\"btn btn-primary\" (click)=\"buscarRotaCondutor()\">\r\n                Buscar rota do veiculo\r\n                <i class=\"fas fa-road\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Fim do menu do busca do condutor -->\r\n\r\n<!-- Inicio da opção do mapas -->\r\n\r\n<div class=\"mapOption\" style=\"display: none;\" id=\"menuMapa\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Configuração do Mapa\r\n        </div>\r\n        <div class=\"card-body\" id=\"optionCard\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\r\n              <div id=\"style-selector-control\" class=\"map-control\">\r\n                <label for=\"style-selector\">Tipo de mapa</label>\r\n                <select id=\"style-selector\" class=\"selector-control\" class=\"form-control\">\r\n                  <option value=\"defauldt\" selected=\"selected\">Default</option>\r\n                  <option value=\"silver\">Silver</option>\r\n                  <option value=\"night\">Night mode</option>\r\n                  <option value=\"retro\">Retro</option>\r\n                  <option value=\"hiding\">Hide features</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-3 col-md-3 col-lg-3 col-xl-3\">\r\n              <label for=\"trafficSwitch\">Camada de Tráfego</label>\r\n              <div class=\"switch\" id=\"trafficSwitch\">\r\n                <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"trafficOn\" id=\"trafficOn\">\r\n                <label for=\"trafficOn\" class=\"switch-label switch-label-off\">ON</label>\r\n                <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"trafficOff\" id=\"trafficOff\" checked>\r\n                <label for=\"trafficOff\" class=\"switch-label switch-label-on\">OFF</label>\r\n                <span class=\"switch-selection\"></span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-3 col-md-3 col-lg-3 col-xl-3\">\r\n              <label for=\"trafficSwitch\">Camada de Trânsito</label>\r\n              <div class=\"switch\" id=\"trafficSwitch\">\r\n                <input type=\"radio\" class=\"switch-input\" name=\"transit\" value=\"transitOn\" id=\"transitOn\">\r\n                <label for=\"transitOn\" class=\"switch-label switch-label-off\">ON</label>\r\n                <input type=\"radio\" class=\"switch-input\" name=\"transit\" value=\"transitOff\" id=\"transitOff\" checked>\r\n                <label for=\"transitOff\" class=\"switch-label switch-label-on\">OFF</label>\r\n                <span class=\"switch-selection\"></span>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Fim da opção do mapas -->\r\n\r\n\r\n<!-- Modals -->\r\n\r\n<div class=\"modal fade\" id=\"localizationModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"> Informação do endereço </h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <label for=\"input1\">Rua - Av.: </label>\r\n            <input type=\"text\" readonly class=\"form-control\" id=\"input1\" />\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <label for=\"input2\">Número - Bairro: </label>\r\n            <input type=\"text\" readonly class=\"form-control\" id=\"input2\" />\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <label for=\"input3\">Cidade - Estado: </label>\r\n            <input type=\"text\" readonly class=\"form-control\" id=\"input3\" />\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <label for=\"input4\">Cep: </label>\r\n            <input type=\"text\" readonly class=\"form-control\" id=\"input4\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save change</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tabelasBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarPosicaoBtn {\n  width: 200px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarRotaBtn {\n  width: 200px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarVeiculoBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarTecnicoBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#visualizarBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#mapaConfigBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#atualizarBtn {\n  width: 150px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#card-veiculo {\n  padding: 10px; }\n\n.card-body {\n  padding: 0px;\n  margin: 0px; }\n\n#map {\n  height: 600px;\n  width: 100%;\n  padding: 0px;\n  margin: 0px; }\n\n#btnCoord {\n  width: 100%; }\n\n#submit {\n  width: 80px;\n  padding: 5px; }\n\n#address {\n  height: 35px; }\n\n#localization {\n  height: 35px; }\n\n.table {\n  max-height: 500px;\n  overflow: scroll; }\n\n.card-footer {\n  padding: 5px;\n  background-color: #898b89;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.btn-toolbar {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.card {\n  border: solid 2px grey;\n  padding: 0px;\n  margin: 0px; }\n\n.card-header {\n  padding: 5px;\n  background-color: #898b89;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.card-map {\n  padding: 0px;\n  margin: 0px;\n  border: solid 10px #3f7dda; }\n\n.card-menu {\n  background-color: #d5d2d2;\n  padding: 10px;\n  border-radius: 10px;\n  transition-duration: .7s;\n  border: solid 1px black; }\n  .card-menu:hover {\n    background-color: #289122; }\n\n/* TABS CSS */\n* {\n  box-sizing: border-box; }\n\n.teste {\n  color: #c9ccc9;\n  text-align: left;\n  font-size: 120mm;\n  font-variant: small-caps;\n  font-weight: 900; }\n\n.thead {\n  background-color: #999; }\n\n.colors {\n  text-align: center;\n  padding-top: 20px; }\n  .colors > li {\n    list-style: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.1);\n    display: inline-block;\n    margin: 0 10px;\n    cursor: pointer;\n    transition-duration: .2s;\n    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2); }\n    .colors > li:hover {\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2);\n      border-bottom: 10px solid rgba(0, 0, 0, 0.15);\n      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); }\n    .colors > li.active-color {\n      -webkit-transform: scale(1.2) translateY(-10px);\n      transform: scale(1.2) translateY(-10px);\n      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);\n      border-bottom: 20px solid rgba(0, 0, 0, 0.15); }\n    .colors > li:nth-child(1) {\n      background-color: #2ecc71; }\n    .colors > li:nth-child(2) {\n      background-color: #D64A4B; }\n    .colors > li:nth-child(3) {\n      background-color: #8e44ad; }\n    .colors > li:nth-child(4) {\n      background-color: #46a1de; }\n    .colors > li:nth-child(5) {\n      background-color: #bdc3c7; }\n\n#optionCard {\n  padding: 10px; }\n\n.switch {\n  position: relative;\n  height: 26px;\n  width: 120px;\n  margin: 20px auto;\n  background: rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1); }\n\n.switch-label {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 58px;\n  line-height: 26px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);\n  cursor: pointer; }\n\n.switch-label:active {\n  font-weight: bold; }\n\n.switch-label-off {\n  padding-left: 2px; }\n\n.switch-label-on {\n  padding-right: 2px; }\n\n.switch-input {\n  display: none; }\n\n.switch-input:checked + .switch-label {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.65);\n  text-shadow: 0 1px rgba(255, 255, 255, 0.25);\n  transition: 0.15s ease-out;\n  transition-property: color, text-shadow; }\n\n.switch-input:checked + .switch-label-on ~ .switch-selection {\n  left: 60px;\n  /* Note: left: 50%; doesn't transition in WebKit */ }\n\n.switch-selection {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  left: 2px;\n  display: block;\n  width: 58px;\n  height: 22px;\n  border-radius: 3px;\n  background-color: #65bd63;\n  background-image: linear-gradient(top, #9dd993, #65bd63);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);\n  transition: left 0.15s ease-out; }\n\n.switch-blue .switch-selection {\n  background-color: #3aa2d0;\n  background-image: linear-gradient(top, #4fc9ee, #3aa2d0); }\n\n.switch-yellow .switch-selection {\n  background-color: #c4bb61;\n  background-image: linear-gradient(top, #e0dd94, #c4bb61); }\n\n.modal-header {\n  background-color: #17a2b8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rastreador_coordenada_shared_service_coordenada_service__ = __webpack_require__("../../../../../src/app/layout/rastreador/coordenada/shared/service/coordenada.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var styles = {
    default: null,
    silver: [
        {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
        },
        {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        }
    ],
    night: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
        }
    ],
    retro: [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#c9b2a6' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#dcd2be' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ae9e90' }]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#a5b076' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#447530' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#fdfcf8' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#f8c967' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#e9bc62' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#e98d58' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#db8555' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#806b63' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8f7d77' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ebe3cd' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#b9d3c2' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#92998d' }]
        }
    ],
    hiding: [
        {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
        }
    ]
};
var NetmapComponent = (function () {
    function NetmapComponent(veiculoRastreadoService, coordenadaService, toasterService) {
        this.veiculoRastreadoService = veiculoRastreadoService;
        this.coordenadaService = coordenadaService;
        this.toasterService = toasterService;
        this.latitude = -18.940117;
        this.longitude = -46.9909037;
        this.zoom = 11;
        this.carIcon = "assets/imagens/frotapin.png";
        this.status = 1;
        this.cont = 0;
        this.mostraTabela = false;
        this.mostraBuscaVeiculo = false;
        this.mostraBuscaCondutor = false;
        this.showMapConfig = false;
        this.trafficStatus = false;
        this.coordenadas = [];
        this.veiculosRastreados = [];
        this.hora = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
    }
    NetmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
        this.veiculoRastreadoService.getVeiculoRastreados()
            .subscribe(function (data) { return _this.veiculosRastreados = data; });
        this.initMapRaster();
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            function toggleSwitch() {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.switch').click(function () {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__(this).toggleClass('active');
                });
            }
            toggleSwitch();
        });
    };
    //--------------------Ações do botoes do mapa-------------------
    NetmapComponent.prototype.mostrarTabelaAction = function () {
        if (this.mostraTabela == true) {
            this.mostraTabela = false;
        }
        else {
            this.mostraTabela = true;
            this.mostraBuscaVeiculo = false;
            this.mostraBuscaCondutor = false;
            this.showMapConfig = false;
        }
    };
    NetmapComponent.prototype.mostrarBuscaVeiculo = function () {
        if (this.mostraBuscaVeiculo == true) {
            this.mostraBuscaVeiculo = false;
        }
        else {
            this.mostraBuscaVeiculo = true;
            this.mostraTabela = false;
            this.mostraBuscaCondutor = false;
            this.showMapConfig = false;
        }
    };
    NetmapComponent.prototype.mostrarBuscaCondutor = function () {
        if (this.mostraBuscaCondutor == true) {
            this.mostraBuscaCondutor = false;
        }
        else {
            this.mostraBuscaCondutor = true;
            this.mostraBuscaVeiculo = false;
            this.mostraTabela = false;
            this.showMapConfig = false;
        }
    };
    NetmapComponent.prototype.mostrarMapConfig = function () {
        if (this.showMapConfig == true) {
            this.showMapConfig = false;
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#menuMapa').fadeOut();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#menuMapa').fadeIn();
            this.showMapConfig = true;
            this.mostraBuscaCondutor = false;
            this.mostraBuscaVeiculo = false;
            this.mostraTabela = false;
        }
    };
    //-----------------------------------------------------
    //-----------------------LAYERS-------------------------
    //------------------------------------------------------
    NetmapComponent.prototype.buscarPosicao = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__("#veiculoR").val() == "Selecione um veiculo") {
            this.toasterService.Error("Selecione um veiculo !!");
            return;
        }
        else {
            var imei = __WEBPACK_IMPORTED_MODULE_2_jquery__("#veiculoR").val();
            this.veiculoRastreadoService.getVeiculoPosicao(imei)
                .subscribe(function (data) { return _this.posicaoAtual = data; });
            setTimeout(function () {
                _this.displayPosition();
            }, 1000);
        }
    };
    NetmapComponent.prototype.displayPosition = function () {
        if (this.posicaoAtual == null || this.posicaoAtual == undefined) {
            this.toasterService.Info("Não há nenhum informação sobre esse veiculo. Mude as condições de busca para tentar obter mais informação");
            return;
        }
        var carLatLng = { lat: this.posicaoAtual.latitude, lng: this.posicaoAtual.longitude };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: this.zoom,
            center: { lat: this.latitude, lng: this.longitude },
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_2_jquery__('#style-selector').val()] });
        styleSelector.addEventListener('change', function () {
            map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_2_jquery__('#style-selector').val()] });
        });
        //-------------------------- Event listener -----------------
        var trafficSwitchOn = document.getElementById('trafficOn');
        var trafficSwitchOff = document.getElementById('trafficOff');
        var transitSwitchOn = document.getElementById('transitOn');
        var transitSwitchOff = document.getElementById('transitOff');
        var trafficLayer = new google.maps.TrafficLayer();
        var transitLayer = new google.maps.TransitLayer();
        trafficSwitchOn.addEventListener('click', function () {
            trafficLayer.setMap(map);
        });
        trafficSwitchOff.addEventListener('click', function () {
            trafficLayer.setMap(null);
        });
        transitSwitchOn.addEventListener('click', function () {
            transitLayer.setMap(map);
        });
        transitSwitchOff.addEventListener('click', function () {
            transitLayer.setMap(null);
        });
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#trafficOn').prop("checked")) {
            trafficLayer.setMap(map);
        }
        else {
            trafficLayer.setMap(null);
        }
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#transitOn').prop("checked")) {
            transitLayer.setMap(map);
        }
        else {
            transitLayer.setMap(null);
        }
        // -------------------------------------------------------------
        var content = '<div id="iw-container" style="background-color:#f4f4f4; border-radius: 20px; border: solid #086618 5px">' +
            '<div class="iw-title" style="background-color:#086618; padding: 5px; color:white; border-top-left-radius: 10px; border-top-right-radius: 10px;"><h5>Informações do Veiculo</h5></div>' +
            '<div id="conteudo" class="iw-content" style="padding: 10px;">' +
            '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
            '<div class="iw-subTitle" style="color: black"><h6>Dados do Veiculo</h6></div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Modelo:</b> ' + this.posicaoAtual.veiculoAlocado.veiculo.modelo.nome + ' </div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Placa: </b>' + this.posicaoAtual.veiculoAlocado.veiculo.placa + ' </div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Frota: </b>' + this.posicaoAtual.veiculoAlocado.frota.nome + ' </div>' +
            '<div style="text-align: left; color: black;"> </div>' +
            '</div> <br>' +
            '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
            '<div class="iw-subTitle" style="color: black"><h6>Dados do Condutor</h6></div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Nome: </b>' + this.posicaoAtual.veiculoAlocado.condutor.nome + ' </div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Categoria: </b>' + this.posicaoAtual.veiculoAlocado.condutor.categoria + ' </div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Vencimento: </b>' + this.posicaoAtual.veiculoAlocado.condutor.vencimento_cnh + ' </div>' +
            '</div> <br>' +
            '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
            '<div class="iw-subTitle" style="color: black"><h6>Velocidade</h6></div>' +
            '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Velocidade: </b>' + this.posicaoAtual.velocidade + ' </div>' +
            '</div>' +
            '<div class="iw-bottom-gradient"></div>' +
            '</div>';
        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 300,
        });
        var marker = new google.maps.Marker({
            position: carLatLng,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: this.carIcon,
            title: "Dados do veiculo"
        });
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
        google.maps.event.addListener(infoWindow, 'domready', function () {
        });
    };
    NetmapComponent.prototype.buscarRota = function () {
        var _this = this;
        var imei = __WEBPACK_IMPORTED_MODULE_2_jquery__("#veiculoR").val();
        var horaInicial = __WEBPACK_IMPORTED_MODULE_2_jquery__("#horaInicial").val();
        var horaFinal = __WEBPACK_IMPORTED_MODULE_2_jquery__("#horaFinal").val();
        var data = __WEBPACK_IMPORTED_MODULE_2_jquery__("#dataV").val();
        if (imei == "Selecione um veiculo" || horaInicial == "" || horaFinal == "" || data == "") {
            this.toasterService.Error("Selecione um veiculo e insere uma data de inicio e fim para realizar a consulta");
            return;
        }
        else {
            this.veiculoRastreadoService.getVeiculosRoutes(imei, data, horaInicial, horaFinal)
                .subscribe(function (data) { return _this.rotas = data; });
            if (this.rotas == null || this.rotas == undefined) {
                this.toasterService.Info("Não há nenhum informação sobre esse veiculo. Mude as condições de busca para tentar obter mais informação");
                return;
            }
            setTimeout(function () {
                _this.iniciarMapaDeRota();
            }, 1000);
        }
    };
    NetmapComponent.prototype.buscarPosicaoCondutor = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__("#condutorR").val() == "Selecione um condutor") {
            this.toasterService.Error("Selecione um condutor !!");
            return;
        }
        else {
            var imei = __WEBPACK_IMPORTED_MODULE_2_jquery__("#condutorR").val();
            this.veiculoRastreadoService.getVeiculoPosicao(imei)
                .subscribe(function (data) { return _this.posicaoAtual = data; });
            setTimeout(function () {
                _this.displayPosition();
            }, 1000);
        }
    };
    NetmapComponent.prototype.buscarRotaCondutor = function () {
        var _this = this;
        var imei = __WEBPACK_IMPORTED_MODULE_2_jquery__("#condutorR").val();
        var horaInicial = __WEBPACK_IMPORTED_MODULE_2_jquery__("#horaInicialCondutor").val();
        var horaFinal = __WEBPACK_IMPORTED_MODULE_2_jquery__("#horaFinalCondutor").val();
        var data = __WEBPACK_IMPORTED_MODULE_2_jquery__("#dataCondutor").val();
        if (imei == "Selecione um veiculo" || horaInicial == "" || horaFinal == "" || data == "") {
            this.toasterService.Error("Selecione um veiculo e insere uma data de inicio e fim para realizar a consulta");
            return;
        }
        else {
            this.veiculoRastreadoService.getVeiculosRoutes(imei, data, horaInicial, horaFinal)
                .subscribe(function (data) { return _this.rotas = data; });
            if (this.rotas == null || this.rotas == undefined) {
                this.toasterService.Info("Não há nenhuma informação sobre este condutor no momento");
                return;
            }
            setTimeout(function () {
                _this.iniciarMapaDeRota();
            }, 1000);
        }
    };
    NetmapComponent.prototype.iniciarMapaDeRota = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: { lat: this.latitude, lng: this.longitude },
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
        directionsDisplay.setMap(map);
        var alerta = this.toasterService;
        var destino = this.ultimaPosicao;
        this.calculateAndDisplayRoute(directionsService, directionsDisplay, alerta);
    };
    NetmapComponent.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay, alerta) {
        var waypts = [];
        var origem = [];
        var destino = [];
        var pontos = [];
        origem.push({
            latitude: this.rotas[0].latitude,
            longitude: this.rotas[0].longitude
        });
        destino.push({
            latitude: this.rotas[this.rotas.length - 1].latitude,
            longitude: this.rotas[this.rotas.length - 1].longitude
        });
        this.rotas[0].latitude + "," + this.rotas[0].longitude;
        this.rotas[this.rotas.length - 1].latitude + "," + this.rotas[this.rotas.length - 1].longitude;
        this.rotas.forEach(function (element) {
            waypts.push({
                location: new google.maps.LatLng(element.latitude, element.longitude),
                stopover: true
            });
        });
        if (waypts.length > 23) {
            for (var i = 0; i < 23; i++) {
                var index = (i * (waypts.length / 23)).toFixed(0);
                pontos.push(waypts[index]);
            }
        }
        if (waypts.length <= 23) {
            for (var i = 0; i < 23; i++) {
                if (waypts[i] != undefined) {
                    pontos.push(waypts[i]);
                }
            }
        }
        directionsService.route({
            origin: new google.maps.LatLng(origem[0].latitude, origem[0].longitude),
            destination: new google.maps.LatLng(destino[0].latitude, destino[0].longitude),
            waypoints: pontos,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                alerta.Error("O mapa não conseguiu renderizar a rota");
            }
        });
    };
    NetmapComponent.prototype.initMapRaster = function () {
        var _this = this;
        var option = {
            zoom: 11,
            center: { lat: -18.940117, lng: -46.9909037 },
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById('map'), option);
        var geocoder = new google.maps.Geocoder();
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_2_jquery__('#style-selector').val()] });
        var botaoAtualizar = document.getElementById('atualizarBtn');
        styleSelector.addEventListener('change', function () {
            map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_2_jquery__('#style-selector').val()] });
        });
        var trafficSwitchOn = document.getElementById('trafficOn');
        var trafficSwitchOff = document.getElementById('trafficOff');
        var transitSwitchOn = document.getElementById('transitOn');
        var transitSwitchOff = document.getElementById('transitOff');
        var trafficLayer = new google.maps.TrafficLayer();
        var transitLayer = new google.maps.TransitLayer();
        // -------------------- EVENT LISTENER ----------------------
        trafficSwitchOn.addEventListener('click', function () {
            trafficLayer.setMap(map);
        });
        trafficSwitchOff.addEventListener('click', function () {
            trafficLayer.setMap(null);
        });
        transitSwitchOn.addEventListener('click', function () {
            transitLayer.setMap(map);
        });
        transitSwitchOff.addEventListener('click', function () {
            transitLayer.setMap(null);
        });
        // ---------------------MAP CONFIG STATUS---------------------------
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#trafficOn').prop("checked")) {
            trafficLayer.setMap(map);
        }
        else {
            trafficLayer.setMap(null);
        }
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#transitOn').prop("checked")) {
            transitLayer.setMap(map);
        }
        else {
            transitLayer.setMap(null);
        }
        // ---------------------------------------------------------
        document.getElementById('submit').addEventListener('click', function () {
            if (__WEBPACK_IMPORTED_MODULE_2_jquery__("#address").val() == "") {
                alert("Por favor insere um endereço");
            }
            else {
                geocodeAddress(geocoder, map);
            }
        });
        function geocodeAddress(geocoder, resultsMap) {
            var address = __WEBPACK_IMPORTED_MODULE_2_jquery__('#address').val();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                }
                else {
                    alert("Não há nenhum local com o nome informado");
                }
            });
        }
        var infoWindow = new google.maps.InfoWindow;
        this.veiculoRastreadoService.getRastreadorVeiculo()
            .subscribe(function (pontos) { return _this.pontoCoord = pontos; });
        if (this.pontoCoord == undefined) {
            return;
        }
        this.pontoCoord.forEach(function (dados) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(dados.latitude, dados.longitude),
                map: map,
                animation: google.maps.Animation.BOUNCE,
                icon: _this.carIcon
            });
            _this.criarMapa(marker, dados, infoWindow, map);
        });
    };
    NetmapComponent.prototype.criarMapa = function (marker, dados, infoWindow, map) {
        google.maps.event.addDomListener(marker, 'click', (function (marker, dados) {
            return function () {
                infoWindow.setContent('<div id="iw-container" style="background-color:#f4f4f4; border-radius: 20px; border: solid #086618 5px">' +
                    '<div class="iw-title" style="background-color:#086618; padding: 5px; color:white; border-top-left-radius: 10px; border-top-right-radius: 10px;"><h5>Informações do Veiculo</h5></div>' +
                    '<div id="conteudo" class="iw-content" style="padding: 10px;">' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Dados do Veiculo</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Modelo:</b> ' + dados.veiculoAlocado.veiculo.modelo.nome + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Placa: </b>' + dados.veiculoAlocado.veiculo.placa + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Frota: </b>' + dados.veiculoAlocado.frota.nome + ' </div>' +
                    '<div style="text-align: left; color: black;"> </div>' +
                    '</div> <br>' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Dados do Condutor</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Nome: </b>' + dados.veiculoAlocado.condutor.nome + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Categoria: </b>' + dados.veiculoAlocado.condutor.categoria + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Vencimento: </b>' + dados.veiculoAlocado.condutor.vencimento_cnh + ' </div>' +
                    '</div> <br>' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Velocidade</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Velocidade: </b>' + dados.velocidade.toFixed(0) + 'Km/h </div>' +
                    '</div>' +
                    '<br>' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Coordenadas de localização</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Localização: </b>' + dados.latitude + ',' + dados.longitude + '</div>' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>');
                infoWindow.open(map, marker);
            };
        })(marker, dados));
    };
    NetmapComponent.prototype.localizarEndereco = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__("#localization").val() === "Selecione um veiculo") {
            this.toasterService.Error("Por favor escolha um veiculo");
            return;
        }
        var geocoder = new google.maps.Geocoder;
        var localization = __WEBPACK_IMPORTED_MODULE_2_jquery__("#localization").val();
        console.log(localization);
        var latLngStr = localization.split(',', 2);
        var latLng = { lat: parseFloat(latLngStr[0]), lng: parseFloat(latLngStr[1]) };
        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (results[0]) {
                var formatedAndress = results[0].formatted_address;
                var andressArray = formatedAndress.split(",", 4);
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#input1").val(andressArray[0]);
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#input2").val(andressArray[1]);
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#input3").val(andressArray[2]);
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#input4").val(andressArray[3]);
            }
        });
    };
    NetmapComponent.prototype.procurarByImei = function () {
        var _this = this;
        var imei = __WEBPACK_IMPORTED_MODULE_2_jquery__("#imei").val();
        this.coordenadaService.getCoordenada(imei)
            .subscribe(function (coordenadas) { return _this.coordenadas = coordenadas; });
        var option = {
            zoom: 15,
            center: { lat: this.latitude, lng: this.longitude }
        };
        var map = new google.maps.Map(document.getElementById('map'), option);
        var infoWindow = new google.maps.InfoWindow;
        this.coordenadas.forEach(function (dados) {
            console.log(dados.latitude + "," + dados.longitude);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(dados.latitude, dados.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: _this.carIcon
            });
            google.maps.event.addDomListener(marker, 'click', (function (marker, dados) {
                return function () {
                    infoWindow.setContent('<div class="carInfo">' +
                        '<img src="http://www.edificiovitra.com.br/wp-content/uploads/2017/10/carro-2.jpg" width="100px" height="100px">' +
                        '</div>' +
                        "<h5>Veiculo: </h5>" + dados.latitude + "<br>" +
                        "<h5>Modelo: " + dados.longitude + "<br>" +
                        "<h5>Condutor: <h5>" + dados.velocidade + "KM/H" + "<br>");
                    infoWindow.open(map, marker);
                };
            })(marker, dados));
        });
    };
    NetmapComponent.prototype.rastrear = function () {
        var location = __WEBPACK_IMPORTED_MODULE_2_jquery__("#endereco").val();
        var lat = __WEBPACK_IMPORTED_MODULE_2_jquery__("#latitude").val();
        var long = __WEBPACK_IMPORTED_MODULE_2_jquery__("#longitude").val();
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            method: "GET",
            url: "https://maps.googleapis.com/maps/api/geocode/json",
            data: {
                key: 'AIzaSyC6gKH9ME-Mp-GYLuDB27yRprHw2PEIeZo'
            }
        })
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NetmapComponent.prototype.markerInfo = function () {
        var _this = this;
        this.veiculoRastreadoService.getRastreadorVeiculo()
            .subscribe(function (resp) { return _this.pontoCoord = resp; });
        this.pontoCoord.forEach(function (info) {
            console.log(_this.pontoCoord);
            console.log("ID: " + info.id);
            console.log("Veiculo Alocado: " + info.veiculoAlocado.veiculo.placa);
            console.log("Rastreador: " + info.rastreador.imei);
            console.log("Latitude: " + info.latitude);
            console.log("Longitude: " + info.longitude);
            console.log("Velocidade: " + info.velocidade);
            console.log("Data Hora Registro: " + info.data_coordenada);
            console.log("Data hora Dispositivo: " + info.hora_coordenada);
        });
    };
    NetmapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-netmap',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('1000ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('500ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */],
            __WEBPACK_IMPORTED_MODULE_4__rastreador_coordenada_shared_service_coordenada_service__["a" /* CoordenadaService */],
            __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */]])
    ], NetmapComponent);
    return NetmapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/netmap/netmap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetmapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__netmap_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__netmap_routing_module__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NetmapModule = (function () {
    function NetmapModule() {
    }
    NetmapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__netmap_routing_module__["a" /* NetMapRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDW_0Bcxp3EbaP7dhdUAv_7gHKPf0_jNG4'
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__netmap_component__["a" /* NetmapComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */],
                __WEBPACK_IMPORTED_MODULE_7__toaster_service__["a" /* ToasterService */]
            ]
        })
    ], NetmapModule);
    return NetmapModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/netmap/netmap.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetMapRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__netmap_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var netMapRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__netmap_component__["a" /* NetmapComponent */] }
];
var NetMapRoutingModule = (function () {
    function NetMapRoutingModule() {
    }
    NetMapRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(netMapRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], NetMapRoutingModule);
    return NetMapRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <servico-rastreamento-admin></servico-rastreamento-admin>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animation__ = __webpack_require__("../../../../../src/app/router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicoRastreamentoComponent = (function () {
    function ServicoRastreamentoComponent() {
    }
    ServicoRastreamentoComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
    };
    ServicoRastreamentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servico-rastreamento',
            template: __webpack_require__("../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoRastreamentoComponent);
    return ServicoRastreamentoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoRastreamentoModule", function() { return ServicoRastreamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__netmap_netmap_module__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__campo_invalid_campo_invalid_module__ = __webpack_require__("../../../../../src/app/campo-invalid/campo-invalid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tecnicos_condutor_shared_service_condutor_service__ = __webpack_require__("../../../../../src/app/layout/tecnicos/condutor/shared/service/condutor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_veiculo_rastreado_service__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/shared/service/veiculo-rastreado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_servico_rastreamento_form_servico_rastreamento_form_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_servico_rastreamento_search_servico_rastreamento_search_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-search/servico-rastreamento-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servico_rastreamento_routing_module__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servico_rastreamento_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_servico_rastreamento_admin_servico_rastreamento_admin_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-admin/servico-rastreamento-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_servico_rastreamento_tools_servico_rastreamento_tools_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-tools/servico-rastreamento-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_servico_rastreamento_header_servico_rastreamento_header_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-header/servico-rastreamento-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_servico_rastreamento_table_servico_rastreamento_table_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-table/servico-rastreamento-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__controle_veiculo_veiculo_alocado_veiculo_alocado_module__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/veiculo-alocado.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_datatable__ = __webpack_require__("../../../../primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_multiselect__ = __webpack_require__("../../../../primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_slider__ = __webpack_require__("../../../../primeng/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_button__ = __webpack_require__("../../../../primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_toolbar__ = __webpack_require__("../../../../primeng/toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_splitbutton__ = __webpack_require__("../../../../primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__rastreador_rastreador_module__ = __webpack_require__("../../../../../src/app/layout/rastreador/rastreador.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var ServicoRastreamentoModule = (function () {
    function ServicoRastreamentoModule() {
    }
    ServicoRastreamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__servico_rastreamento_routing_module__["a" /* ServicoRastreamentoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__controle_veiculo_veiculo_alocado_veiculo_alocado_module__["a" /* VeiculoAlocadoModule */],
                __WEBPACK_IMPORTED_MODULE_25__rastreador_rastreador_module__["RastreadorModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__netmap_netmap_module__["a" /* NetmapModule */],
                __WEBPACK_IMPORTED_MODULE_17_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_multiselect__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_slider__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_toolbar__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_24_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_1__campo_invalid_campo_invalid_module__["a" /* CampoInvalidModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__servico_rastreamento_component__["a" /* ServicoRastreamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_servico_rastreamento_admin_servico_rastreamento_admin_component__["a" /* ServicoRastreamentoAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_servico_rastreamento_tools_servico_rastreamento_tools_component__["a" /* ServicoRastreamentoToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_servico_rastreamento_header_servico_rastreamento_header_component__["a" /* ServicoRastreamentoHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_servico_rastreamento_search_servico_rastreamento_search_component__["a" /* ServicoRastreamentoSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_servico_rastreamento_table_servico_rastreamento_table_component__["a" /* ServicoRastreamentoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_servico_rastreamento_form_servico_rastreamento_form_component__["a" /* ServicoRastreamentoFormComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__shared_service_veiculo_rastreado_service__["a" /* VeiculoRastreadoService */],
                __WEBPACK_IMPORTED_MODULE_6__tecnicos_condutor_shared_service_condutor_service__["a" /* CondutorService */],
                __WEBPACK_IMPORTED_MODULE_5__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__["a" /* VeiculoAlocadoService */],
                __WEBPACK_IMPORTED_MODULE_26__toaster_service__["a" /* ToasterService */]
            ]
        })
    ], ServicoRastreamentoModule);
    return ServicoRastreamentoModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRastreamentoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__netmap_netmap_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/netmap/netmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servico_rastreamento_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/servico-rastreamento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_servico_rastreamento_form_servico_rastreamento_form_component__ = __webpack_require__("../../../../../src/app/layout/servico-rastreamento/components/servico-rastreamento-form/servico-rastreamento-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var servicoRastreamentoRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__servico_rastreamento_component__["a" /* ServicoRastreamentoComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_4__components_servico_rastreamento_form_servico_rastreamento_form_component__["a" /* ServicoRastreamentoFormComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_servico_rastreamento_form_servico_rastreamento_form_component__["a" /* ServicoRastreamentoFormComponent */] },
    { path: 'netmap', component: __WEBPACK_IMPORTED_MODULE_0__netmap_netmap_component__["a" /* NetmapComponent */] }
];
var ServicoRastreamentoRoutingModule = (function () {
    function ServicoRastreamentoRoutingModule() {
    }
    ServicoRastreamentoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(servicoRastreamentoRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ServicoRastreamentoRoutingModule);
    return ServicoRastreamentoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servico-rastreamento/shared/class/veiculo-rastreado.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoRastreado; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_veiculo_alocado_shared_class_veiculo_alocado__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rastreador_shared_class_rastreador__ = __webpack_require__("../../../../../src/app/layout/rastreador/shared/class/rastreador.ts");


var VeiculoRastreado = (function () {
    function VeiculoRastreado() {
        this.rastreador = new __WEBPACK_IMPORTED_MODULE_1__rastreador_shared_class_rastreador__["a" /* Rastreador */]();
        this.veiculoAlocado = new __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_veiculo_alocado_shared_class_veiculo_alocado__["a" /* VeiculoAlocado */]();
    }
    return VeiculoRastreado;
}());



/***/ })

});
//# sourceMappingURL=servico-rastreamento.module.chunk.js.map