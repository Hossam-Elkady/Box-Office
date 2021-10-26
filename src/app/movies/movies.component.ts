import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _TrendingService:TrendingService, private spinner:NgxSpinnerService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

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
