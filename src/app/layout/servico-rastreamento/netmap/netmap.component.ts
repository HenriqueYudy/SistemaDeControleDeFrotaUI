import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';
import * as $ from 'jquery';
import { Coordenada } from '../../rastreador/coordenada/shared/class/coordenada';
import { RotaVeiculo } from '../shared/class/rota-veiculo';
import { ToasterService } from './../../../toaster-service';
import { CoordenadaService } from './../../rastreador/coordenada/shared/service/coordenada.service';
import { PontoCoord } from './../shared/class/veiculo-coordenada';
import { VeiculoRastreado } from './../shared/class/veiculo-rastreado';
import { VeiculoRastreadoService } from './../shared/service/veiculo-rastreado.service';

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

@Component({
  selector: 'app-netmap',
  templateUrl: './netmap.component.html',
  styleUrls: ['./netmap.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('1000ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class NetmapComponent implements OnInit {

  latitude: number = -18.940117;
  longitude: number = -46.9909037;
  patrocinio: { lat: -18.940117, lng: -46.9909037 }
  zoom: number = 11;
  carIcon = "assets/imagens/frotapin.png";
  status: number = 1;
  cont: number = 0;
  ultimaPosicao: number;

  mapa: any;

  mostraTabela: boolean = false;
  mostraBuscaVeiculo: boolean = false;
  mostraBuscaCondutor: boolean = false;
  showMapConfig: boolean = false;

  trafficStatus: boolean = false;

  coordenadas: Coordenada[] = [];
  carInfo: VeiculoRastreado[];
  pontoCoord: PontoCoord[];
  veiculosRastreados: VeiculoRastreado[] = [];

  rotas: RotaVeiculo[];
  posicaoAtual: RotaVeiculo;


  public hora = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];

  constructor(
    private veiculoRastreadoService: VeiculoRastreadoService,
    private coordenadaService: CoordenadaService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {

    $('html, body').animate({ scrollTop: 0 }, 'slow');


    this.veiculoRastreadoService.getVeiculoRastreados()
      .subscribe(data => this.veiculosRastreados = data);



    this.initMapRaster();

    $(document).ready(function () {
      function toggleSwitch() {
        $('.switch').click(function () {
          $(this).toggleClass('active');
        });
      }
      toggleSwitch();
    });

  }


  //--------------------Ações do botoes do mapa-------------------

  mostrarTabelaAction() {
    if (this.mostraTabela == true) {
      this.mostraTabela = false;
    } else {
      this.mostraTabela = true;
      this.mostraBuscaVeiculo = false;
      this.mostraBuscaCondutor = false;
      this.showMapConfig = false;

    }
  }

  mostrarBuscaVeiculo() {
    if (this.mostraBuscaVeiculo == true) {
      this.mostraBuscaVeiculo = false;
    } else {
      this.mostraBuscaVeiculo = true;
      this.mostraTabela = false;
      this.mostraBuscaCondutor = false;
      this.showMapConfig = false;

    }
  }

  mostrarBuscaCondutor() {
    if (this.mostraBuscaCondutor == true) {
      this.mostraBuscaCondutor = false;
    } else {
      this.mostraBuscaCondutor = true;
      this.mostraBuscaVeiculo = false;
      this.mostraTabela = false;
      this.showMapConfig = false;
    }
  }

  mostrarMapConfig() {
    if (this.showMapConfig == true) {
      this.showMapConfig = false;
      $('#menuMapa').fadeOut();
    } else {
      $('#menuMapa').fadeIn();
      this.showMapConfig = true;
      this.mostraBuscaCondutor = false;
      this.mostraBuscaVeiculo = false;
      this.mostraTabela = false;
    }
  }

  //-----------------------------------------------------

  //-----------------------LAYERS-------------------------


  //------------------------------------------------------

  buscarPosicao() {
    if ($("#veiculoR").val() == "Selecione um veiculo") {
      this.toasterService.Error("Selecione um veiculo !!");
      return;
    } else {
      var imei = $("#veiculoR").val();
      this.veiculoRastreadoService.getVeiculoPosicao(imei)
        .subscribe(data => this.posicaoAtual = data);

      setTimeout(() => {
        this.displayPosition();
      }, 1000);
    }
  }

  displayPosition() {

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
    map.setOptions({ styles: styles[$('#style-selector').val()] });


    styleSelector.addEventListener('change', function () {
      map.setOptions({ styles: styles[$('#style-selector').val()] });
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


    if ($('#trafficOn').prop("checked")) {
      trafficLayer.setMap(map);
    } else {
      trafficLayer.setMap(null);
    }

    if ($('#transitOn').prop("checked")) {
      transitLayer.setMap(map);
    } else {
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

  }

  buscarRota() {

    var imei = $("#veiculoR").val();
    var horaInicial = $("#horaInicial").val();
    var horaFinal = $("#horaFinal").val();
    var data = $("#dataV").val();

    if (imei == "Selecione um veiculo" || horaInicial == "" || horaFinal == "" || data == "") {
      this.toasterService.Error("Selecione um veiculo e insere uma data de inicio e fim para realizar a consulta");
      return;
    } else {

      this.veiculoRastreadoService.getVeiculosRoutes(imei, data, horaInicial, horaFinal)
        .subscribe(data => this.rotas = data);

      if (this.rotas == null || this.rotas == undefined) {
        this.toasterService.Info("Não há nenhum informação sobre esse veiculo. Mude as condições de busca para tentar obter mais informação");
        return;
      }

      setTimeout(() => {
        this.iniciarMapaDeRota();
      }, 1000);

    }
  }

  buscarPosicaoCondutor() {
    if ($("#condutorR").val() == "Selecione um condutor") {
      this.toasterService.Error("Selecione um condutor !!");
      return;
    } else {
      var imei = $("#condutorR").val();

      this.veiculoRastreadoService.getVeiculoPosicao(imei)
        .subscribe(data => this.posicaoAtual = data);

      setTimeout(() => {
        this.displayPosition();
      }, 1000);
    }
  }

  buscarRotaCondutor() {
    var imei = $("#condutorR").val();
    var horaInicial = $("#horaInicialCondutor").val();
    var horaFinal = $("#horaFinalCondutor").val();
    var data = $("#dataCondutor").val();

    if (imei == "Selecione um veiculo" || horaInicial == "" || horaFinal == "" || data == "") {
      this.toasterService.Error("Selecione um veiculo e insere uma data de inicio e fim para realizar a consulta");
      return;
    } else {

      this.veiculoRastreadoService.getVeiculosRoutes(imei, data, horaInicial, horaFinal)
        .subscribe(data => this.rotas = data);

      if (this.rotas == null || this.rotas == undefined) {
        this.toasterService.Info("Não há nenhuma informação sobre este condutor no momento");
        return;
      }

      setTimeout(() => {
        this.iniciarMapaDeRota();
      }, 1000);
    }
  }

  iniciarMapaDeRota() {
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

  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, alerta) {
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

    this.rotas.forEach(element => {
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
      } else {
        alerta.Error("O mapa não conseguiu renderizar a rota");
      }
    });
  }

  initMapRaster() {

    var option = {
      zoom: 11,
      center: { lat: -18.940117, lng: -46.9909037 },
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    var map = new google.maps.Map(document.getElementById('map'), option);
    var geocoder = new google.maps.Geocoder();


    var styleSelector = document.getElementById('style-selector');
    map.setOptions({ styles: styles[$('#style-selector').val()] });

    var botaoAtualizar = document.getElementById('atualizarBtn');

    styleSelector.addEventListener('change', function () {
      map.setOptions({ styles: styles[$('#style-selector').val()] });
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


    if ($('#trafficOn').prop("checked")) {
      trafficLayer.setMap(map);
    } else {
      trafficLayer.setMap(null);
    }

    if ($('#transitOn').prop("checked")) {
      transitLayer.setMap(map);
    } else {
      transitLayer.setMap(null);
    }

    // ---------------------------------------------------------


    document.getElementById('submit').addEventListener('click', function () {
      if ($("#address").val() == "") {
        alert("Por favor insere um endereço");
      } else {
        geocodeAddress(geocoder, map);
      }
    });

    function geocodeAddress(geocoder, resultsMap) {
      var address = $('#address').val();
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
          resultsMap.setCenter(results[0].geometry.location);
        } else {
          alert("Não há nenhum local com o nome informado");
        }
      });
    }

    var infoWindow = new google.maps.InfoWindow;

    this.veiculoRastreadoService.getRastreadorVeiculo()
      .subscribe(pontos => this.pontoCoord = pontos);

    if (this.pontoCoord == undefined) {
      return;
    }

    this.pontoCoord.forEach(dados => {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(dados.latitude, dados.longitude),
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: this.carIcon
      });

      this.criarMapa(marker, dados, infoWindow, map);

    });
  }

  criarMapa(marker, dados, infoWindow, map) {
    google.maps.event.addDomListener(marker, 'click', (function (marker, dados) {

      return function () {

        infoWindow.setContent(

          '<div id="iw-container" style="background-color:#f4f4f4; border-radius: 20px; border: solid #086618 5px">' +
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

          '</div>'
        );


        infoWindow.open(map, marker);
      }
    })(marker, dados));
  }

  localizarEndereco() {
    
    if ($("#localization").val() === "Selecione um veiculo") {
      this.toasterService.Error("Por favor escolha um veiculo");
      return;
    }
    var geocoder = new google.maps.Geocoder;

    var localization = $("#localization").val();
    console.log(localization);
    var latLngStr = localization.split(',', 2);
    var latLng = { lat: parseFloat(latLngStr[0]), lng: parseFloat(latLngStr[1]) };

    geocoder.geocode({ 'location': latLng }, function (results, status) {
      if (results[0]) {

        var formatedAndress = results[0].formatted_address;
        var andressArray = formatedAndress.split(",", 4);

        $("#input1").val(andressArray[0]);
        $("#input2").val(andressArray[1]);
        $("#input3").val(andressArray[2]);
        $("#input4").val(andressArray[3]);

      }
    });
  }


  procurarByImei() {
    var imei = $("#imei").val();

    this.coordenadaService.getCoordenada(imei)
      .subscribe(coordenadas => this.coordenadas = coordenadas);



    var option = {
      zoom: 15,
      center: { lat: this.latitude, lng: this.longitude }
    }

    var map = new google.maps.Map(document.getElementById('map'), option);

    var infoWindow = new google.maps.InfoWindow;

    this.coordenadas.forEach(dados => {
      console.log(dados.latitude + "," + dados.longitude);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(dados.latitude, dados.longitude),
        map: map,
        animation: google.maps.Animation.DROP,
        icon: this.carIcon
      });
      google.maps.event.addDomListener(marker, 'click', (function (marker, dados) {
        return function () {
          infoWindow.setContent(
            '<div class="carInfo">' +
            '<img src="http://www.edificiovitra.com.br/wp-content/uploads/2017/10/carro-2.jpg" width="100px" height="100px">' +
            '</div>' +
            "<h5>Veiculo: </h5>" + dados.latitude + "<br>" +
            "<h5>Modelo: " + dados.longitude + "<br>" +
            "<h5>Condutor: <h5>" + dados.velocidade + "KM/H" + "<br>"
          );
          infoWindow.open(map, marker);
        }
      })(marker, dados));

    })


  }

  rastrear() {
    var location = $("#endereco").val();
    var lat = $("#latitude").val();
    var long = $("#longitude").val();


    $.ajax({
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
      })
  }

  markerInfo() {

    this.veiculoRastreadoService.getRastreadorVeiculo()
      .subscribe(resp => this.pontoCoord = resp);

    this.pontoCoord.forEach(info => {
      console.log(this.pontoCoord);
      console.log("ID: " + info.id);
      console.log("Veiculo Alocado: " + info.veiculoAlocado.veiculo.placa);
      console.log("Rastreador: " + info.rastreador.imei);
      console.log("Latitude: " + info.latitude);
      console.log("Longitude: " + info.longitude);
      console.log("Velocidade: " + info.velocidade);
      console.log("Data Hora Registro: " + info.data_coordenada);
      console.log("Data hora Dispositivo: " + info.hora_coordenada);
    })
  }

}
