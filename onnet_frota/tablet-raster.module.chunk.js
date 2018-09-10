webpackJsonp(["tablet-raster.module"],{

/***/ "../../../../../src/app/layout/tablet-raster/shared/service/tablet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabletService; });
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


var TabletService = (function () {
    function TabletService(http) {
        this.http = http;
        this.url = "http://177.85.0.23:8987/api/os/buscarTecnicos/";
        this.urlHoje = "http://177.85.0.23:8987/api/os/buscarTecnicos/map";
    }
    TabletService.prototype.getTecnicosByDays = function (dataInicial, dataFim) {
        return this.http.get(this.buscarTecnicoUrl(dataInicial, dataFim));
    };
    TabletService.prototype.getTecnicoByDays = function (dataInicial, dataFim, tecnico) {
        return this.http.get(this.buscarPorTecnicoUrl(dataInicial, dataFim, tecnico));
    };
    TabletService.prototype.getTecnicoByDaysAndEvent = function (dataInicial, dataFim, tecnico, evento) {
        return this.http.get(this.buscarPorTecnicoEventoUrl(dataInicial, dataFim, tecnico, evento));
    };
    TabletService.prototype.getTecnicosByDaysAndEvent = function (dataInicial, dataFim, evento) {
        return this.http.get(this.buscarTecnicoPorEventoUrl(dataInicial, dataFim, evento));
    };
    TabletService.prototype.getTecnicosHoje = function () {
        return this.http.get(this.urlHoje);
    };
    TabletService.prototype.buscarTecnicoUrl = function (dataInicial, dataFim) {
        return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim;
    };
    TabletService.prototype.buscarPorTecnicoUrl = function (dataInicial, dataFim, tecnico) {
        return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "tecnico=" + tecnico;
    };
    TabletService.prototype.buscarPorTecnicoEventoUrl = function (dataInicial, dataFim, tecnico, evento) {
        return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "tecnico=" + tecnico + "/" + "evento=" + evento;
    };
    TabletService.prototype.buscarTecnicoPorEventoUrl = function (dataInicial, dataFim, evento) {
        return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "evento=" + evento;
    };
    TabletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TabletService);
    return TabletService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tablet-raster/tablet-raster.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\n\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        <h2>\n          <font color=\"white\">Rastreamento Tablet</font>\n        </h2>\n        <div class=\"row\">\n\n          <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Procurar por...\" id=\"address\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary\" type=\"button\" id=\"submit\">\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </span>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-4 col-4 col-lg-4 col-xl-4\">\n            <div class=\"input-group\">\n              <select id=\"localization\" class=\"form-control\">\n                <option selected>Selecione um tecnico</option>\n                <option *ngFor=\"let tecnico of tecnicoList\" value=\"{{tecnico.id}}\" >{{tecnico.tecnico}}</option>\n              </select>\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-info\" type=\"button\" id=\"localizationBtn\" data-toggle=\"modal\" data-target=\"#localizationModal\" (click)=\"localizarEndereco()\">\n                  <i class=\"fas fa-street-view\"></i>\n                </button>\n              </span>\n            </div>\n          </div>\n\n          <button type=\"btn\" id=\"atualizarBtn\" class=\"btn btn-warning\" (click)=\"iniciarMapa()\" title=\"Mostrar todos os veiculos\">Atualizar mapa\n            <i class=\"fas fa-sync-alt\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n\n      </div>\n      <div class=\"card-body\">\n        <div id=\"map\"></div>\n      </div>\n      <div class=\"card-footer text-muted\">\n        <div class=\"row\">\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\n            <button type=\"btn\" id=\"tabelasBtn\" (click)=\"mostrarTabelaAction()\" class=\"btn btn-primary\" title=\"Tabelas\">\n              <i class=\"fas fa-table\"></i>\n            </button>\n          </div>\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\n            <button type=\"btn\" id=\"buscarVeiculoBtn\" class=\"btn btn-primary\" (click)=\"mostrarBuscaVeiculo()\" title=\"Buscar por veiculo\">\n              <i class=\"fas fa-car\">\n                <sup>\n                  <i class=\"fas fa-search\"></i>\n                </sup>\n              </i>\n            </button>\n          </div>\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\n            <button type=\"btn\" id=\"buscarTecnicoBtn\" class=\"btn btn-primary\" (click)=\"mostrarBuscaCondutor()\" title=\"buscar por tecnico\">\n              <i class=\"fas fa-user-tag\"></i>\n            </button>\n          </div>\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\n            <button type=\"btn\" id=\"visualizarBtn\" class=\"btn btn-primary\" title=\"Visualizar\">\n              <i class=\"far fa-eye\"></i>\n            </button>\n          </div>\n          <div class=\"col-6 col-md-1 col-lg-1 col-xl-1\">\n            <button type=\"btn\" id=\"mapaConfigBtn\" class=\"btn btn-primary\" title=\"Configurar o mapa\" (click)=\"mostrarMapConfig()\">\n              <i class=\"fas fa-map-marked-alt\">\n                <sup>\n                  <i class=\"fa fa-cog\"></i>\n                </sup>\n              </i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Tabelas de veiculos sendo rastreado -->\n<div class=\"tabelas\" *ngIf=\"mostraTabela\" [@enterAnimation]>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\n      <table class=\"table table-hover table-responsive\">\n        <thead class=\"thead\">\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Veiculo: Modelo</th>\n            <th scope=\"col\">Veiculo: Placa</th>\n            <th scope=\"col\">Veiculo: Frota </th>\n            <th scope=\"col\">Condutor</th>\n            <th scope=\"col\">Categoria</th>\n            <th scope=\"col\">Vencimento CNH</th>\n            <th scope=\"col\">rastreador: Imei</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let carInfo of pontoCoord\">\n            <td>{{carInfo.id}}</td>\n            <td>{{carInfo.veiculoAlocado.veiculo.modelo.nome}}</td>\n            <td>{{carInfo.veiculoAlocado.veiculo.placa}}</td>\n            <td>{{carInfo.veiculoAlocado.frota.nome}}</td>\n            <td>{{carInfo.veiculoAlocado.condutor.nome}}</td>\n            <td>{{carInfo.veiculoAlocado.condutor.categoria}}</td>\n            <td>{{carInfo.veiculoAlocado.condutor.vencimento_cnh}}</td>\n            <td>{{carInfo.rastreador.imei}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<!-- fim da tabela de veiculos  -->\n\n<!-- Formulario para procurar por veiculo -->\n\n<div class=\"findByVeiculo\" *ngIf=\"mostraBuscaVeiculo\" [@enterAnimation]>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\n\n      <div class=\"card\" id=\"card-veiculo\">\n        <div class=\"card-header\">\n          Buscar um veiculo\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Formulario de busca</h5>\n          <br>\n          <label for=\"veiculoRastreado\">\n            <font color=\"black\">Veiculo Rastreado</font>\n          </label>\n          <div class=\"input-group mb-2\">\n            <select id=\"veiculoR\" class=\"form-control\">\n              <option selected>Selecione um veiculo</option>\n              <option *ngFor=\"let veiculoR of veiculosRastreados\" value=\"{{veiculoR.rastreador.imei}}\">{{veiculoR.veiculo_alocado.veiculo.placa}}| Frota: {{veiculoR.veiculo_alocado.frota.nome}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n\n              <label for=\"data\">Data</label>\n              <input type=\"date\" class=\"form-control\" id=\"dataV\">\n\n            </div>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <label for=\"hora_inicial\">\n                <font color=\"black\">Hora Inicial</font>\n              </label>\n              <div class=\"input-group mb-1\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </div>\n                </div>\n                <input [textMask]=\"{mask: hora}\" id=\"horaInicial\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <label for=\"hora_inicial\">\n                <font color=\"black\">Hora Final</font>\n              </label>\n              <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </div>\n                </div>\n                <input [textMask]=\"{mask: hora}\" id=\"horaFinal\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\n              </div>\n            </div>\n          </div>\n\n          <br>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <button type=\"btn\" id=\"buscarPosicaoBtn\" class=\"btn btn-primary\" (click)=\"buscarPosicao()\">\n                Buscar posição atual\n                <i class=\"fas fa-map-marked\"></i>\n              </button>\n            </div>\n\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <button type=\"btn\" id=\"buscarRotaBtn\" class=\"btn btn-primary\" (click)=\"buscarRota()\">\n                Buscar rota do veiculo\n                <i class=\"fas fa-road\"></i>\n              </button>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- fim do menu buscar veiculos -->\n\n<!-- Inicio do menu buscar condutor -->\n\n<div class=\"findByCondutor\" *ngIf=\"mostraBuscaCondutor\" [@enterAnimation]>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\n\n      <div class=\"card\" id=\"card-veiculo\">\n        <div class=\"card-header\">\n          Buscar um condutor\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Formulario de busca</h5>\n          <br>\n          <label for=\"veiculoRastreado\">\n            <font color=\"black\">Condutor</font>\n          </label>\n          <div class=\"input-group mb-2\">\n            <select id=\"condutorR\" class=\"form-control\">\n              <option selected>Selecione um condutor</option>\n              <option *ngFor=\"let veiculoR of veiculosRastreados\" value=\"{{veiculoR.rastreador.imei}}\">{{veiculoR.veiculo_alocado.condutor.nome}}</option>\n            </select>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n\n              <label for=\"data\">Data</label>\n              <input type=\"date\" class=\"form-control\" id=\"dataCondutor\">\n\n            </div>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <label for=\"hora_inicial\">\n                <font color=\"black\">Hora Inicial</font>\n              </label>\n              <div class=\"input-group mb-1\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </div>\n                </div>\n                <input [textMask]=\"{mask: hora}\" id=\"horaInicialCondutor\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <label for=\"hora_inicial\">\n                <font color=\"black\">Hora Final</font>\n              </label>\n              <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </div>\n                </div>\n                <input [textMask]=\"{mask: hora}\" id=\"horaFinalCondutor\" type=\"text\" class=\"form-control\" placeholder=\"--:--:--\">\n              </div>\n            </div>\n          </div>\n\n          <br>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <button type=\"btn\" id=\"buscarPosicaoBtn\" class=\"btn btn-primary\" (click)=\"buscarPosicaoCondutor()\">\n                Buscar posição atual\n                <i class=\"fas fa-map-marked\"></i>\n              </button>\n            </div>\n\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <button type=\"btn\" id=\"buscarRotaBtn\" class=\"btn btn-primary\" (click)=\"buscarRotaCondutor()\">\n                Buscar rota do veiculo\n                <i class=\"fas fa-road\"></i>\n              </button>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- Fim do menu do busca do condutor -->\n\n<!-- Inicio da opção do mapas -->\n\n<div class=\"mapOption\" style=\"display: none;\" id=\"menuMapa\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-lg-12 col-xl-12\">\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Configuração do Mapa\n        </div>\n        <div class=\"card-body\" id=\"optionCard\">\n\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-4 col-xl-4\">\n              <div id=\"style-selector-control\" class=\"map-control\">\n                <label for=\"style-selector\">Tipo de mapa</label>\n                <select id=\"style-selector\" class=\"selector-control\" class=\"form-control\">\n                  <option value=\"defauldt\" selected=\"selected\">Default</option>\n                  <option value=\"silver\">Silver</option>\n                  <option value=\"night\">Night mode</option>\n                  <option value=\"retro\">Retro</option>\n                  <option value=\"hiding\">Hide features</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <br>\n\n          <div class=\"row\">\n            <div class=\"col-3 col-md-3 col-lg-3 col-xl-3\">\n              <label for=\"trafficSwitch\">Camada de Tráfego</label>\n              <div class=\"switch\" id=\"trafficSwitch\">\n                <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"trafficOn\" id=\"trafficOn\">\n                <label for=\"trafficOn\" class=\"switch-label switch-label-off\">ON</label>\n                <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"trafficOff\" id=\"trafficOff\" checked>\n                <label for=\"trafficOff\" class=\"switch-label switch-label-on\">OFF</label>\n                <span class=\"switch-selection\"></span>\n              </div>\n            </div>\n\n            <div class=\"col-3 col-md-3 col-lg-3 col-xl-3\">\n              <label for=\"trafficSwitch\">Camada de Trânsito</label>\n              <div class=\"switch\" id=\"trafficSwitch\">\n                <input type=\"radio\" class=\"switch-input\" name=\"transit\" value=\"transitOn\" id=\"transitOn\">\n                <label for=\"transitOn\" class=\"switch-label switch-label-off\">ON</label>\n                <input type=\"radio\" class=\"switch-input\" name=\"transit\" value=\"transitOff\" id=\"transitOff\" checked>\n                <label for=\"transitOff\" class=\"switch-label switch-label-on\">OFF</label>\n                <span class=\"switch-selection\"></span>\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Fim da opção do mapas -->\n\n\n<!-- Modals -->\n\n<div class=\"modal fade\" id=\"localizationModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\"> Informação do endereço </h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-7\">\n            <label for=\"input1\">Rua - Av.: </label>\n            <input type=\"text\" readonly class=\"form-control\" id=\"input1\" />\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-7\">\n            <label for=\"input2\">Número - Bairro: </label>\n            <input type=\"text\" readonly class=\"form-control\" id=\"input2\" />\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-7\">\n            <label for=\"input3\">Cidade - Estado: </label>\n            <input type=\"text\" readonly class=\"form-control\" id=\"input3\" />\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-7\">\n            <label for=\"input4\">Cep: </label>\n            <input type=\"text\" readonly class=\"form-control\" id=\"input4\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save change</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/tablet-raster/tablet-raster.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tabelasBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarPosicaoBtn {\n  width: 200px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarRotaBtn {\n  width: 200px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarVeiculoBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#buscarTecnicoBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#visualizarBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#mapaConfigBtn {\n  width: 80px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#atualizarBtn {\n  width: 150px;\n  padding: 5px;\n  border-radius: 50px; }\n\n#card-veiculo {\n  padding: 10px; }\n\n.card-body {\n  padding: 0px;\n  margin: 0px; }\n\n#map {\n  height: 600px;\n  width: 100%;\n  padding: 0px;\n  margin: 0px; }\n\n#btnCoord {\n  width: 100%; }\n\n#submit {\n  width: 80px;\n  padding: 5px; }\n\n#address {\n  height: 35px; }\n\n#localization {\n  height: 35px; }\n\n.table {\n  max-height: 500px;\n  overflow: scroll; }\n\n.card-footer {\n  padding: 5px;\n  background-color: #898b89;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.btn-toolbar {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.card {\n  border: solid 2px grey;\n  padding: 0px;\n  margin: 0px; }\n\n.card-header {\n  padding: 5px;\n  background-color: #898b89;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.card-map {\n  padding: 0px;\n  margin: 0px;\n  border: solid 10px #3f7dda; }\n\n.card-menu {\n  background-color: #d5d2d2;\n  padding: 10px;\n  border-radius: 10px;\n  transition-duration: .7s;\n  border: solid 1px black; }\n  .card-menu:hover {\n    background-color: #289122; }\n\n/* TABS CSS */\n* {\n  box-sizing: border-box; }\n\n.teste {\n  color: #c9ccc9;\n  text-align: left;\n  font-size: 120mm;\n  font-variant: small-caps;\n  font-weight: 900; }\n\n.thead {\n  background-color: #999; }\n\n.colors {\n  text-align: center;\n  padding-top: 20px; }\n  .colors > li {\n    list-style: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.1);\n    display: inline-block;\n    margin: 0 10px;\n    cursor: pointer;\n    transition-duration: .2s;\n    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2); }\n    .colors > li:hover {\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2);\n      border-bottom: 10px solid rgba(0, 0, 0, 0.15);\n      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); }\n    .colors > li.active-color {\n      -webkit-transform: scale(1.2) translateY(-10px);\n      transform: scale(1.2) translateY(-10px);\n      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);\n      border-bottom: 20px solid rgba(0, 0, 0, 0.15); }\n    .colors > li:nth-child(1) {\n      background-color: #2ecc71; }\n    .colors > li:nth-child(2) {\n      background-color: #D64A4B; }\n    .colors > li:nth-child(3) {\n      background-color: #8e44ad; }\n    .colors > li:nth-child(4) {\n      background-color: #46a1de; }\n    .colors > li:nth-child(5) {\n      background-color: #bdc3c7; }\n\n#optionCard {\n  padding: 10px; }\n\n.switch {\n  position: relative;\n  height: 26px;\n  width: 120px;\n  margin: 20px auto;\n  background: rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1); }\n\n.switch-label {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 58px;\n  line-height: 26px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);\n  cursor: pointer; }\n\n.switch-label:active {\n  font-weight: bold; }\n\n.switch-label-off {\n  padding-left: 2px; }\n\n.switch-label-on {\n  padding-right: 2px; }\n\n.switch-input {\n  display: none; }\n\n.switch-input:checked + .switch-label {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.65);\n  text-shadow: 0 1px rgba(255, 255, 255, 0.25);\n  transition: 0.15s ease-out;\n  transition-property: color, text-shadow; }\n\n.switch-input:checked + .switch-label-on ~ .switch-selection {\n  left: 60px;\n  /* Note: left: 50%; doesn't transition in WebKit */ }\n\n.switch-selection {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  left: 2px;\n  display: block;\n  width: 58px;\n  height: 22px;\n  border-radius: 3px;\n  background-color: #65bd63;\n  background-image: linear-gradient(top, #9dd993, #65bd63);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);\n  transition: left 0.15s ease-out; }\n\n.switch-blue .switch-selection {\n  background-color: #3aa2d0;\n  background-image: linear-gradient(top, #4fc9ee, #3aa2d0); }\n\n.switch-yellow .switch-selection {\n  background-color: #c4bb61;\n  background-image: linear-gradient(top, #e0dd94, #c4bb61); }\n\n.modal-header {\n  background-color: #17a2b8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/tablet-raster/tablet-raster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabletRasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tecnicos_condutor_shared_service_condutor_service__ = __webpack_require__("../../../../../src/app/layout/tecnicos/condutor/shared/service/condutor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_tablet_service__ = __webpack_require__("../../../../../src/app/layout/tablet-raster/shared/service/tablet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
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
var tecnicoList = [
    { id: 1045, tecnico: 'Marcos Hatano' },
    { id: 1056, tecnico: 'Marcos Aurélio' },
    { id: 1037, tecnico: 'Rodrigo Alvarenga' },
    { id: 1057, tecnico: 'Vinícius Rogério Nunes' },
    { id: 1052, tecnico: 'Cássio Venâncio Santos Souza' },
    { id: 1176, tecnico: 'Iray Mendes Cordeiro Junior' },
    { id: 1133, tecnico: 'Gleisson Alves Alexandre' },
    { id: 1136, tecnico: 'Igor Gustavo Oliveira de Brito' },
    { id: 1177, tecnico: 'Igor dos Reis Chagas' },
    { id: 1096, tecnico: 'Lucas Dias de Souza' },
    { id: 1105, tecnico: 'Gabriel Cardoso dos Santos' },
    { id: 1134, tecnico: 'Rafael Douglas de Souza' },
    { id: 1182, tecnico: 'José Manoel Bastos Neto' },
    { id: 1139, tecnico: 'Ednei Cardoso da Cruz' },
    { id: 1144, tecnico: 'Franlin Mikael Lima Santos' },
    { id: 1190, tecnico: 'Vinicius Divino de Souza' },
    { id: 1148, tecnico: 'Rodolfo Cosme Silva Rodrigues' },
    { id: 1059, tecnico: 'Maximiano Hiroshi Urata Junior' },
    { id: 1103, tecnico: 'Alan Davyd Cunha' },
    { id: 1102, tecnico: 'Anderson Alves da Silva' }
];
var TabletRasterComponent = (function () {
    function TabletRasterComponent(condutorService, tabletService, toasterService) {
        this.condutorService = condutorService;
        this.tabletService = tabletService;
        this.toasterService = toasterService;
        this.hora = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
        this.zoom = 17;
        this.tabletIcon = "assets/imagens/ServicoPinIcon.png";
        this.status = 1;
        this.trafficStatus = false;
        this.tabletList = [];
        this.tecnicoList = [];
        this.mostraTabela = false;
        this.mostraBuscaVeiculo = false;
        this.mostraBuscaCondutor = false;
        this.showMapConfig = false;
    }
    TabletRasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('html, body').animate({ scrollTop: 0 });
        setTimeout(function () {
            _this.iniciarMapa();
        }, 1000);
    };
    //======================== Botões ======================
    TabletRasterComponent.prototype.mostrarTabelaAction = function () {
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
    TabletRasterComponent.prototype.mostrarBuscaVeiculo = function () {
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
    TabletRasterComponent.prototype.mostrarBuscaCondutor = function () {
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
    TabletRasterComponent.prototype.mostrarMapConfig = function () {
        if (this.showMapConfig == true) {
            this.showMapConfig = false;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#menuMapa').fadeOut();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#menuMapa').fadeIn();
            this.showMapConfig = true;
            this.mostraBuscaCondutor = false;
            this.mostraBuscaVeiculo = false;
            this.mostraTabela = false;
        }
    };
    //====================================================
    TabletRasterComponent.prototype.iniciarMapa = function () {
        var _this = this;
        var option = {
            zoom: 11,
            center: { lat: -18.940117, lng: -46.9909037 },
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById('map'), option);
        var geocoder = new google.maps.Geocoder();
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_5_jquery__('#style-selector').val()] });
        var botaoAtualizar = document.getElementById('atualizarBtn');
        styleSelector.addEventListener('change', function () {
            map.setOptions({ styles: styles[__WEBPACK_IMPORTED_MODULE_5_jquery__("#style-selector").val()] });
        });
        var trafficSwitchOn = document.getElementById('trafficOn');
        var trafficSwitchOff = document.getElementById('trafficOff');
        var transitSwitchOn = document.getElementById('transitOn');
        var transitSwitchOff = document.getElementById('transitOff');
        var trafficLayer = new google.maps.TrafficLayer();
        var transitLayer = new google.maps.TransitLayer();
        //======================= Event Listener ========================
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
        //===============================================================
        //====================== MAP CONFIG STATUS ======================
        if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#trafficOn').prop("checked")) {
            trafficLayer.setMap(map);
        }
        else {
            trafficLayer.setMap(null);
        }
        if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#transitOn').prop("checked")) {
            transitLayer.setMap(map);
        }
        else {
            transitLayer.setMap(null);
        }
        //===============================================================
        document.getElementById('submit').addEventListener('click', function () {
            if (__WEBPACK_IMPORTED_MODULE_5_jquery__("#address").val() == "") {
                alert("Por favor insere um endereço");
            }
            else {
                geocodeAddress(geocoder, map);
            }
        });
        function geocodeAddress(geocoder, resultMap) {
            var address = __WEBPACK_IMPORTED_MODULE_5_jquery__("#address").val();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    resultMap.setCenter(results[0].geometry.location);
                }
                else {
                    alert("Não há nenhum local com o nome informado");
                }
            });
        }
        var infoWindow = new google.maps.InfoWindow;
        this.tabletService.getTecnicosHoje()
            .subscribe(function (data) { return _this.tabletList = data; });
        setTimeout(function () {
            _this.tabletList.forEach(function (tablet) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(tablet.latitude, tablet.longitude),
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    icon: _this.tabletIcon
                });
                _this.criarMapa(marker, tablet, infoWindow, map);
            });
        }, 1000);
    };
    TabletRasterComponent.prototype.criarMapa = function (marker, tablet, infoWindow, map) {
        google.maps.event.addDomListener(marker, 'click', (function (marker, tablet) {
            return function () {
                infoWindow.setContent('<div id="iw-container" style="background-color:#f4f4f4; border-radius: 20px; border: solid #086618 5px">' +
                    '<div class="iw-title" style="background-color:#086618; padding: 5px; color:white; border-top-left-radius: 10px; border-top-right-radius: 10px;"><h5>Informações do Veiculo</h5></div>' +
                    '<div id="conteudo" class="iw-content" style="padding: 10px;">' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Dados da OS</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Código da OS:</b> ' + tablet.id + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Tecnico:</b> ' + tablet.nome + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Data de Registro: </b>' + tablet.dataRegistro + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Hora de Registro: </b>' + tablet.horaRegistro + ' </div>' +
                    '<div style="text-align: left; color: black;"> </div>' +
                    '</div> <br>' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Descrição da OS</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Evento:  </b>' + tablet.evento + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Descricção do evento: </b>' + tablet.descricao + '</div>' +
                    '</div>' +
                    '<br>' +
                    '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
                    '<div class="iw-subTitle" style="color: black"><h6>Latitude e Longitude</h6></div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Latitude: </b>' + tablet.latitude + ' </div>' +
                    '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Longitude: </b>' + tablet.longitude + ' </div>' +
                    '</div> <br>' +
                    '<br>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>');
                infoWindow.open(map, marker);
            };
        })(marker, tablet));
    };
    TabletRasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-tablet-raster',
            template: __webpack_require__("../../../../../src/app/layout/tablet-raster/tablet-raster.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/tablet-raster/tablet-raster.component.scss")],
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tecnicos_condutor_shared_service_condutor_service__["a" /* CondutorService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_tablet_service__["a" /* TabletService */],
            __WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]])
    ], TabletRasterComponent);
    return TabletRasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tablet-raster/tablet-raster.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabletRasterModule", function() { return TabletRasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablet_raster_component__ = __webpack_require__("../../../../../src/app/layout/tablet-raster/tablet-raster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_tablet_service__ = __webpack_require__("../../../../../src/app/layout/tablet-raster/shared/service/tablet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toaster_service__ = __webpack_require__("../../../../../src/app/toaster-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tablet_raster_routing_module__ = __webpack_require__("../../../../../src/app/layout/tablet-raster/tablet-raster.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TabletRasterModule = (function () {
    function TabletRasterModule() {
    }
    TabletRasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDW_0Bcxp3EbaP7dhdUAv_7gHKPf0_jNG4'
                }),
                __WEBPACK_IMPORTED_MODULE_6__tablet_raster_routing_module__["a" /* TabletRasterRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tablet_raster_component__["a" /* TabletRasterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_service_tablet_service__["a" /* TabletService */],
                __WEBPACK_IMPORTED_MODULE_5__toaster_service__["a" /* ToasterService */]
            ]
        })
    ], TabletRasterModule);
    return TabletRasterModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tablet-raster/tablet-raster.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabletRasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tablet_raster_component__ = __webpack_require__("../../../../../src/app/layout/tablet-raster/tablet-raster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var tabletRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__tablet_raster_component__["a" /* TabletRasterComponent */] }
];
var TabletRasterRoutingModule = (function () {
    function TabletRasterRoutingModule() {
    }
    TabletRasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(tabletRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
        })
    ], TabletRasterRoutingModule);
    return TabletRasterRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=tablet-raster.module.chunk.js.map