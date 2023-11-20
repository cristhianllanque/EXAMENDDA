import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {VentaRoutingModule, rutedComponents} from './venta-routing.module';

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {VentaListComponent} from "./components/list/venta-list.component";
import {VentasService} from "../../../../providers/services/setup/ventas.service";
import {VentaNewComponent} from "./components/forms/venta-new.component";
import {VentaEditComponent} from "./components/forms/venta-edit.component";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [VentaListComponent, VentaNewComponent, VentaEditComponent];

const SERVICES: any[] = [VentasService];

const NG_MODULES: any = [];

const NGB_MODULES: any = [
  NgbModalModule,
  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VentaRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    ...SHARED_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ...rutedComponents,
    ...PIPES,

  ],
  providers: [
    ...SERVICES,
  ],
  exports: []
})
export class VentaModule {
}
