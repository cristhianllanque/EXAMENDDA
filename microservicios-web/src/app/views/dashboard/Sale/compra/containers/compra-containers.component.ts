import {Component, OnInit} from '@angular/core';
import {ConfirmDialogService} from '../../../../../shared';
import {ActivatedRoute, Router} from "@angular/router";
import {Compra} from "../models/compra";
import {CompraService} from "../../../../../providers/services/sale/compra.service";

@Component({
  selector: 'app-compra-container',
  template: `
    <app-compra-list [compras]="compras"
                    (eventEdit)="eventEdit($event)"
                    (eventDelete)="eventDelete($event)"
                    (eventNew)="eventNew($event)"
    ></app-compra-list>
  `
})

export class CompraContainersComponent implements OnInit {
  public error: string = '';
  public compras: Compra[] = [];
  public compra = new Compra();


  constructor(
    private compraService: CompraService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCompras();
  }

  public getCompras(params?: Object): void {
    this.compraService.getWithQuery$(params).subscribe(response => {

      this.compras = response;
    }, error => {
      this.error = error;
    });
  }

  public eventNew($event: boolean): void {
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  }

  public eventEdit(idCompra: number): void {
    this.router.navigate(['edit', {idCompra: idCompra}], {relativeTo: this.route});
  }

  public eventDelete(idCompra: number): void {
    this.confirmDialogService.confirmSave().then(() => {
      this.compraService.delete$(idCompra).subscribe(response => {
        if (response) {
          this.getCompras();
        }

      });
    }).catch(() => {
    });
  }
}
