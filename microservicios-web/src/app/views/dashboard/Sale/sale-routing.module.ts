import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaleComponent} from './sale.component';

const routes: Routes = [
  {
    path: '',
    component: SaleComponent,
    children: [
      {
        path: 'compra',
        loadChildren: () => import('./compra/compra.module').then(m => m.CompraModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {
}

