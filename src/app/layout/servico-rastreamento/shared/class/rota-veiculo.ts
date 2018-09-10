import { Time } from '@angular/common';
import { Rastreador } from "../../../rastreador/shared/class/rastreador";
import { VeiculoAlocado } from "../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado";

export class RotaVeiculo{

    id: number;
    veiculoAlocado: VeiculoAlocado = new VeiculoAlocado();
    rastreador: Rastreador = new Rastreador();
    latitude: number;
    longitude: number;
    velocidade: number;
    horaCoordenada: Time; 
    dataCoordenada: Date;
}