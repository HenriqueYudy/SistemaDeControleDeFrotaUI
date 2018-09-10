import { VeiculoRastreado } from './../servico-rastreamento/shared/class/veiculo-rastreado';
import { EmpregoVeiculoService } from './../controle-veiculo/emprego-veiculo/shared/service/emprego-veiculo.service';
import { EmpregoVeiculo } from './../controle-veiculo/emprego-veiculo/shared/class/emprego-veiculo';
import { Condutor } from './../tecnicos/condutor/shared/class/condutor';
import { Veiculo } from './../veiculo/shared/class/veiculo';
import { VeiculoService } from './../veiculo/shared/service/veiculo.service';
import { VeiculoAlocadoService } from './../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { CondutorService } from './../tecnicos/condutor/shared/service/condutor.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import { empty } from 'rxjs/Observer';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import { getLocaleDateTimeFormat } from '@angular/common';
import { RastreadorService } from '../rastreador/shared/service/rastreador.service';
import { Rastreador } from '../rastreador/shared/class/rastreador';
import { VeiculoRastreadoService } from '../servico-rastreamento/shared/service/veiculo-rastreado.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {


  veiculosTotal: number;
  tecnicoTotal: number;
  veiculosEmpregadosTotal: number;
  rastreadorTotal: number;
  VeiculoRastreadosTotal:number;
  
  veiculos: Veiculo[];
  condutores: Condutor[];
  empregoVeiculos: EmpregoVeiculo[];
  rastreadores: Rastreador[];
  veiculoRastreados: VeiculoRastreado[];

  

  data: any;



  constructor(
    private condutorService: CondutorService,
    private empregoVeiculoService: EmpregoVeiculoService,
    private veiculoService: VeiculoService,
    private rastreadorService: RastreadorService,
    private veiculoRastreadoService: VeiculoRastreadoService
  ) {
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
    }
  }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');


    this.veiculoService.getVeiculos()
    .subscribe(veiculos => this.veiculos = veiculos);

setTimeout(() => {
  
  var carroTotal = this.veiculos.length;
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


   

  }

}
