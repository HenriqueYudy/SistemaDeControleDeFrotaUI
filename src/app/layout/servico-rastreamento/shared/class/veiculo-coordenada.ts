import { VeiculoRastreado } from './veiculo-rastreado';
import { Rastreador } from './../../../rastreador/shared/class/rastreador';
import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { Time } from '@angular/common';
import { Veiculo } from '../../../veiculo/shared/class/veiculo';


export class PontoCoord{
    id: number;
    veiculoAlocado: VeiculoAlocado = new VeiculoAlocado();
    rastreador: Rastreador = new Rastreador();
    latitude: number;
    longitude: number;
    velocidade: number;
    hora_coordenada: Time; 
    data_coordenada: Date;
}