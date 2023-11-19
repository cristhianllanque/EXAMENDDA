import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Product} from "../../models/product";


@Component({
  selector: 'app-product-list',
  template: `
    <div class="float-end">
      <button type="button" (click)="goNew()" class="btn-gm-danger">
        <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Producto
      </button>
    </div>
      <div class="responsive-table">
        <table class="table table-lg table-hover table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Marca</th>
            <th scope="col">IMEI</th>
            <th scope="col">Color</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock Disponible</th>
            <th scope="col">Número de Serie</th>
            <th scope="col">Especificaciones Técnicas</th>
            <th scope="col">Estado del Producto</th>
            <th scope="col">Categoría/Tipo</th>
            <th scope="col">Fecha de Ingreso</th>
            <th scope="col">Acciones</th>
          </tr>
          </thead>
          <tbody class="table-group-divider">
          <tr *ngFor="let product of products; let i = index">
            <th scope="row">{{ i + 1 }}</th>
            <td data-title="Nombre del Producto">{{ product.nombreProducto }}</td>
            <td data-title="Marca">{{ product.marca }}</td>
            <td data-title="IMEI">{{ product.imei }}</td>
            <td data-title="Color">{{ product.color }}</td>
            <td data-title="Descripción">{{ product.descripcion }}</td>
            <td data-title="Precio">{{ product.precio }}</td>
            <td data-title="Stock Disponible">{{ product.stockDisponible }}</td>
            <td data-title="Número de Serie">{{ product.numeroSerie }}</td>
            <td data-title="Especificaciones Técnicas">{{ product.especificacionesTecnicas }}</td>
            <td data-title="Estado del Producto">{{ product.estadoProducto }}</td>
            <td data-title="Categoría/Tipo">{{ product.categoriaTipo }}</td>
            <td data-title="Fecha de Ingreso">{{ product.fechaIngreso | date:'short' }}</td>
            <td data-title="Acciones">
              <button type="button" class="btn-gm-sm btn btn-warning btn-gm-small"
                      title="{{ abcForms.btnEdit.label }}" (click)="goEdit(product.id!)">
                <span class="{{ abcForms.btnEdit.icon }}"></span>
              </button>
              <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                      title="{{ abcForms.btnDelete.label }}" (click)="goDelete(product.id!)">
                <span class="{{ abcForms.btnDelete.icon }}"></span>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

  `,
})

export class ProductListComponent implements OnInit {
  abcForms: any;
  @Input() products: Product[] = [];
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
