import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VentaComponent} from './venta.component';
import {VentaContainersComponent} from "./container/venta-containers.component";
import {VentaNewComponent} from "./components/forms/venta-new.component";
import {VentaEditComponent} from "./components/forms/venta-edit.component";


const routes: Routes = [
  {
    path: '',
    component: VentaComponent,
    children: [
      {
        path: '',
        component: VentaContainersComponent,
        data: {
          title: 'Venta'
        }
      },
      {
        path: 'new',
        component: VentaNewComponent,
        data: {
          title: 'Venta'
        }
      }
      ,
      {
        path: 'edit',
        component: VentaEditComponent,
        data: {
          title: 'Venta'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRoutingModule {
}

export const rutedComponents = [
  VentaContainersComponent,
  VentaComponent,
];
