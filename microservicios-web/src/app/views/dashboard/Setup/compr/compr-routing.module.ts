import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ComprComponent} from './compr.component';
import {ComprContainersComponent} from "./container/compr-containers.component";
import {ComprNewComponent} from "./components/forms/compr-new.component";
import {ComprEditComponent} from "./components/forms/compr-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ComprComponent,
    children: [
      {
        path: '',
        component: ComprContainersComponent,
        data: {
          title: 'Compra'
        }
      },
      {
        path: 'new',
        component: ComprNewComponent,
        data: {
          title: 'Compra'
        }
      }
      ,
      {
        path: 'edit',
        component: ComprEditComponent,
        data: {
          title: 'Compra'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprRoutingModule {
}

export const rutedComponents = [
  ComprContainersComponent,
  ComprComponent,
];
