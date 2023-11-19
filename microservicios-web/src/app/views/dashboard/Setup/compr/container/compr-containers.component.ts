import {Component, OnInit} from '@angular/core';
import {Compr} from "../models/compr";
import {ActivatedRoute, Router} from "@angular/router";
import {ComprsService} from "../../../../../providers/services/setup/comprs.service";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-compr-list [comprs]="comprs"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-compr-list>
  `
})

export class ComprContainersComponent implements OnInit {
  public comprs: Compr[] = [];

  constructor(private comprsService: ComprsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getComprs();
  }

  public getComprs(): void {
    this.comprsService.getAll$().subscribe(response => {
      this.comprs = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idCompr: number) {
    this.router.navigate(['edit', {idCompr: idCompr}], {relativeTo: this.route});
  }

  public eventDelete(idCompr: number): void {

    this.comprsService.delete$(idCompr).subscribe(response => {
      if (response) {
        this.getComprs()
      }
    });
  }
}
