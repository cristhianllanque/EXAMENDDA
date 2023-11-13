import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ProveedorsService } from "../../../../../../providers/services/setup/proveedors.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Proveedor } from "../../models/proveedor";

@Component({
  selector: 'app-proveedor-edit',
  template: `

  `
})
export class ProveedorEditComponent implements OnInit {
  abcForms: any;
  public idProveedo: number = 0;
  public proveedor = new Proveedor();
  proveedorForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
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
      this.idProveedo = parseInt(res['idProveedo']);
      this.proveedorForm.value.id = this.idProveedo;
      this.getClientById(this.idProveedo);
    });
    console.log("app-proveedor-new");
  }

  getClientById(idProveedo: number): void {
    this.proveedorsService.getById$(idProveedo).subscribe(response => {
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
