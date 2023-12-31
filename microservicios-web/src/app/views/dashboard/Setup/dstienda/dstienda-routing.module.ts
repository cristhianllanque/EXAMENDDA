import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DstiendaComponent} from './dstienda.component';
import {DstiendaContainersComponent} from "./container/dstienda-containers.component";
import {DstiendaNewComponent} from "./components/forms/dstienda-new.component";
import {DstiendaEditComponent} from "./components/forms/dstienda-edit.component";


const routes: Routes = [
  {
    path: '',
    component: DstiendaComponent,
    children: [
      {
        path: '',
        component: DstiendaContainersComponent,
        data: {
          title: 'Cliente'
        }
      },
      {
        path: 'new',
        component: DstiendaNewComponent,
        data: {
          title: 'Cliente'
        }
      }
      ,
      {
        path: 'edit',
        component: DstiendaEditComponent,
        data: {
          title: 'Cliente'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DstiendaRoutingModule {
}

export const rutedComponents = [
  DstiendaContainersComponent,
  DstiendaComponent,
];
