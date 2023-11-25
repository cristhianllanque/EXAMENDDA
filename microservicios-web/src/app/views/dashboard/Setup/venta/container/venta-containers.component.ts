import {Component, OnInit} from '@angular/core';
import {Venta} from "../models/venta";
import {VentasService} from "../../../../../providers/services/setup/ventas.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-venta-list [ventas]="ventas"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-venta-list>
  `
})

export class VentaContainersComponent implements OnInit {
  public ventas: Venta[] = [];

  constructor(private ventasService: VentasService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getVentas();
  }

  public getVentas(): void {
    this.ventasService.getAll$().subscribe(response => {
      this.ventas = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idVenta: number) {
    this.router.navigate(['edit', {idVenta: idVenta}], {relativeTo: this.route});
  }

  public eventDelete(idVenta: number): void {

    this.ventasService.delete$(idVenta).subscribe(response => {
      if (response) {
        this.getVentas()
      }
    });
  }

  protected readonly Venta = Venta;
}
