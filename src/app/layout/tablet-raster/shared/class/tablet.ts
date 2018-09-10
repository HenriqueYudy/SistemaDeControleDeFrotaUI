import { Time } from "@angular/common";

export class Tablet{
    id: number;
    nome: string;
    dataRegistro: string;
    horaRegistro: Time;
    latitude: number;
    longitude: number;
    evento: string;
    descricao: string;
}