webpackJsonp(["abastecimento.module"],{

/***/ "../../../../../src/app/layout/abastecimento/abastecimento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/abastecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <abastecimento-admin></abastecimento-admin>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/abastecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoComponent; });
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


var AbastecimentoComponent = (function () {
    function AbastecimentoComponent() {
    }
    AbastecimentoComponent.prototype.ngOnInit = function () {
    };
    AbastecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-abastecimento',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/abastecimento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/abastecimento.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], AbastecimentoComponent);
    return AbastecimentoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/abastecimento.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoModule", function() { return AbastecimentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_veiculo_alocado_module__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/veiculo-alocado.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor_components_fornecedor_form_fornecedor_form_component__ = __webpack_require__("../../../../../src/app/layout/fornecedor/components/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campo_invalid_campo_invalid_module__ = __webpack_require__("../../../../../src/app/campo-invalid/campo-invalid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abastecimento_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/abastecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fornecedor_fornecedor_module__ = __webpack_require__("../../../../../src/app/layout/fornecedor/fornecedor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__abastecimento_routing_module__ = __webpack_require__("../../../../../src/app/layout/abastecimento/abastecimento.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_abastecimento_service__ = __webpack_require__("../../../../../src/app/layout/abastecimento/shared/service/abastecimento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_abastecimento_form_abastecimento_form_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_abastecimento_tools_abastecimento_tools_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_abastecimento_header_abastecimento_header_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_abastecimento_search_abastecimento_search_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_abastecimento_table_abastecimento_table_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_abastecimento_admin_abastecimento_admin_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_slider__ = __webpack_require__("../../../../primeng/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_button__ = __webpack_require__("../../../../primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_toolbar__ = __webpack_require__("../../../../primeng/toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_datatable__ = __webpack_require__("../../../../primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_multiselect__ = __webpack_require__("../../../../primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_splitbutton__ = __webpack_require__("../../../../primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__fornecedor_shared_service_fornecedor_service__ = __webpack_require__("../../../../../src/app/layout/fornecedor/shared/service/fornecedor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AbastecimentoModule = (function () {
    function AbastecimentoModule() {
    }
    AbastecimentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__abastecimento_routing_module__["a" /* AbastecimentoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__fornecedor_fornecedor_module__["FornecedorModule"],
                __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_veiculo_alocado_module__["a" /* VeiculoAlocadoModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_slider__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_toolbar__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_multiselect__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__campo_invalid_campo_invalid_module__["a" /* CampoInvalidModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__abastecimento_component__["a" /* AbastecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_abastecimento_tools_abastecimento_tools_component__["a" /* AbastecimentoToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_abastecimento_header_abastecimento_header_component__["a" /* AbastecimentoHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_abastecimento_admin_abastecimento_admin_component__["a" /* AbastecimentoAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_abastecimento_table_abastecimento_table_component__["a" /* AbastecimentoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_abastecimento_search_abastecimento_search_component__["a" /* AbastecimentoSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_abastecimento_form_abastecimento_form_component__["a" /* AbastecimentoFormComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_service_abastecimento_service__["a" /* AbastecimentoService */],
                __WEBPACK_IMPORTED_MODULE_2__fornecedor_components_fornecedor_form_fornecedor_form_component__["a" /* FornecedorFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__fornecedor_shared_service_fornecedor_service__["a" /* FornecedorService */],
                __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */]
            ],
            exports: []
        })
    ], AbastecimentoModule);
    return AbastecimentoModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/abastecimento.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_abastecimento_form_abastecimento_form_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abastecimento_component__ = __webpack_require__("../../../../../src/app/layout/abastecimento/abastecimento.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var abastecimentoRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__abastecimento_component__["a" /* AbastecimentoComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_2__components_abastecimento_form_abastecimento_form_component__["a" /* AbastecimentoFormComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_abastecimento_form_abastecimento_form_component__["a" /* AbastecimentoFormComponent */] }
];
var AbastecimentoRoutingModule = (function () {
    function AbastecimentoRoutingModule() {
    }
    AbastecimentoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(abastecimentoRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AbastecimentoRoutingModule);
    return AbastecimentoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<abastecimento-tools></abastecimento-tools>\r\n<abastecimento-header></abastecimento-header>\r\n<abastecimento-search></abastecimento-search>\r\n<abastecimento-table></abastecimento-table>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoAdminComponent; });
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


var AbastecimentoAdminComponent = (function () {
    function AbastecimentoAdminComponent() {
    }
    AbastecimentoAdminComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
    };
    AbastecimentoAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'abastecimento-admin',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-admin/abastecimento-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbastecimentoAdminComponent);
    return AbastecimentoAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header{\r\n    background-color: green;\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form):not(div){\r\n    border: solid 1px red;\r\n    border-radius: 5px;\r\n}\r\n\r\n.ng-valid:not(form):not(div){\r\n    border: solid 1px rgb(19, 214, 19);\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n@media print\r\n{\r\n    .no-print, .no-print *\r\n    {\r\n        display: none !important;\r\n    }\r\n}\r\n\r\n\r\n.requisicao{\r\n    margin: 150px;\r\n}\r\n\r\n\r\ntr {\r\n    color: black;\r\n    background-color: black;\r\n    border: solid 1px black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"container-fluid\" class=\"no-print\">\r\n\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n          <a [routerLink]=\"['']\">home</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n          <a [routerLink]=\"['/abastecimentos']\">abastecimento</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">form</li>\r\n      </ol>\r\n    </nav>\r\n\r\n    <header>\r\n      <h2>\r\n        <font color=\"black\">Cadastro de Abastecimento</font>\r\n      </h2>\r\n    </header>\r\n    <br>\r\n\r\n    <form [formGroup]=\"formAbastecimento\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n          <label for=\"cod\">\r\n            <font color=\"black\">Código</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-asterisk\"></i>\r\n              </div>\r\n            </div>\r\n            <input id=\"codigoAbs\" readonly type=\"text\" formControlName=\"id\" [(ngModel)]=\"abastecimento.id\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <div formGroupName=\"veiculo_alocado\">\r\n            <label for=\"veiculo_alocado\">\r\n              <font color=\"black\">Veiculo</font>\r\n            </label>\r\n            <div class=\"input-group mb-2\">\r\n              <select id=\"veiculo_alocado\" formControlName=\"id\" [(ngModel)]=\"abastecimento.veiculo_alocado.id\" class=\"form-control\">\r\n                <option selected>Selecione um veiculo</option>\r\n                <option *ngFor=\"let veiculoAlocado of veiculoAlocados\" value=\"{{veiculoAlocado.id}}\">{{veiculoAlocado.veiculo.placa}} - {{veiculoAlocado.frota.nome}}</option>\r\n              </select>\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-btn\">\r\n                  <button type=\"btn\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#veiculoAlocadoModal\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <app-campo-invalid [mostrarErro]=\"verificaValidTouched('veiculo_alocado.id')\" msgErro=\"O veiculo é obrigatório.\">\r\n            </app-campo-invalid>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <div formGroupName=\"fornecedor\">\r\n            <label for=\"fornecedor\">\r\n              <font color=\"black\">Fornecedor</font>\r\n            </label>\r\n            <div class=\"input-group mb-2\">\r\n              <select id=\"fornecedor\" formControlName=\"id\" [(ngModel)]=\"abastecimento.fornecedor.id\" class=\"form-control\">\r\n                <option selected>Selecione um fornecedor</option>\r\n                <option *ngFor=\"let fornecedor of fornecedores\" value=\"{{fornecedor.id}}\">{{fornecedor.nome}}</option>\r\n              </select>\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-btn\">\r\n                  <button type=\"btn\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#fornecedorModal\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <app-campo-invalid [mostrarErro]=\"verificaValidTouched('fornecedor.id')\" msgErro=\"O fornecedor da manutenção é obrigatório.\">\r\n            </app-campo-invalid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <label for=\"data_abastecimento\">\r\n            <font color=\"black\">Data de abastecimento</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-calendar\"></i>\r\n              </div>\r\n            </div>\r\n            <input id=\"dataAbs\" type=\"date\" formControlName=\"data_abastecimento\" [(ngModel)]=\"abastecimento.data_abastecimento\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid [mostrarErro]=\"verificaValidTouched('data_abastecimento')\" msgErro=\"A data do abastecimento é obrigatório.\">\r\n          </app-campo-invalid>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n          <label for=\"numero_cupom_fiscal\">\r\n            <font color=\"black\">Número do cupom fiscal</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fas fa-barcode\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"number\" formControlName=\"numero_cupom_fiscal\" [(ngModel)]=\"abastecimento.numero_cupom_fiscal\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid [mostrarErro]=\"verificaValidTouched('numero_cupom_fiscal')\" msgErro=\"O número do cupom fiscal é obrigatório.\">\r\n          </app-campo-invalid>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-4 col-lg-4 col-xl-4\">\r\n          <label for=\"odometro\">\r\n            <font color=\"black\">Hodômetro</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fas fa-tachometer-alt\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"number\" formControlName=\"hodometro\" [(ngModel)]=\"abastecimento.hodometro\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid [mostrarErro]=\"verificaValidTouched('hodometro')\" msgErro=\"O hodômetro do veiculo é obrigatório.\">\r\n          </app-campo-invalid>\r\n        </div>\r\n\r\n        <div class=\"form-group col-sm-12 col-md-4 col-lg-4 col-xl-4\">\r\n          <label for=\"quantidade_abastecida\">\r\n            <font color=\"black\">Quantidade abastecida</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fas fa-cubes\"></i>\r\n              </div>\r\n            </div>\r\n            <input id=\"litrosAbs\" type=\"number\" formControlName=\"quantidade_abastecida\" [(ngModel)]=\"abastecimento.quantidade_abastecida\"\r\n              class=\"form-control\" placeholder=\"Litros\">\r\n          </div>\r\n          <app-campo-invalid [mostrarErro]=\"verificaValidTouched('quantidade_abastecida')\" msgErro=\"A quantidade abastecida é obrigatório.\">\r\n          </app-campo-invalid>\r\n        </div>\r\n\r\n        <div class=\"form-group col-sm-12 col-md-4 col-lg-4 col-xl-4\">\r\n          <label for=\"valor_total\">\r\n            <font color=\"black\">Valor total</font>\r\n          </label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fa fa-money-bill-alt\"></i>\r\n              </div>\r\n            </div>\r\n            <input id=\"valorAbs\" type=\"number\" formControlName=\"valor_total\" [(ngModel)]=\"abastecimento.valor_total\" class=\"form-control\">\r\n          </div>\r\n          <app-campo-invalid [mostrarErro]=\"verificaValidTouched('valor_total')\" msgErro=\"O valor total é obrigatório.\">\r\n          </app-campo-invalid>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formAbastecimento.valid\" (click)=\"save()\">Salvar\r\n            <i class=\"fa fa-save\"></i>\r\n          </button>\r\n          <button type=\"reset\" class=\"btn btn-danger\">Cancelar\r\n            <i class=\"fa fa-times\"></i>\r\n          </button>\r\n          <button type=\"btn\" id=\"pdfButton\" (click)=\"pdfConverter()\" class=\"btn btn-warning\">Gerar Requisição\r\n            <i class=\"fas fa-file-pdf\"></i>\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <!-- Modal Fornecedor -->\r\n\r\n  <div class=\"modal fade\" id=\"fornecedorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <fornecedor-form></fornecedor-form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Modal veiculo alocado-->\r\n  <div class=\"modal fade\" id=\"veiculoAlocadoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <veiculo-alocado-form></veiculo-alocado-form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"ImprimirReq\"  id=\"pdfContent\" #pdfContent class=\"requisicao\" style=\"margin-top: 10px;\">\r\n    <div style=\"text-align: left; right: 100px; bottom: 200px\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card col-8\" style=\"max-height: 200px; border: solid 1px black;\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-1\">\r\n                <img src=\"assets/imagens/OnNetTelecom.png\" style=\"margin-top: 20px;\" width=\"160px;\">\r\n              </div>\r\n              <div class=\"offset-4\"></div>\r\n              <div class=\"col-7\">\r\n                <p style=\"text-align: center;\">\r\n                  Rua Osório Afonso, 546\r\n                  <br> Bairro Constantino\r\n                  <br> Fone: (34) 3515-2222\r\n                  <br> 38747-530 - Patrocínio - MG\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card col-4\" style=\"max-height: 200px; border: solid 1px black;\">\r\n          <div style=\"text-align: center;\" class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"cabeçalhoNumero\">\r\n                <b>Requisição de Abastecimento:</b>\r\n              </div>\r\n\r\n              <div style=\"text-align: left; padding: 10px\">\r\n                <p style=\"font-size: 4mm\">\r\n                  <b>Nº {{_Codigo}}</b>\r\n                </p>\r\n                <p>\r\n                  <b>Data: {{_Day}}/{{_Month}}/{{_Year}}</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card col-12\" style=\"border: solid 1px black;\">\r\n          <div class=\"card-body\" style=\"text-align: left;\">\r\n            Firma: {{_NomeFornecedor}}\r\n            <br> Autorizamos a entregar ao portador(a): {{_condutor}}\r\n            <br> Veiculo : {{_placa}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <table class=\"table table-bordered col-12\">\r\n          <tr>\r\n            <th>Qtd.</th>\r\n            <th>Descrição</th>\r\n            <th>Total</th>\r\n          </tr>\r\n          <tr>\r\n            <td>1</td>\r\n            <td>Combustivel</td>\r\n            <td>{{_Total}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"margin-top: -20px;\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"card col-9\" style=\"border: solid 1px black;\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                Debitar em nossa conta as mercadorias acima.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card col-3\" style=\"border: solid 1px black;\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <b>Total: {{_Total}}</b>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card col-12\" style=\"border: solid 1px black;\">\r\n          <div class=\"card-body\">\r\n            Autorizado por:___________________________________________________________________\r\n            <br>\r\n            <b style=\"text-align: center; margin-left: 250px\">{{_Usuario}}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"ImprimirReq\"  #pdfContent class=\"requisicao\">\r\n      <div style=\"text-align: left; right: 100px; bottom: 200px\">\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"card col-8\" style=\"max-height: 200px; border: solid 1px black\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-1\">\r\n                  <img src=\"assets/imagens/OnNetTelecom.png\" style=\"margin-top: 20px;\" width=\"160px;\">\r\n                </div>\r\n                <div class=\"offset-4\"></div>\r\n                <div class=\"col-7\">\r\n                  <p style=\"text-align: center;\">\r\n                         Rua Osório Afonso, 546\r\n                    <br> Bairro Constantino\r\n                    <br> Fone: (34) 3515-2222\r\n                    <br> 38747-530 - Patrocínio - MG\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card col-4\" style=\"max-height: 200px; border: solid 1px black;\">\r\n            <div style=\"text-align: center;\" class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"cabeçalhoNumero\">\r\n                  <b>Requisição de Abastecimento:</b>\r\n                </div>\r\n  \r\n                <div style=\"text-align: left; padding: 10px\">\r\n                  <p style=\"font-size: 4mm\">\r\n                    <b>Nº {{_Codigo}}</b>\r\n                  </p>\r\n                  <p>\r\n                    <b>Data: {{_Day}}/{{_Month}}/{{_Year}}</b>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"card col-12\" style=\"border: solid 1px black;\">\r\n            <div class=\"card-body\" style=\"text-align: left;\">\r\n              Firma: {{_NomeFornecedor}}\r\n              <br> Autorizamos a entregar ao portador(a): {{_condutor}}\r\n              <br> Veiculo : {{_placa}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <table class=\"table table-bordered col-12\">\r\n            <tr>\r\n              <th>Qtd.</th>\r\n              <th>Descrição</th>\r\n              <th>Total</th>\r\n            </tr>\r\n            <tr>\r\n              <td bgcolor=\"black\">1</td>\r\n              <td>Combustivel</td>\r\n              <td>{{_Total}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n  <div style=\"margin-top: -20px;\"></div>\r\n        <div class=\"row\">\r\n          <div class=\"card col-9\" style=\"border: solid 1px black;\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  Debitar em nossa conta as mercadorias acima.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card col-3\" style=\"border: solid 1px black;\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <b>Total: {{_Total}}</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"card col-12\" style=\"border: solid 1px black;\">\r\n            <div class=\"card-body\">\r\n              Autorizado por:___________________________________________________________________\r\n              <br>\r\n              <b style=\"text-align: center; margin-left: 250px\">{{_Usuario}}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor_shared_service_fornecedor_service__ = __webpack_require__("../../../../../src/app/layout/fornecedor/shared/service/fornecedor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_class_abastecimento__ = __webpack_require__("../../../../../src/app/layout/abastecimento/shared/class/abastecimento.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_abastecimento_service__ = __webpack_require__("../../../../../src/app/layout/abastecimento/shared/service/abastecimento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_animation__ = __webpack_require__("../../../../../src/app/router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AbastecimentoFormComponent = (function () {
    function AbastecimentoFormComponent(formBuilder, router, route, abastecimentoService, fornecedorService, veiculoAlocadoService, toasterService) {
        this.router = router;
        this.route = route;
        this.abastecimentoService = abastecimentoService;
        this.fornecedorService = fornecedorService;
        this.veiculoAlocadoService = veiculoAlocadoService;
        this.toasterService = toasterService;
        this.url = "http:177.85.0.23/onnet_frota/abastecimentos/form";
        this.urlEdit = "http:177.85.0.23/onnet_frota/abastecimentos/edit/";
        this.mostrarPegada = true;
        this.abastecimento = new __WEBPACK_IMPORTED_MODULE_6__shared_class_abastecimento__["a" /* Abastecimento */]();
        // DADOS DA REQUISIÇÃO
        this.dataAbastecimento = "";
        this.cupom_fiscal = "";
        this._Codigo = "";
        this._FornecedorId = "";
        this._Litros = "";
        this._Valor = "";
        this._Total = "";
        this.ImprimirReq = false;
        this.formAbastecimento = formBuilder.group({
            id: [''],
            veiculo_alocado: formBuilder.group({
                id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
            }),
            numero_cupom_fiscal: [''],
            data_abastecimento: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            hodometro: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(6)],],
            quantidade_abastecida: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            valor_total: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            fornecedor: formBuilder.group({
                id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
            })
        });
    }
    AbastecimentoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
        var urls = window.location.protocol + window.location.host + window.location.pathname;
        if (urls != this.url) {
            this.mostrarPegada = false;
        }
        this.fornecedorService.getFornecedores()
            .subscribe(function (fornecedores) { return _this.fornecedores = fornecedores; });
        this.veiculoAlocadoService.getVeiculoAlocados()
            .subscribe(function (veiculoAlocados) { return _this.veiculoAlocados = veiculoAlocados; });
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#pdfButton").hide();
                return;
            }
            if (urls == _this.urlEdit + id) {
                _this.abastecimentoService.getAbastecimento(id)
                    .subscribe(function (dados) { return _this.popularDadosForm(dados); }, function (response) {
                    if (response.status == 404) {
                        _this.router.navigate(['NotFound']);
                    }
                });
            }
        });
    };
    AbastecimentoFormComponent.prototype.popularDadosForm = function (dados) {
        this.formAbastecimento.patchValue({
            id: dados.id,
            numero_cupom_fiscal: dados.numero_cupom_fiscal,
            data_abastecimento: dados.data_abastecimento,
            hodometro: dados.hodometro,
            quantidade_abastecida: dados.quantidade_abastecida,
            valor_total: dados.valor_total,
            fornecedor: dados.fornecedor,
            veiculo_alocado: dados.veiculo_alocado
        });
    };
    AbastecimentoFormComponent.prototype.tableToJson = function (table) {
        var data = [];
        // first row needs to be headers
        var headers = [];
        for (var i = 0; i < table.rows[0].cells.length; i++) {
            headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
        }
        data.push(headers);
        // go through cells
        for (var i = 1; i < table.rows.length; i++) {
            var tableRow = table.rows[i];
            var rowData = {};
            for (var j = 0; j < tableRow.cells.length; j++) {
                rowData[headers[j]] = tableRow.cells[j].innerHTML;
            }
            data.push(rowData);
        }
        return data;
    };
    AbastecimentoFormComponent.prototype.pdfConverter = function () {
        var _this = this;
        this._Codigo = __WEBPACK_IMPORTED_MODULE_9_jquery__("#codigoAbs").val();
        this._FornecedorId = __WEBPACK_IMPORTED_MODULE_9_jquery__("#fornecedor").val();
        this._Litros = __WEBPACK_IMPORTED_MODULE_9_jquery__("#litrosAbs").val();
        this.dataAbastecimento = __WEBPACK_IMPORTED_MODULE_9_jquery__("#dataAbs").val();
        this._Valor = __WEBPACK_IMPORTED_MODULE_9_jquery__("#valorAbs").val();
        this._Total = this._Valor;
        this._VeiculoAlocadoId = __WEBPACK_IMPORTED_MODULE_9_jquery__("#veiculo_alocado").val();
        var _DataExtraction = this.dataAbastecimento.split("-");
        this._Day = _DataExtraction[2];
        this._Year = _DataExtraction[0];
        this._Month = _DataExtraction[1];
        var id = this._FornecedorId;
        var VeiculoId = this._VeiculoAlocadoId;
        this.fornecedorService.getFornecedor(id)
            .subscribe(function (fornecedor) { return _this._fornecedor = fornecedor; });
        this.veiculoAlocadoService.getVeiculoAlocado(this._VeiculoAlocadoId)
            .subscribe(function (veiculoAlocado) { return _this._veiculoAlocado = veiculoAlocado; });
        setTimeout(function () {
            _this._NomeFornecedor = _this._fornecedor.nome;
        }, 1000);
        setTimeout(function () {
            _this._NomeEmpresa = _this._veiculoAlocado.frota.empresa.nome;
            _this._condutor = _this._veiculoAlocado.condutor.nome;
            _this._placa = _this._veiculoAlocado.veiculo.placa;
        }, 1000);
        this._Usuario = sessionStorage.getItem("UserName");
        this.ImprimirReq = true;
        setTimeout(function () {
            window.print();
        }, 1000);
        setTimeout(function () {
            _this.ImprimirReq = false;
        }, 1000);
    };
    AbastecimentoFormComponent.prototype.save = function () {
        var _this = this;
        var result, abastecimentoValue = this.formAbastecimento.value;
        if (abastecimentoValue.id) {
            result = this.abastecimentoService.updateAbastecimento(abastecimentoValue)
                .subscribe(function (suc) {
                _this.toasterService.Success("Informação do abastecimento foram alteradas com sucesso !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do abastecimento !!");
            });
            setTimeout(function () {
                _this.router.navigate(['/abastecimentos']);
            }, 500);
        }
        else {
            result = this.abastecimentoService.addAbastecimento(abastecimentoValue)
                .subscribe(function (suc) {
                _this.toasterService.Success("Cadastro efetuado com sucesso !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo abastecimento !!");
            });
        }
        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
        var urls = window.location.protocol + window.location.host + window.location.pathname;
        if (urls == this.url) {
            setTimeout(function () {
                _this.router.navigate(['abastecimentos']);
            }, 500);
        }
    };
    AbastecimentoFormComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formAbastecimento.get(campo).valid && this.formAbastecimento.get(campo).touched;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('pdfContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"])
    ], AbastecimentoFormComponent.prototype, "content", void 0);
    AbastecimentoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'abastecimento-form',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-form/abastecimento-form.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_8__router_animation__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__shared_service_abastecimento_service__["a" /* AbastecimentoService */],
            __WEBPACK_IMPORTED_MODULE_2__fornecedor_shared_service_fornecedor_service__["a" /* FornecedorService */],
            __WEBPACK_IMPORTED_MODULE_1__controle_veiculo_veiculo_alocado_shared_service_veiculo_alocado_service__["a" /* VeiculoAlocadoService */],
            __WEBPACK_IMPORTED_MODULE_0__toaster_service__["a" /* ToasterService */]])
    ], AbastecimentoFormComponent);
    return AbastecimentoFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Clearing floats */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n.cf {\r\n  *zoom: 1;\r\n}\r\n\r\n/* Mini reset, no margins, paddings or bullets */\r\n.menu,\r\n.submenu {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n/* Main level */\r\n.menu {\t\t\t\r\n  margin: 50px auto;\r\n  width: 800px;\r\n  /* http://www.red-team-design.com/horizontal-centering-using-css-fit-content-value */\r\n  width: -moz-fit-content;\r\n  width: -webkit-fit-content;\r\n  width: fit-content;\t\r\n}\r\n\r\n.menu > li {\r\n  background: #284b6f;\r\n  float: left;\r\n  position: relative;\r\n  -webkit-transform: skewX(25deg);\r\n          transform: skewX(25deg);\r\n  width: 350px;\r\n}\r\n\r\n.menu a {\r\n  display: block;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-family: Arial, Helvetica;\r\n  font-size: 14px;\r\n}\t\t\r\n\r\n.menu li:hover {\r\n  background: #e74c3c;\r\n}\t\t\r\n\r\n.menu > li > a {\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n  padding: 1em 2em;\r\n}\r\n\r\n/* Dropdown */\r\n.submenu {\r\n  position: absolute;\r\n  width: 200px;\r\n  left: 50%; margin-left: -100px;\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top;\r\n}\r\n\r\n.submenu li {\r\n  background-color: #34495e;\r\n  position: relative;\r\n  overflow: hidden;\t\t\r\n}\t\t\t\t\t\t\r\n\r\n.submenu > li > a {\r\n  padding: 1em 2em;\t\t\t\r\n}\r\n\r\n.submenu > li::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -125%;\r\n  height: 100%;\r\n  width: 100%;\t\t\t\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, .9);\t\t\t\r\n}\t\t\r\n\r\n/* Odd stuff */\r\n.submenu > li:nth-child(odd){\r\n  -webkit-transform: skewX(-25deg) translateX(0);\r\n          transform: skewX(-25deg) translateX(0);\r\n}\r\n\r\n.submenu > li:nth-child(odd) > a {\r\n  -webkit-transform: skewX(25deg);\r\n          transform: skewX(25deg);\r\n}\r\n\r\n.submenu > li:nth-child(odd)::after {\r\n  right: -50%;\r\n  -webkit-transform: skewX(-25deg) rotate(3deg);\r\n          transform: skewX(-25deg) rotate(3deg);\r\n}\t\t\t\t\r\n\r\n/* Even stuff */\r\n.submenu > li:nth-child(even){\r\n  -webkit-transform: skewX(25deg) translateX(0);\r\n          transform: skewX(25deg) translateX(0);\r\n}\r\n\r\n.submenu > li:nth-child(even) > a {\r\n  -webkit-transform: skewX(-25deg);\r\n          transform: skewX(-25deg);\r\n}\r\n\r\n.submenu > li:nth-child(even)::after {\r\n  left: -50%;\r\n  -webkit-transform: skewX(25deg) rotate(3deg);\r\n          transform: skewX(25deg) rotate(3deg);\r\n}\r\n\r\n/* Show dropdown */\r\n.submenu,\r\n.submenu li {\r\n  opacity: 0;\r\n  visibility: hidden;\t\t\t\r\n}\r\n\r\n.submenu li {\r\n  transition: .2s ease transform;\r\n}\r\n\r\n.menu > li:hover .submenu,\r\n.menu > li:hover .submenu li {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\t\t\r\n\r\n.menu > li:hover .submenu li:nth-child(even){\r\n  -webkit-transform: skewX(25deg) translateX(15px);\r\n          transform: skewX(25deg) translateX(15px);\t\t\t\r\n}\r\n\r\n.menu > li:hover .submenu li:nth-child(odd){\r\n  -webkit-transform: skewX(-25deg) translateX(-15px);\r\n          transform: skewX(-25deg) translateX(-15px);\t\t\t\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu cf\">\r\n  <li>\r\n    <a [routerLink]=\"['/fornecedor']\">fornecedor\r\n      <i class=\"fas fa-handshake\"></i>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a [routerLink]=\"['form']\">abastecimento\r\n      <i class=\"fa fa-tint\"></i>\r\n      <sup>\r\n        <i class=\"fa fa-plus\"></i>\r\n      </sup>\r\n    </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoHeaderComponent; });
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

var AbastecimentoHeaderComponent = (function () {
    function AbastecimentoHeaderComponent() {
    }
    AbastecimentoHeaderComponent.prototype.ngOnInit = function () {
    };
    AbastecimentoHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'abastecimento-header',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-header/abastecimento-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbastecimentoHeaderComponent);
    return AbastecimentoHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-toolbar{\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n}\r\n\r\n.card-body{\r\n  background-color: rgb(238, 235, 235);\r\n \r\n}\r\n\r\n.card-header{\r\n  background-color: rgb(238, 235, 235);\r\n  border-radius: 5px;\r\n  border: solid 1px rgb(194, 192, 192);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-sm-12 col-md-12 col-lg-12 col-xl-12\" class=\"noprint\">\r\n\r\n    <div class=\"card-header\">\r\n      \r\n  \r\n  \r\n  \r\n      <div class=\"card-body\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n          <div class=\"btn-toolbar\" role=\"toolbar\">\r\n            <div class=\"btn-group btn-group-justified\" role=\"group\">\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button id=\"list\" class=\"btn btn-primary\" data-original-title=\"Refreshr\" onClick=\"history.go(0)\" value=\"REFRESH\">\r\n                  <i class=\"fa fa-sync fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n              <a href=\"javascript:window.print()\">\r\n                <button id=\"passreset\" class=\"btn btn-primary\" data-original-title=\"Password Reset\">\r\n                  <i class=\"fa fa-print fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </a>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button id=\"new\" class=\"btn btn-success\" data-original-title=\"New\" [routerLink]=\"['form']\">\r\n                  <i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n              </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button id=\"desact\" class=\"btn btn-warning\" data-original-title=\"Deactivate\" (click)=\"editar()\">\r\n                  <i class=\"fa fa-edit fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button id=\"react\" class=\"btn btn-info\" data-original-title=\"Activate\">\r\n                  <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <button id=\"delete\" class=\"btn btn-danger\" data-original-title=\"Delete\" (click)=\"deletar()\">\r\n                  <i class=\"fas fa-trash fa-lg\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n\r\n          <!-- Campo deletar -->\r\n          <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\" *ngIf=\"seletorDelete\">\r\n            <div class=\"input-group mb-3\">\r\n              <input id=\"campoDeletar\" type=\"number\" class=\"form-control\" placeholder=\"Abastecimento ID: \">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"deletarItem()\">\r\n                  <i class=\"fas fa-trash fa-lg\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div> \r\n\r\n          <!-- Campo Editar -->\r\n          <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\" *ngIf=\"seletorEditar\">\r\n            <div class=\"input-group mb-3\">\r\n              <input id=\"campoEditar\" type=\"number\" class=\"form-control\" placeholder=\"Abastecimento ID: \">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-warning\" type=\"button\" (click)=\"editarItem()\">\r\n                  <i class=\"fas fa-edit fa-lg\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div> \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_abastecimento_service__ = __webpack_require__("../../../../../src/app/layout/abastecimento/shared/service/abastecimento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbastecimentoSearchComponent = (function () {
    function AbastecimentoSearchComponent(abastecimentoService, router, toasterService) {
        this.abastecimentoService = abastecimentoService;
        this.router = router;
        this.toasterService = toasterService;
        this.seletorDelete = false;
        this.seletorEditar = false;
    }
    AbastecimentoSearchComponent.prototype.ngOnInit = function () {
    };
    AbastecimentoSearchComponent.prototype.editar = function () {
        if (this.seletorEditar == false) {
            this.seletorEditar = true;
        }
        else {
            this.seletorEditar = false;
        }
    };
    AbastecimentoSearchComponent.prototype.editarItem = function () {
        var id = __WEBPACK_IMPORTED_MODULE_3_jquery__("#campoEditar").val();
        var item = this.abastecimentoService.getAbastecimento(id);
        this.router.navigate(['abastecimentos/edit/' + id]);
    };
    AbastecimentoSearchComponent.prototype.deletar = function () {
        if (this.seletorDelete == false) {
            this.seletorDelete = true;
        }
        else {
            this.seletorDelete = false;
        }
    };
    AbastecimentoSearchComponent.prototype.deletarItem = function () {
        var _this = this;
        var resp = confirm("Deseja realmente deletar este abastecimento?");
        if (resp == true) {
            var id = __WEBPACK_IMPORTED_MODULE_3_jquery__("#campoDeletar").val();
            this.abastecimentoService.deleteAbastecimento(id)
                .subscribe(function (suc) {
                _this.toasterService.Warning("Exclusão do abastecimento foi efetuado com sucesso !!");
            }, function (err) {
                _this.toasterService.Error("Ocorreu um erro ao tentar deletar o abastecimento ou seu usuario não tem permissão !!");
            });
        }
        else {
            return;
        }
    };
    AbastecimentoSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'abastecimento-search',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-search/abastecimento-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_abastecimento_service__["a" /* AbastecimentoService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]])
    ], AbastecimentoSearchComponent);
    return AbastecimentoSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"30\" placeholder=\"Filtro Global\">\r\n\r\n\r\n      <div id=\"table\">\r\n        <p-dataTable [value]=\"abastecimentos\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt scrollable=\"true\" scrollWidth=\"100%\"\r\n          [style]=\"{'margin-top':'30px'}\">\r\n          <p-header>Lista de Abastecimentos</p-header>\r\n          <p-column field=\"id\" header=\"ID\" [filter]=\"true\" filterPlaceholder=\"ID\" [style]=\"{'width':'150px'}\"></p-column>\r\n\r\n          <p-column field=\"veiculo_alocado.veiculo.placa\" header=\"veiculo_Alocado\" [filter]=\"true\" filterMatchmode=\"equals\" filterPlaceholder=\"Veiculo_Alocado\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n          <p-column field=\"fornecedor.nome\" header=\"Fornecedor\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Fornecedor\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n          <p-column field=\"numero_cupom_fiscal\" header=\"Número cupom fiscal\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Número do cupom fiscal\"\r\n            [style]=\"{'width':'200px'}\">\r\n          </p-column>\r\n          <p-column field=\"data_abastecimento\" header=\"Data Abastecimento\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Data de Abastecimento\"\r\n            [style]=\"{'width':'200px'}\">\r\n          </p-column>\r\n          <p-column field=\"hodometro\" header=\"Hodômetro\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Odometro\" [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n          <p-column field=\"quantidade_abastecida\" header=\"Quantidade Abastecida\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Quantidade abastecida\"\r\n            [style]=\"{'width':'200px'}\">\r\n          </p-column>\r\n          <p-column field=\"valor_total\" header=\"Valor total\" [filter]=\"true\" filterMatchMode=\"equals\" filterPlaceholder=\"Valor total\"\r\n            [style]=\"{'width':'150px'}\">\r\n          </p-column>\r\n          <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:10%\" class=\"noprint\">\r\n              <a routerLink=\"form\">\r\n                <button type=\"btn\" class=\"btn btn-info\" icon=\"fa-plus\" label=\"Add\" iconPos=\"left\">Add\r\n                  <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n              </a>\r\n            </div>\r\n          </p-footer>\r\n\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service_abastecimento_service__ = __webpack_require__("../../../../../src/app/layout/abastecimento/shared/service/abastecimento.service.ts");
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


var AbastecimentoTableComponent = (function () {
    function AbastecimentoTableComponent(abastecimentoService) {
        this.abastecimentoService = abastecimentoService;
    }
    AbastecimentoTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.abastecimentoService.getAbastecimentos()
            .subscribe(function (abastecimentos) { return _this.abastecimentos = abastecimentos; });
    };
    AbastecimentoTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'abastecimento-table',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-table/abastecimento-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_service_abastecimento_service__["a" /* AbastecimentoService */]])
    ], AbastecimentoTableComponent);
    return AbastecimentoTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">abastecimento</li>\r\n    </ol>\r\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoToolsComponent; });
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

var AbastecimentoToolsComponent = (function () {
    function AbastecimentoToolsComponent() {
    }
    AbastecimentoToolsComponent.prototype.ngOnInit = function () {
    };
    AbastecimentoToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'abastecimento-tools',
            template: __webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/abastecimento/components/abastecimento-tools/abastecimento-tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbastecimentoToolsComponent);
    return AbastecimentoToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/shared/class/abastecimento.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abastecimento; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_veiculo_alocado_shared_class_veiculo_alocado__ = __webpack_require__("../../../../../src/app/layout/controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fornecedor_shared_class_fornecedor__ = __webpack_require__("../../../../../src/app/layout/fornecedor/shared/class/fornecedor.ts");


var Abastecimento = (function () {
    function Abastecimento() {
        this.fornecedor = new __WEBPACK_IMPORTED_MODULE_1__fornecedor_shared_class_fornecedor__["a" /* Fornecedor */]();
        this.veiculo_alocado = new __WEBPACK_IMPORTED_MODULE_0__controle_veiculo_veiculo_alocado_shared_class_veiculo_alocado__["a" /* VeiculoAlocado */]();
    }
    return Abastecimento;
}());



/***/ }),

/***/ "../../../../../src/app/layout/abastecimento/shared/service/abastecimento.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbastecimentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbastecimentoService = (function () {
    function AbastecimentoService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:2222/security/abastecimento";
    }
    AbastecimentoService.prototype.getAbastecimentos = function () {
        return this.http.get(this.url);
    };
    AbastecimentoService.prototype.getAbastecimento = function (id) {
        return this.http.get(this.getAbastecimentoUrl(id));
    };
    AbastecimentoService.prototype.addAbastecimento = function (abastecimento) {
        return this.http.post(this.url, JSON.stringify(abastecimento));
    };
    AbastecimentoService.prototype.updateAbastecimento = function (abastecimento) {
        return this.http.put(this.getAbastecimentoUrl(abastecimento.id), JSON.stringify(abastecimento));
    };
    AbastecimentoService.prototype.deleteAbastecimento = function (id) {
        return this.http.delete(this.getAbastecimentoUrl(id));
    };
    AbastecimentoService.prototype.getAbastecimentoUrl = function (id) {
        return this.url + "/" + id;
    };
    AbastecimentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AbastecimentoService);
    return AbastecimentoService;
}());



/***/ })

});
//# sourceMappingURL=abastecimento.module.chunk.js.map