import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _TrendingService:TrendingService, private spinner:NgxSpinnerService) { }
  trendingMovies:any[]=[]
  page:number=1;
  APIresponse: any;

  getTrendingMovies(pageNum: any) {
    this.spinner.show()
    this._TrendingService
      .getTrending('movie', pageNum)
      .subscribe((response) => {
        this.spinner.hide()
        this.trendingMovies = response.results;
      });
  }
  ngOnInit(): void {
    this.getTrendingMovies(1)
  }

}
