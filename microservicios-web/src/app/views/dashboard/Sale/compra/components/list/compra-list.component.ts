import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Compra} from "../../models/compra";


@Component({
  selector: 'app-compra-list',
  template: `
    <div class="float-end">
      <button type="button" (click)="goNew()" class="btn-gm-danger">
        <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Compra
      </button>
    </div>
    <div class="responsive-table">
      <table class="table table-lg table-hover table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Serie</th>
          <th scope="col">Factura</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Marca</th>
          <th scope="col">Categoria</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio T</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr *ngFor="let v of compras ; let i=index">
          <th scope="row">{{i + 1}}</th>
          <td data-title="Serie">{{v.serie}}</td>
          <td data-title="Factura">{{v.factura}}</td>
          <td data-title="Proveedor">{{v.proveedor?.nombre}}</td>
          <td data-title="Marca">{{v.marca}}</td>
          <td data-title="Categoria">{{v.categoria}}</td>
          <td data-title="Descripcion">{{v.descripcion}}</td>
          <td data-title="fecha">{{v.fecha}}</td>
          <td data-title="precio_Total">{{v.precio_Total}}</td>
          <td data-title="Estado">
            <span class="badge text-bg-{{v.estado?'success': 'danger'}} text-white">
                            {{v.estado ? 'PAGADO' : 'DEUDA'}}
            </span>
          </td>

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

export class CompraListComponent implements OnInit {
  abcForms: any;
  @Input() compras: Compra[] = [];
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventEdit = new EventEmitter<number>();
  @Output() eventDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.abcForms = abcForms;
    console.log(this.compras);
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
