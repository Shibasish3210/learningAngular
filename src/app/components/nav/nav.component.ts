import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router, public sharedSrvc: SharedService){  }
  deleteUser(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.sharedSrvc.setisLoggedIn(false);
  }

  
}
