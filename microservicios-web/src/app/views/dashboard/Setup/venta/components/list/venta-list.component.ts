import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Venta} from "../../models/venta";


@Component({
  selector: 'app-venta-list',
  template: `
      <div class="float-end">
          <button type="button" (click)="goNew()" class="btn-gm-danger">
              <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Venta
          </button>
      </div>
      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">fechaVenta</th>
                  <th scope="col">vendedor</th>
                  <th scope="col">numeroSerie</th>
                  <th scope="col">modeloCelular</th>
                  <th scope="col">marca</th>
                  <th scope="col">precioVenta</th>
                  <th scope="col">metodoPago</th>
                  <th scope="col">estadoCelular</th>
                  <th scope="col">condicionCelular</th>
                  <th scope="col">accesoriosIncluidos</th>
                  <th scope="col">garantia</th>
                  <th scope="col">ubicacionVenta</th>
                  <th scope="col">notas</th>
                  <th scope="col">estadoVenta</th>
                  <th scope="col">canalesVenta</th>
                  <th scope="col">descuentosPromociones</th>
                  <th scope="col">costosEnvio</th>
                  <th scope="col">informacionEnvio</th>

              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of ventas ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                <td data-title="fechaVenta">{{v.fechaVenta}}</td>
                <td data-title="vendedor">{{v.vendedor}}</td>
                <td data-title="numeroSerie">{{v.numeroSerie}}</td>
                <td data-title="modeloCelular">{{v.modeloCelular}}</td>
                <td data-title="marca">{{v.marca}}</td>
                <td data-title="precioVenta">{{v.precioVenta}}</td>
                <td data-title="metodoPago">{{v.metodoPago}}</td>
                <td data-title="estadoCelular">{{v.estadoCelular}}</td>
                <td data-title="condicionCelular">{{v.condicionCelular}}</td>
                <td data-title="accesoriosIncluidos">{{v.accesoriosIncluidos}}</td>
                <td data-title="garantia">{{v.garantia}}</td>
                <td data-title="ubicacionVenta">{{v.ubicacionVenta}}</td>
                <td data-title="notas">{{v.notas}}</td>
                <td data-title="estadoVenta">{{v.estadoVenta}}</td>
                <td data-title="canalesVenta">{{v.canalesVenta}}</td>
                <td data-title="descuentosPromociones">{{v.descuentosPromociones}}</td>
                <td data-title="costosEnvio">{{v.costosEnvio}}</td>
                <td data-title="informacionEnvio">{{v.informacionEnvio}}</td>

                  <td data-title="Acciones">
                      <button type="button" class="btn-gm-sm btn btn-warning btn-gm-small"
                              title="{{ abcForms.btnEdit.label }}" (click)="goEdit(v.id!)">
                          <span class="{{ abcForms.btnEdit.icon }}"></span>
                      </button>
                      <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                              title="{{ abcForms.btnDelete.label }}" (click)="goDelete(v.id!)">
                          <span class="{{ abcForms.btnDelete.icon }}"></span>
                      </button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
  `,
})

export class VentaListComponent implements OnInit {
  abcForms: any;
  @Input() ventas: Venta[] = [];
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventEdit = new EventEmitter<number>();
  @Output() eventDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.abcForms = abcForms;
  }

  public goNew(): void {
    this.eventNew.emit(true);
  }

  public goEdit(id: number): void {
    this.eventEdit.emit(id);
  }

  public goDelete(id: number): void {
    this.eventDelete.emit(id);
  }
}
