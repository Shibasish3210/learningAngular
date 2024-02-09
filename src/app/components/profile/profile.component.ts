import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userData: {} = {}
  subs: Subscription[] = [];
  constructor(public apiSrvc: ApiService){}
  
  getUserData():void{
    const subscribedCall = this.apiSrvc.getUserData().subscribe({
      next: (data:any) =>{
        this.userData = data.results[0];
        console.log(data, this.userData);
      },
      error: (err:string) =>{
        console.log(err);
      }
    });
    
    this.subs.push(subscribedCall);
  }
  
  
  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  
}
