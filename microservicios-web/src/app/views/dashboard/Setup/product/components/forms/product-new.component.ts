import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../../../../providers/services/setup/products.service";

@Component({
  selector: 'app-product-new',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Producto</a>
        </li>
      </ul>

      <form [formGroup]="productForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="nombreProducto" id="nombreProducto" placeholder="Nombre del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'nombreProducto'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Marca </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="marca" id="marca" placeholder="Marca del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'marca'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>IMEI </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="imei" id="imei" placeholder="IMEI del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'imei'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Color </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="color" id="color" placeholder="Color del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'color'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Descripción </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripcion" id="descripcion" placeholder="Descripción del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'descripcion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Precio </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="precio" id="precio" placeholder="Precio del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'precio'"></app-form-validate-errors>
        </div>
      </form>

      <form [formGroup]="productForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Stock Disponible </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="stockDisponible" id="stockDisponible" placeholder="Stock Disponible del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'stockDisponible'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Número de Serie </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="numeroSerie" id="numeroSerie" placeholder="Número de Serie del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'numeroSerie'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Especificaciones Técnicas </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="especificacionesTecnicas" id="especificacionesTecnicas" placeholder="Especificaciones Técnicas del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'especificacionesTecnicas'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Estado del Producto </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="estadoProducto" id="estadoProducto" placeholder="Estado del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'estadoProducto'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Categoría/Tipo </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="categoriaTipo" id="categoriaTipo" placeholder="Categoría/Tipo del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'categoriaTipo'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Fecha de Ingreso </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="date" class="form-control form-control-sm" formControlName="fechaIngreso" id="fechaIngreso" placeholder="Fecha de Ingreso del producto">
          </div>
          <app-form-validate-errors [group]="productForm" [controlName]="'fechaIngreso'"></app-form-validate-errors>
        </div>
      </form>
      <hr>
    </div>

    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()" [disabled]="productForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>


  `
})
export class ProductNewComponent implements OnInit {
  abcForms: any;
  productForm = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    imei: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.min(0)]),
    stockDisponible: new FormControl('', [Validators.required, Validators.min(0)]),
    numeroSerie: new FormControl('', [Validators.required]),
    especificacionesTecnicas: new FormControl('', [Validators.required]),
    estadoProducto: new FormControl('', [Validators.required]),
    categoriaTipo: new FormControl('', [Validators.required]),
    fechaIngreso: new FormControl('', [Validators.required]),  // Asegúrate de tener un valor inicial o utilizar un FormControl especial para fechas
  });

  constructor(private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;

    console.log("app-product-new");
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      this.productsService.add$(this.productForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }


  }
}
