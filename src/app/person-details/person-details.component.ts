import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { NgxSpinnerService } from 'ngx-spinner';
DetailsService;

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _ActivatedRoute: ActivatedRoute,
    private details: DetailsService
  ) { }
  posterPath: string = `https://image.tmdb.org/t/p/original/`;
  personDetails: any = {}
  getPersonDetails() {
    this.spinner.show()
    this.details
      .getDetails('person', this._ActivatedRoute.snapshot.params.id)
      .subscribe((response) => {
        this.spinner.hide()
        this.personDetails = response;
        this.spinner.hide();
        console.log(this.personDetails)
      });
  }
  ngOnInit(): void {
    this.getPersonDetails();
  }
}
