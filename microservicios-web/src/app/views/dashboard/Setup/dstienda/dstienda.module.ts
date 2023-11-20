import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {DstiendaRoutingModule, rutedComponents} from './dstienda-routing.module';

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {DstiendaListComponent} from "./components/list/dstienda-list.component";
import {DstiendaNewComponent} from "./components/forms/dstienda-new.component";
import {DstiendaEditComponent} from "./components/forms/dstienda-edit.component";
import {DstiendasService} from "../../../../providers/services/setup/dstiendas.service";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [DstiendaListComponent, DstiendaNewComponent, DstiendaEditComponent];

const SERVICES: any[] = [DstiendasService];

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
    DstiendaRoutingModule,
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
export class DstiendaModule {
}
