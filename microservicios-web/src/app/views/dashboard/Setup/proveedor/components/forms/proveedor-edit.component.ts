import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Proveedor} from "../../models/proveedor";
import {ProveedorsService} from "../../../../../../providers/services";

@Component({
  selector: 'app-proveedor-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Proveedor</a>
        </li>
      </ul>
      <form [formGroup]="proveedorForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Ruc </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="ruc" id="ruc" placeholder="ruc del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'ruc'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="nombre" id="nombre" placeholder="nombre del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'nombre'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Dirección </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="direccion" id="direccion" placeholder="Dirección del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'direccion'"></app-form-validate-errors>
        </div>
      </form>

      <form [formGroup]="proveedorForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Teléfono. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="telefono" id="telefono" placeholder="Teléfono del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'telefono'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Correo. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="correo" id="correo" placeholder="Correo del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'correo'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-4 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Productos Suministrados. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="productos_suministrados" id="productos_suministrados" placeholder="P.S del proveedor">
          </div>
          <app-form-validate-errors [group]="proveedorForm" [controlName]="'productos_suministrados'"></app-form-validate-errors>
        </div>
      </form>
      <hr>
    </div>
    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()" [disabled]="proveedorForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class ProveedorEditComponent implements OnInit {
  abcForms: any;
  public idProveedor: number = 0;
  public proveedor = new Proveedor();
  proveedorForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    ruc: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl(null),
    correo: new FormControl('', [Validators.required]),
    productos_suministrados: new FormControl('', [Validators.required]),

  });

  constructor(private proveedorsService: ProveedorsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idProveedor = parseInt(res['idProveedor']);
      this.proveedorForm.value.id= this.idProveedor;
      this.getProveddorById(this.idProveedor);
    });
    console.log("app-proveedor-new");
  }

  getProveddorById(idProveedor: number): void {
    this.proveedorsService.getById$(idProveedor).subscribe(response => {
      this.proveedor = response;
      // @ts-ignore
      this.proveedorForm.patchValue(this.proveedor);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.proveedorForm.valid) {
      this.proveedorsService.add$(this.proveedorForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
