import { Rastreador } from './../../../shared/class/rastreador';



export class Coordenada {
    id: number;
    latitude: number;
    longitude: number;
    velocidade: number;
    hora_coordenada: Date;
    data_coordenada: Date;
    data_hora_servidor: Date;
    rastreador: Rastreador = new Rastreador();
}