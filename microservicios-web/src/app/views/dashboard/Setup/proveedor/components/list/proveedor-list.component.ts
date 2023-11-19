import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Proveedor} from "../../models/proveedor";

@Component({
  selector: 'app-proveedor-list',
  template: `
    <div class="float-end">
      <button type="button" (click)="goNew()" class="btn-gm-danger">
        <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Proveedor
      </button>
    </div>
    <div class="responsive-table">
      <table class="table table-lg table-hover table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ruc</th>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo</th>
          <th scope="col">Productos S.</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr *ngFor="let v of proveedors ; let i=index">
          <th scope="row">{{i + 1}}</th>
          <td data-title="Nombre">{{v.ruc}}</td>
          <td data-title="Nombre">{{v.nombre}}</td>
          <td data-title="Direccion">{{v.direccion}}</td>
          <td data-title="Telefono">{{v.telefono}}</td>
          <td data-title="Correo">{{v.correo}}</td>
          <td data-title="Productos S.">{{v.productos_suministrados}}</td>


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

export class ProveedorListComponent implements OnInit {
  abcForms: any;
  @Input() proveedors: Proveedor[] = [];
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
