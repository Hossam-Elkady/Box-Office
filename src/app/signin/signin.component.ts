import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])
  })
  logined:boolean=false
  error:string=""
  submitLoginFormGroup(){
    if(this.loginForm.invalid){
      return
    }
    // console.log(this.loginForm.value)
    this._AuthService.signIn(this.loginForm.value).subscribe((response)=>{
      console.log(response)
      if(response.message=="success"){
        localStorage.setItem("token",response.token)
        this._Router.navigateByUrl("home")
        this.logined=false
      }
      else{
        this.error=response.message
        this.logined=true
      }
    })
  }
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
