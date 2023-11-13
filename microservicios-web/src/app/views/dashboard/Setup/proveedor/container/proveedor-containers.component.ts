import {Component, OnInit} from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { ProveedorsService } from '../../../../../providers/services/setup/proveedors.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-proveedor-list [proveedors]="proveedors"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-proveedor-list>
  `
})

export class ProveedorContainersComponent implements OnInit {
  public proveedors: Proveedor[] = [];

  constructor(private proveedorsService: ProveedorsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getProveedors();
  }

  public getProveedors(): void {
    this.proveedorsService.getAll$().subscribe((response:any) => {
      this.proveedors = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idProveedor: number) {
    this.router.navigate(['edit', {idProveedor: idProveedor}], {relativeTo: this.route});
  }

  public eventDelete(idProveedor: number): void {

    this.proveedorsService.delete$(idProveedor).subscribe((response:any) => {
      if (response) {
        this.getProveedors()
      }
    });
  }
}
