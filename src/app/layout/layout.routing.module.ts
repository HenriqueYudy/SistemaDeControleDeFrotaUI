import { AuthGuard } from './../shared/guard/auth-guard';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const layoutRoutes: Routes = [
    {path: '', component: LayoutComponent, canActivate:[AuthGuard], children: [
        {path: 'abastecimentos', loadChildren: './abastecimento/abastecimento.module#AbastecimentoModule'},
        {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
        {path: 'veiculos', loadChildren: './veiculo/veiculo.module#VeiculoModule'},
        {path: 'tecnicos', loadChildren: './tecnicos/tecnicos.module#TecnicosModule'},
        {path: 'fornecedor', loadChildren: './fornecedor/fornecedor.module#FornecedorModule'},
        {path: 'frotas', loadChildren: './frota/frota.module#FrotaModule'},
        {path: 'manutencao', loadChildren: './manutencao/manutencao.module#ManutencaoModule'},
        {path: 'rastreadores', loadChildren: './rastreador/rastreador.module#RastreadorModule'},
        {path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule'},
        {path: 'servicoRastreamento', loadChildren: './servico-rastreamento/servico-rastreamento.module#ServicoRastreamentoModule'},
        {path: 'controleVeiculo', loadChildren: './controle-veiculo/controle-veiculo.module#ControleVeiculoModule'},
        {path: 'produtoServicos', loadChildren: './produto-servico/produto-servico.module#ProdutoServicoModule'},
        {path: 'itemManutencao', loadChildren: './item-manutencao/item-manutencao.module#ItemManutencaoModule'},
        {path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule'},
        {path: 'tabletMap', loadChildren: './tablet-raster/tablet-raster.module#TabletRasterModule'}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(layoutRoutes)],
    exports: [RouterModule]
})
export class layoutRoutingModule {
}
 