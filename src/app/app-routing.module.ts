import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WelcomePageComponent } from './welcome-page/welcome-page.component';
// import { MovieCardComponent } from './movie-card/movie-card.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';


// const appRoutes: Routes = [
//   {path: 'welcome', component: WelcomePageComponent},
//   {path: 'movies', component: MovieCardComponent},
//   {path: 'profile', component: UserProfileComponent},
//   {path: '', redirectTo:'welcome', pathMatch:'prefix'},
// ];
const appRoutes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }