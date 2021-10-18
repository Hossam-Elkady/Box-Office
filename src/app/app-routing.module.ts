import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TVShowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"details",component:DetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"people",component:PeopleComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:SigninComponent},
  {path:"tvshows",component:TVShowComponent},
  {path:"networks",component:NetworksComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
