import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Compr} from "../../models/compr";
import {Comprdetalle} from "../../models/comprdetalle";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../../providers/services/setup/products.service";
import {Product} from "../../../product/models/product";
import {PdfService} from "../../../../../../shared/files";


@Component({
  selector: 'app-compr-list',
  template: `
    <div class="float-end">
      <button type="button" (click)="generatePDF()" class="btn btn-gm-danger">
        <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> Generar PDF
      </button>
      <button type="button" (click)="goNew()" class="btn-gm-danger">
        <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Compra
      </button>
    </div>
    <div class="responsive-table">
      <table class="table table-lg table-hover table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Marca</th>
          <th scope="col">Categoría</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio Total</th>
          <th scope="col">Proveedor ID</th>
          <th scope="col">Serie</th>
          <th scope="col">Factura</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr *ngFor="let v of comprs; let i=index">
          <th scope="row">{{ i + 1 }}</th>
          <td data-title="Marca">{{ v.marca }}</td>
          <td data-title="Categoría">{{ v.categoria }}</td>
          <td data-title="Fecha">{{ v.fecha }}</td>
          <td data-title="Precio Total">{{ v.proveedor?.nombre }}</td>
          <td data-title="Proveedor ID">{{ v.proveedorId}}</td>
          <td data-title="Serie">{{ v.serie }}</td>
          <td data-title="Factura">{{ v.factura }}</td>
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

    <div class="float-end">
      <form [formGroup]="comprAddForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Id </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="id" id="id"
                   placeholder="digite id">
          </div>
          <app-form-validate-errors [group]="comprAddForm" [controlName]="'id'"></app-form-validate-errors>
        </div>

      </form>
      <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="addItem()">
        <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
      </button>
    </div>
    <div class="center">Detalle</div>
    <div class="responsive-table">
      <table class="table table-lg table-hover table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">cantidad</th>
          <th scope="col">precio_u</th>
          <th scope="col">precio_t</th>


        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr *ngFor="let v of comprdetalles; let i=index">
          <th scope="row">{{ i + 1 }}</th>
          <td data-title="cantidad">{{ v.cantidad}}</td>
          <td data-title="precio_u">{{ v.precio_u }}</td>
          <td data-title="precio_t">{{ v.precio_t }}</td>

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

export class ComprListComponent implements OnInit {
  abcForms: any;
  @Input() comprs: Compr[] = [];
  //@Input() compraDetails: Comprdetalle[] = [];
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventEdit = new EventEmitter<number>();
  @Output() eventDelete = new EventEmitter<number>();
  public comprdetalles: Comprdetalle[] = [];
  public product = new Product();
  comprAddForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),

  });

  constructor(private productsService: ProductsService, private pdfService: PdfService) {
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

  generatePDF() {
    const pdfTitle = 'Lista de Compras';
    const pdfContent = this.comprs.map((compr, index) => `${index + 1}. Marca: ${compr.marca}, Categoría: ${compr.categoria}, Fecha: ${compr.fecha}, Precio Total: 100`).join('\n');

    // Llamada al servicio para generar el PDF
    this.pdfService.generatePdfGeneral(pdfTitle, pdfContent);
  }

  addItem() {
    console.log();

    // @ts-ignore
    this.productsService.getById$(this.comprAddForm.value.id).subscribe(response => {
      this.product = response;
      // @ts-ignore
      this.comprdetalles.push({
        cantidad: 1,
        precio_u: this.product.precio,
        precio_t: this.product.precio! * 1,
      })
      console.log(this.comprdetalles)
      // @ts-ignore
    });

    console.log("===")
  }


}
