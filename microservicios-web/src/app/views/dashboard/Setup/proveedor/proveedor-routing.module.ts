import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProveedorComponent } from './proveedor.component';
import {ProveedorContainersComponent} from "./container/proveedor-containers.component";
import {ProveedorNewComponent} from "./components/forms/proveedor-new.component";
import {ProveedorEditComponent} from "./components/forms/proveedor-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ProveedorComponent,
    children: [
      {
        path: '',
        component: ProveedorContainersComponent,
        data: {
          title: 'Proveedor'
        }
      },
      {
        path: 'new',
        component: ProveedorNewComponent,
        data: {
          title: 'Proveedor'
        }
      }
      ,
      {
        path: 'edit',
        component: ProveedorEditComponent,
        data: {
          title: 'Proveedor'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorRoutingModule {
}

export const rutedComponents = [
  ProveedorContainersComponent,
  ProveedorComponent,
];
