import { Condutor } from './../../../../tecnicos/condutor/shared/class/condutor';
import { VeiculoAlocado } from './../../../veiculo-alocado/shared/class/veiculo-alocado';
import { Time } from '@angular/common';


export class EmpregoVeiculo {
    id: number;
    data_utilizacao: Date;
    hodometro: number;
    data_saida: Date;
    hora_saida: Time;
    data_chegada: Date;
    hora_chegada: Time;
    motivo_utilizacao: String;
    veiculo_alocado: VeiculoAlocado = new VeiculoAlocado();
    condutor: Condutor = new Condutor();
}   