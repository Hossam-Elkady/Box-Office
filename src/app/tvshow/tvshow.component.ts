import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TVShowComponent implements OnInit {

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
