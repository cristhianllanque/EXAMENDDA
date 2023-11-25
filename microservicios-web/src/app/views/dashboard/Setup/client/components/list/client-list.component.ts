import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Client} from "../../models/client";


@Component({
  selector: 'app-client-list',
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
                  <th scope="col">Nombre</th>
                  <th scope="col">Numero Telefono</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Identificacion</th>
                  <th scope="col">Fecha Nacimiento</th>
                  <th scope="col">Historial Compras</th>
                  <th scope="col">Preferencias Marcas</th>
                  <th scope="col">Metodo Pago</th>
                  <th scope="col">Estado Cuenta</th>
                  <th scope="col">Notificaciones</th>
                  <th scope="col">Historial Servicios</th>
                  <th scope="col">MP</th>
                  <th scope="col">Productos Sugeridos</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of clients ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="Nombre">{{v.nombre}}</td>
                  <td data-title="Numero Telefono">{{v.numeroTelefono}}</td>
                  <td data-title="Dirección">{{v.direccion}}</td>
                  <td data-title="Correo">{{v.correoElectronico}}</td>
                  <td data-title="Identificacion">{{v.numeroIdentificacion}}</td>
                  <td data-title="Fecha Nacimiento">{{v.fechaNacimiento}}</td>
                  <td data-title="Historial Compras">{{v.historialCompras}}</td>
                  <td data-title="Preferencias Marcas">{{v.preferenciasMarca}}</td>
                  <td data-title="Metodo Pago">{{v.metodoPago}}</td>
                  <td data-title="Estado Cuenta">{{v.estadoCuenta}}</td>
                  <td data-title="Notificaciones">{{v.notificacionesPreferidas}}</td>
                  <td data-title="Historial Servicios">{{v.historialServicioCliente}}</td>
                  <td data-title="MP">{{v.marcasPreferenciales}}</td>
                  <td data-title="Productos Sugeridos">{{v.productosProximos}}</td>

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

export class ClientListComponent implements OnInit {
  abcForms: any;
  @Input() clients: Client[] = [];
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
