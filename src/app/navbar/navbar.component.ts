import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logedIn: boolean = false
  constructor(private _Router: Router) {

  }
  logOut() {
    localStorage.removeItem("token")
    this._Router.navigateByUrl("/login")
  }


  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if (token) {
      this.logedIn = true
    }
    else {
      this.logedIn = false
    }
  }

}
