import { Veiculo } from "../../../../veiculo/shared/class/veiculo";
import { Frota } from "../../../../frota/shared/class/frota";
import { Condutor } from "../../../../tecnicos/condutor/shared/class/condutor";


export class VeiculoAlocado{
    id: number;
    data_inicio: Date;
    data_termino: Date;
    veiculo: Veiculo = new Veiculo();
    frota: Frota = new Frota();
    condutor: Condutor = new Condutor();
}