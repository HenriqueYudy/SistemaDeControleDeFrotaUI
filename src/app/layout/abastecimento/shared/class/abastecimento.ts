import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { Fornecedor } from "../../../fornecedor/shared/class/fornecedor";



export class Abastecimento {
    id: number;
    numero_cupom_fiscal: number;
    data_abastecimento: Date;
    hodometro: number;
    quantidade_abastecida: number;
    valor_total: number;
    fornecedor: Fornecedor = new Fornecedor();
    veiculo_alocado: VeiculoAlocado = new VeiculoAlocado();
}