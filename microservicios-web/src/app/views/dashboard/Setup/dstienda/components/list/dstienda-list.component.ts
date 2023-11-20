import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Dstienda} from "../../models/dstienda";


@Component({
  selector: 'app-dstienda-list',
  template: `
      <div class="float-end">
          <button type="button" (click)="goNew()" class="btn-gm-danger">
              <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Cliente
          </button>
      </div>
      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">nombre</th>
                  <th scope="col">direccion</th>
                  <th scope="col">ciudad</th>
                  <th scope="col">telefono</th>
                  <th scope="col">correoElectronico</th>
                  <th scope="col">horarioApertura</th>
                  <th scope="col">horarioCierre</th>
                  <th scope="col">marcasDisponibles</th>
                  <th scope="col">tiposProductos</th>
                  <th scope="col">inventario</th>
                  <th scope="col">ingresosMensuales</th>
                  <th scope="col">sitioWeb</th>
                  <th scope="col">redesSociales</th>
                  <th scope="col">serviciosAdicionales</th>
                  <th scope="col">promociones</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of dstiendas ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="nombre">{{v.nombre}}</td>
                  <td data-title="direccion">{{v.direccion}}</td>
                  <td data-title="ciudad">{{v.ciudad}}</td>
                  <td data-title="telefono">{{v.telefono}}</td>
                  <td data-title="correoElectronico">{{v.correoElectronico}}</td>
                  <td data-title="horarioApertura">{{v.horarioApertura}}</td>
                  <td data-title="horarioCierre">{{v.horarioCierre}}</td>
                  <td data-title="marcasDisponibles">{{v.marcasDisponibles}}</td>
                  <td data-title="tiposProductos">{{v.tiposProductos}}</td>
                  <td data-title="inventario">{{v.inventario}}</td>
                  <td data-title="ingresosMensuales">{{v.ingresosMensuales}}</td>
                  <td data-title="sitioWeb">{{v.sitioWeb}}</td>
                  <td data-title="redesSociales">{{v.redesSociales}}</td>
                  <td data-title="serviciosAdicionales">{{v.serviciosAdicionales}}</td>
                  <td data-title="promociones">{{v.promociones}}</td>

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

export class DstiendaListComponent implements OnInit {
  abcForms: any;
  @Input() dstiendas: Dstienda[] = [];
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
