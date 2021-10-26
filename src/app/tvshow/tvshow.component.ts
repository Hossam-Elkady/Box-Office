import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TVShowComponent implements OnInit {

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


  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }
  trendingTvShows:any[]=[]
  page:number=1;
  APIresponse: any;

  getTrendingTvShows(pageNum: any) {
    this.spinner.show()
    this._TrendingService
      .getTrending('tv', pageNum)
      .subscribe((response) => {
        this.spinner.hide()
        this.trendingTvShows= response.results;
      });
  }

  ngOnInit(): void {
    this.getTrendingTvShows(1)
  }

}
