import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

type UserData = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})




export class ProfileCardsComponent {
  
  userDetails: any = null;
  subs: Subscription[] = [];

  constructor(private apiSrvc: ApiService){}

  getUserData():void{
    const subscribedCall = this.apiSrvc.getUserData().subscribe({
      next: (data:any) =>{
        this.userDetails = data.results[0];
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
