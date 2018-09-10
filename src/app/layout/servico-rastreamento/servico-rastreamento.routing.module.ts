import { NetmapComponent } from './netmap/netmap.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServicoRastreamentoComponent } from './servico-rastreamento.component';
import { Routes } from '@angular/router';
import { ServicoRastreamentoFormComponent } from './components/servico-rastreamento-form/servico-rastreamento-form.component';


const servicoRastreamentoRoutes: Routes = [

    { path: '', component: ServicoRastreamentoComponent },
    { path: 'form', component: ServicoRastreamentoFormComponent },
    { path: 'edit/:id', component: ServicoRastreamentoFormComponent },
    { path: 'netmap', component: NetmapComponent}

];

@NgModule({
    imports: [RouterModule.forChild(servicoRastreamentoRoutes)],
    exports: [RouterModule]
})

export class ServicoRastreamentoRoutingModule {

}