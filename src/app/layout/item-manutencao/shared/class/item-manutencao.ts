import { ProdutoServico } from './../../../produto-servico/shared/class/produto-servico';
import { Manutencao } from './../../../manutencao/shared/class/manutencao';




export class ItemManutencao {
    id: number;
    manutencao: Manutencao = new Manutencao();
    produto_servico: ProdutoServico = new ProdutoServico();
    quantidade: number;
    valor_unitario: number;
}