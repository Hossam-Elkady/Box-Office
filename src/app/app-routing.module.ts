import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TVShowComponent } from './tvshow/tvshow.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"details/:id",component:DetailsComponent,canActivate:[AuthGuard]},
  {path:"personDetails/:id",component:PersonDetailsComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"movies",component:MoviesComponent,canActivate:[AuthGuard]},
  {path:"people",component:PeopleComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent},
  {path:"login",component:SigninComponent},
  {path:"tvshows",component:TVShowComponent,canActivate:[AuthGuard]},
  {path:"networks",component:NetworksComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
