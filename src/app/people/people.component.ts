import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }
  trendingPeople:any[]=[]
  page:number=1;
  APIresponse: any;

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


  getTrendingPeople(pageNum: any) {
    this.spinner.show()
    this._TrendingService
      .getTrending('person', pageNum)
      .subscribe((response) => {
        this.spinner.hide()
        this.trendingPeople= response.results;
      });
  }

  ngOnInit(): void {
    this.getTrendingPeople(1)
  }

}
