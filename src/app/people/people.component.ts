import { Component, OnInit } from '@angular/core';
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
    this.getTrendingPeople(2)
  }

}
