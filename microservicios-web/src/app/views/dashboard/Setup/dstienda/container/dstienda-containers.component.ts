import {Component, OnInit} from '@angular/core';
import {Dstienda} from "../models/dstienda";
import {DstiendasService} from "../../../../../providers/services/setup/dstiendas.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-dstienda-list [dstiendas]="dstiendas"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-dstienda-list>
  `
})

export class DstiendaContainersComponent implements OnInit {
  public dstiendas: Dstienda[] = [];

  constructor(private dstiendasService: DstiendasService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getDstiendas();
  }

  public getDstiendas(): void {
    this.dstiendasService.getAll$().subscribe(response => {
      this.dstiendas = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idDstienda: number) {
    this.router.navigate(['edit', {idDstienda: idDstienda}], {relativeTo: this.route});
  }

  public eventDelete(idDstienda: number): void {

    this.dstiendasService.delete$(idDstienda).subscribe(response => {
      if (response) {
        this.getDstiendas()
      }
    });
  }
}
