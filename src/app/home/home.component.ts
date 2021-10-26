import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _TrendingService: TrendingService) { }
  trendingMovies: any[] = [];
  trendingTVShows: any[] = [];
  trendingPeople: any[] = [];
  APIresponse: any;
  page: number = 1;
  getTrendingMovies(pageNum: any) {
    this.page = pageNum;
    this._TrendingService
      .getTrending('movie', pageNum)
      .subscribe((response) => {
        this.trendingMovies = response.results.slice(0, 10);
      });
  }
  getTrendingTvShows(pageNum: any) {
    this._TrendingService.getTrending('tv', pageNum).subscribe((response) => {
      this.trendingTVShows = response.results.slice(0, 10);
      this.APIresponse = response.total_pages;
    });
  }
  getTrendingPeople(pageNum: any) {
    this._TrendingService.getTrending('person', pageNum).subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10);
      this.APIresponse = response.total_pages;
    });
  }


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


  ngOnInit(): void {
    this.getTrendingMovies(1);
    this.getTrendingTvShows(1);
    this.getTrendingPeople(1);
  }
}
