import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { Fornecedor } from './../../../fornecedor/shared/class/fornecedor';
import { Classificacao } from './../../classificacao/shared/class/classificacao';


export class Manutencao {
    id: number;
    descricao_manutencao: string;
    data_manutencao: Date;
    classificacao: Classificacao = new Classificacao();
    fornecedor: Fornecedor = new Fornecedor();
    veiculo_alocado: VeiculoAlocado = new VeiculoAlocado();
}