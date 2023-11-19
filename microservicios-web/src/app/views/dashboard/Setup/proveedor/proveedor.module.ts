import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ProveedorRoutingModule, rutedComponents} from './proveedor-routing.module';

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {ProveedorListComponent} from "./components/list/proveedor-list.component";
import {ProveedorsService} from "../../../../providers/services/setup/proveedors.service";
import {ProveedorNewComponent} from "./components/forms/proveedor-new.component";
import {ProveedorEditComponent} from "./components/forms/proveedor-edit.component";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [ProveedorListComponent,ProveedorNewComponent,ProveedorEditComponent];

const SERVICES: any[] = [ProveedorsService];

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
    ProveedorRoutingModule,
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
export class ProveedorModule {
}
