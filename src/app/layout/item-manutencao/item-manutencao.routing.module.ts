import { ItemManutencaoFormComponent } from './components/item-manutencao-form/item-manutencao-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemManutencaoComponent } from './item-manutencao.component';

const itemManutencaoRoutes: Routes = [
    { path: '', component: ItemManutencaoComponent },
    { path: 'form', component: ItemManutencaoFormComponent },
    { path: 'edit/:id', component: ItemManutencaoFormComponent }


];

@NgModule({
    imports: [RouterModule.forChild(itemManutencaoRoutes)],
    exports: [RouterModule]
})
export class ItemManutencaoRoutingModule { }
