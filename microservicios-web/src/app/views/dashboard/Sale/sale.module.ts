import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleComponent} from './sale.component';
import {SaleRoutingModule} from './sale-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        SaleRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [SaleComponent],
})
export class SaleModule {
}
