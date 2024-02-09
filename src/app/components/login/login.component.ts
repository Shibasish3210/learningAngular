import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, public sharedSrvc: SharedService){}

  name: string = '';
  role: string ='';

  saveUser(name: string, role:string): void {
    if(!name || !role) return;
    if(!localStorage.getItem('name')){
      localStorage.setItem('name', name);
    }
    if(!localStorage.getItem('role')){
      localStorage.setItem('role', role);
    }
    this.name = '';
    this.role = '';
    this.sharedSrvc.setisLoggedIn(true);
    this.router.navigateByUrl('/');
  }
}
