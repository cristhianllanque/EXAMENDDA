import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../../../../../providers/services/setup/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ComprsService} from "../../../../../../providers/services/setup/comprs.service";

@Component({
  selector: 'app-client-new',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Compra</a>
        </li>
      </ul>

      <form [formGroup]="comprForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Marca </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="marca" id="marca" placeholder="Nombre de la marca">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'marca'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Categoria </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="categoria" id="categoria" placeholder="Categoria">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'categoria'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Fecha </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="date" class="form-control form-control-sm" formControlName="fecha" id="fecha" placeholder="Fecha">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'fecha'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>PrecioT </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="precio_Total" id="precio_Total" placeholder="Precio Total">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'precio_Total'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Proveedor </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="proveedorId" id="proveedorId" placeholder="proveedor">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'proveedorId'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Serie </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="serie" id="serie" placeholder="serie">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'serie'"></app-form-validate-errors>
        </div>
      </form>

      <form [formGroup]="comprForm" class="row mt-2 d-flex justify-content-start align-items-center">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Factura </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="factura" id="factura" placeholder="factura">
          </div>
          <app-form-validate-errors [group]="comprForm" [controlName]="'factura'"></app-form-validate-errors>
        </div>
      </form>
      <hr>
    </div>

    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()" [disabled]="comprForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class ComprNewComponent implements OnInit {
  abcForms: any;
  comprForm = new FormGroup({
    marca: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    fecha: new FormControl(null, [Validators.required]), // Asegúrate de tener el tipo de dato correcto para la fecha
    precio_Total: new FormControl(null, [Validators.required, Validators.min(0)]),
    proveedorId: new FormControl(0, [Validators.required]), // Ajusta según tus necesidades
    serie: new FormControl(null),
    factura: new FormControl(''),

  });

  constructor(private comprsService: ComprsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;

    console.log("app-compr-new");
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    console.log(this.comprForm.value);
    if (this.comprForm.valid) {
      this.comprsService.add$(this.comprForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }


  }
}
