import { DataTable } from 'primeng/datatable';
import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Tablet } from './shared/class/tablet';
import { Condutor } from '../tecnicos/condutor/shared/class/condutor';
import { CondutorService } from '../tecnicos/condutor/shared/service/condutor.service';
import { TabletService } from './shared/service/tablet.service';
import { ToasterService } from '../../toaster-service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
import { } from '@types/googlemaps';

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
  selector: 'app-tablet-raster',
  templateUrl: './tablet-raster.component.html',
  styleUrls: ['./tablet-raster.component.scss'],
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
export class TabletRasterComponent implements OnInit {

  public tecnicoArray = [
    { id: 1045 , tecnico: 'Marcos Hatano'},
    { id: 1056 , tecnico: 'Marcos Aurélio'},
    { id: 1037 , tecnico: 'Rodrigo Alvarenga'},
    { id: 1057 , tecnico: 'Vinícius Rogério Nunes'},
    { id: 1052 , tecnico: 'Cássio Venâncio Santos Souza'},
    { id: 1176 , tecnico: 'Iray Mendes Cordeiro Junior'},
    { id: 1133 , tecnico: 'Gleisson Alves Alexandre'},
    { id: 1136 , tecnico: 'Igor Gustavo Oliveira de Brito'},
    { id: 1177 , tecnico: 'Igor dos Reis Chagas'},
    { id: 1096 , tecnico: 'Lucas Dias de Souza'},
    { id: 1105 , tecnico: 'Gabriel Cardoso dos Santos'},
    { id: 1134 , tecnico: 'Rafael Douglas de Souza'},
    { id: 1182 , tecnico: 'José Manoel Bastos Neto'},
    { id: 1139 , tecnico: 'Ednei Cardoso da Cruz'},
    { id: 1144 , tecnico: 'Franlin Mikael Lima Santos'},
    { id: 1190 , tecnico: 'Vinicius Divino de Souza'},
    { id: 1148 , tecnico: 'Rodolfo Cosme Silva Rodrigues'},
    { id: 1059 , tecnico: 'Maximiano Hiroshi Urata Junior'},
    { id: 1103 , tecnico: 'Alan Davyd Cunha'},
    { id: 1102 , tecnico: 'Anderson Alves da Silva'}
  ];
  
  public hora = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
  patrocinio: { lat: -18.940117, lng: -46.9909037 };
  zoom: number = 17;
  tabletIcon = "assets/imagens/ServicoPinIcon.png";
  status: number = 1;
  mapa: any;

  trafficStatus: boolean = false;

  tabletList: Tablet[] = [];
  tecnicoList: Condutor[] = [];

  mostraTabela: boolean = false;
  mostraBuscaVeiculo: boolean = false;
  mostraBuscaCondutor: boolean = false;
  showMapConfig: boolean = false;

  constructor(
    private condutorService: CondutorService,
    private tabletService: TabletService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {

    $('html, body').animate({ scrollTop: 0 });

    setTimeout(() => {


      this.iniciarMapa();

    }, 1000);

    $(document).ready( function () {
      $('#tabelaTablet').DataTable({
        select: true
      });
  } );

  }

    


  //======================== Botões ======================
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
  //====================================================

  iniciarMapa() {

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
      map.setOptions({ styles: styles[$("#style-selector").val()] });
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

    if($('#trafficOn').prop("checked")){
      trafficLayer.setMap(map);
    } else {
      trafficLayer.setMap(null);
    }

    if($('#transitOn').prop("checked")){
      transitLayer.setMap(map);
    } else {
      transitLayer.setMap(null);
    }
    
    //===============================================================

    document.getElementById('submit').addEventListener('click', function(){
      if($("#address").val() == ""){
        alert("Por favor insere um endereço");
      } else {
        geocodeAddress(geocoder, map);
      }
    });

    function geocodeAddress(geocoder, resultMap){
      var address = $("#address").val();
      geocoder.geocode({ 'address': address }, function(results, status){
        if(status == 'OK'){
          resultMap.setCenter(results[0].geometry.location);
        } else {
          alert("Não há nenhum local com o nome informado");
        }
      });
    }

    var infoWindow = new google.maps.InfoWindow;

    this.tabletService.getTecnicosHoje()
    .subscribe(data => this.tabletList = data);

    setTimeout(() => {
      
    this.tabletList.forEach(tablet => {
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(tablet.latitude, tablet.longitude),
          map: map,
          animation: google.maps.Animation.BOUNCE,
          icon: this.tabletIcon
      });

      this.criarMapa(marker, tablet, infoWindow, map);
    });
    }, 1000);
    

    
    
  }
  
  criarMapa(marker, tablet, infoWindow, map){
    google.maps.event.addDomListener(marker, 'click', (function(marker,tablet){
      
      return function (){
        
          console.log("Latitude: "+tablet.latitude);
          console.log("Longitude: "+tablet.longitude);

          $("#localization").val(tablet.latitude+","+tablet.longitude);

        infoWindow.setContent(

          '<div id="iw-container" style="background-color:#f4f4f4; border-radius: 20px; border: solid #086618 5px">' +
          '<div class="iw-title" style="background-color:#086618; padding: 5px; color:white; border-top-left-radius: 10px; border-top-right-radius: 10px;"><h5>Informações do Tecnico</h5></div>' +
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
          '<br>'+

          '<div style="border-left: solid 5px #1b7010;  border-radius: 5px; background-color: #c9ccc9; padding: 5px;">' +
          '<div class="iw-subTitle" style="color: black"><h6>Latitude e Longitude</h6></div>' +
          '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Latitude: </b>' + tablet.latitude + ' </div>' +
          '<div style="text-align: left; color: black;"><b style="font-weight: 900;">Longitude: </b>' + tablet.longitude + ' </div>' + 
          '</div> <br>' +


          '<br>' +
          '<div class="iw-bottom-gradient"></div>' +

          '</div>'

        );
        infoWindow.open(map, marker);
      }
      
    })(marker,tablet));

  }

  localizarEndereco(){

    if($("#localization").val() == "Seleciona um tecnico"){
      this.toasterService.Error("Por favor escolha um tecnico");
      return;
    }

    var geocoder = new google.maps.Geocoder;

    var localization = $("#localization").val();
    var latLngStr = localization.split(',', 2);
    var latLng = { lat: parseFloat(latLngStr[0]), lng: parseFloat(latLngStr[1]) };

    geocoder.geocode({ 'location': latLng }, function (results, status){
      if(results[0]){

        var formatedAndress = results[0].formatted_address;
        var andressArray = formatedAndress.split(',',4);

        $("#input1").val(andressArray[0]);
        $("#input2").val(andressArray[1]);
        $("#input3").val(andressArray[2]);
        $("#input4").val(andressArray[3]);
      }
    });

  }







}
