import { Component, OnInit } from "@angular/core";
import { abcForms } from 'src/environments/generals';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CompraService } from "../../../../../../providers/services/sale/compra.service";

@Component({
  selector: 'app-compra-new',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Cliente</a>
        </li>
      </ul>
      <form [formGroup]="compraForm" class="row mt-2 d-flex justify-content-start align-items-center">

        <!-- Primera fila -->
        <div class="form-group col-md-3 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Serie *</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="serie" id="serie" placeholder="Ingrese la serie">
          </div>
          <app-form-validate-errors [group]="compraForm" [controlName]="'serie'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-3 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Factura *</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="factura" id="factura" placeholder="Ingrese el número de factura">
          </div>
          <app-form-validate-errors [group]="compraForm" [controlName]="'factura'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-3 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Marca *</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="marca" id="marca" placeholder="Ingrese la marca">
          </div>
          <app-form-validate-errors [group]="compraForm" [controlName]="'marca'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-3">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Categoría</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="categoria" id="categoria" placeholder="Ingrese la categoría">
          </div>
        </div>

        <!-- Segunda fila -->
        <div class="form-group col-md-3">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Descripción</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <textarea class="form-control form-control-sm" formControlName="descripcion" id="descripcion" placeholder="Ingrese la descripción"></textarea>
          </div>
          <!-- Puedes ajustar el tipo de campo y las validaciones según tus requisitos -->
        </div>

        <div class="form-group col-md-3 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Fecha *</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="date" class="form-control form-control-sm" formControlName="fecha" id="fecha">
          </div>
          <app-form-validate-errors [group]="compraForm" [controlName]="'fecha'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-3 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Precio Total *</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="precio_Total" id="precio_Total" placeholder="Ingrese el precio total">
          </div>
          <app-form-validate-errors [group]="compraForm" [controlName]="'precio_Total'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-3">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Estado</b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="estado" id="estado" placeholder="Ingrese el estado">
          </div>
          <!-- Puedes ajustar el tipo de campo y las validaciones según tus requisitos -->
        </div>

        <!-- Compra Detalle -->
        <div class="form-group col-md-12 text-center">
          <h4 class="my-4">Compra Detalle</h4>
        </div>

        <div class="form-group col-md-12">
          <div class="row">
            <!-- Precio Total - Primera Columna -->
            <div class="form-group col-md-6">
              <div class="form-group required">
                <div class="input-group input-group-sm">
                  <label class="col-form-label"><b>Cantidad</b></label>
                </div>
                <div class="input-group input-group-sm input-group-rounded">
                  <input type="number" class="form-control form-control-sm" formControlName="cantidad" id="cantidad" placeholder="Ingrese la cantidad">
                </div>
                <app-form-validate-errors [group]="compraForm" [controlName]="'cantidad'"></app-form-validate-errors>
              </div>

              <!-- Proveedor - Segunda Columna -->
              <div class="form-group required">
                <div class="input-group input-group-sm">
                  <label class="col-form-label"><b>Precio Unitario</b></label>
                </div>
                <div class="input-group input-group-sm input-group-rounded">
                  <input type="number" class="form-control form-control-sm" formControlName="precio_u" id="precio_u" placeholder="Ingrese el precio u">
                </div>
                <app-form-validate-errors [group]="compraForm" [controlName]="'precio_u'"></app-form-validate-errors>
              </div>
            </div>
            <!-- Otros Campos - Segunda Fila -->
            <div class="form-group col-md-6">
              <!-- Otro Campo - Tercera Columna -->
              <div class="form-group required">
                <div class="input-group input-group-sm">
                  <label class="col-form-label"><b> Precio Total</b></label>
                </div>
                <div class="input-group input-group-sm input-group-rounded">
                  <input type="number" class="form-control form-control-sm" formControlName="precio_t" id="precio_t" placeholder="Ingrese el precio t">
                </div>
                <app-form-validate-errors [group]="compraForm" [controlName]="'precio_t'"></app-form-validate-errors>
              </div>
              <div class="form-group required">
                <div class="input-group input-group-sm">
                  <label class="col-form-label"><b>Proveedor</b></label>
                </div>
                <div class="input-group input-group-sm input-group-rounded">
                  <input type="text" class="form-control form-control-sm" formControlName="proveedor" id="proveedor" placeholder="Ingrese el proveedor">
                </div>
                <app-form-validate-errors [group]="compraForm" [controlName]="'proveedor'"></app-form-validate-errors>
              </div>
            </div>
          </div>
        </div>

      </form>

      <hr>
    </div>
    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()" [disabled]="compraForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class CompraNewComponent implements OnInit {
  abcForms: any;
  compraForm = new FormGroup({
    serie: new FormControl('', [Validators.required]),
    factura: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    categoria: new FormControl(null),
    descripcion: new FormControl(null),
    fecha: new FormControl(null),
    precio_Total: new FormControl(null),
    estado: new FormControl(null),
    cantidad: new FormControl(null),
    precio_u: new FormControl(null),
    precio_t: new FormControl(null),
    proveedor: new FormControl(null),



  });

  constructor(private compraService: CompraService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.abcForms = abcForms;
    console.log("app-compra-new");
  }

  cancelForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  saveForm() {
    console.log(this.compraForm.value);
    if (this.compraForm.valid) {
      this.compraService.add$(this.compraForm.value).subscribe(
          (response: any) => {
            console.log(response);
            if (response && response.success) {
              this.router.navigate(['../'], { relativeTo: this.route });
            } else {
              console.error('Error al agregar compra');
            }
          },
          (error) => {
            console.error('Error en la llamada al servicio', error);
          }
      );
    }
  }
}
