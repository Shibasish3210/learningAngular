import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guard/auth.guard';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ProfileCardsComponent } from './components/profile-cards/profile-cards.component';
import { SubAboutComponent } from './components/sub-about/sub-about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
    children:[{
      path: 'subabout/:id',
      component: SubAboutComponent
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{
      path: 'user',
      component: ProfileCardsComponent,
    }]
  },
  {
    path: 'form',
    component: ReactiveFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
