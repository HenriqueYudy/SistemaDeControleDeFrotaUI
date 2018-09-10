import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { Rastreador } from "../../../rastreador/shared/class/rastreador";



export class VeiculoRastreado {
    id: number;
    data_inicio: Date;
    data_termino: Date;
    rastreador: Rastreador = new Rastreador();
    veiculoAlocado: VeiculoAlocado = new VeiculoAlocado();
}