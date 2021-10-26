import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _ActivatedRoute: ActivatedRoute,
    private details: DetailsService
  ) { }
  posterPath: string = `https://image.tmdb.org/t/p/original/`;
  id: any = 0;
  itemDetails: any = {};
  personDetails: any = {};
  ngOnInit(): void {
    this.spinner.show();
    this.getMovieDetails();
    this.getTvShowDetails();
    this.id = this._ActivatedRoute.snapshot.params.id;
  }
  dataExist: boolean = true;



  getTvShowDetails() {
    this.details
      .getDetails('tv', this._ActivatedRoute.snapshot.params.id)
      .subscribe((response) => {
        this.itemDetails = response;
        this.spinner.hide();
      });
  }

  getMovieDetails() {
    this.details
      .getDetails('movie', this._ActivatedRoute.snapshot.params.id)
      .subscribe((response) => {
        this.spinner.hide();
        this.itemDetails = response;
      });
  }
}
