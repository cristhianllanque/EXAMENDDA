import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetupComponent} from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },

      {
        path: 'proveedor',
        loadChildren: () => import('./proveedor/proveedor.module').then(m => m.ProveedorModule),
      },
      {
        path: 'compr',
        loadChildren: () => import('./compr/compr.module').then(m => m.ComprModule),
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {
}

