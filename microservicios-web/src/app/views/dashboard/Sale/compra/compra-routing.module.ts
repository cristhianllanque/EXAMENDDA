import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompraComponent} from './compra.component';
import {CompraContainersComponent} from "./containers/compra-containers.component";
import {CompraNewComponent} from "./components/form/compra-new.component";
//import {CompraEditComponent, CompraNewComponent} from "./components";

const routes: Routes = [
  {
    path: '',
    component: CompraComponent,
    children: [
      {
        path: '',
        component: CompraContainersComponent,
        data: {
          title: 'Compra'
        }
      },
      {
        path: 'new',
        component: CompraNewComponent,
        data: {
          title: 'Compra'
        }
      }
      ,

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraRoutingModule {
}

export const rutedComponents = [
  CompraContainersComponent,
  CompraComponent,
];
