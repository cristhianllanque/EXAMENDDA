import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ProveedorsService } from "../../../../../../providers/services/setup/proveedors.service";

@Component({
  selector: 'app-proveedor-new',
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
      <form [formGroup]="proveedorForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="nombre"
                   id="nombre"
                   placeholder="Nombre del cliente">
          </div>
          <app-form-validate-errors [group]="proveedorForm"
          ProveedortrolName]="'nombre'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>DNI. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="direccion"
                   id="direccion"
                   placeholder="DNI del cliente">
          </div>
          <app-form-validate-errors [group]="proveedorForm"
                                ProveedortrolName]="'direccion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Dirección. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="direccion"
                   id="direccion"
                   placeholder="Dirección del cliente">
          </div>
          <app-form-validate-errors [group]="proveedorForm"
          ProveedortrolName]="'nombre'"></app-form-validate-errors>
        </div>


        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Telefono. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="telefono"
                   id="telefono"
                   placeholder="Teléfono del cliente">
          </div>
          <app-form-validate-errors [group]="proveedorForm"
          ProveedortrolName]="'telefono'"></app-form-validate-errors>
        </div>


      </form>
      <hr>
    </div>
    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()"
                [disabled]="proveedorForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class ProveedorNewComponent implements OnInit {
  abcForms: any;
  
  proveedorForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    correo: new FormControl(''),
    productos_suministrados: new FormControl(''),


  });

  constructor(private proveedorsService: ProveedorsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;

    console.log("app-proveedor-new");
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    console.log(this.proveedorForm.value);
    if (this.proveedorForm.valid) {
      this.proveedorsService.add$(this.proveedorForm.value).subscribe((response:any) => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }


  }
}
