import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isLoggedIn: boolean = !!localStorage.getItem('name') || false;

  getisLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setisLoggedIn(value:boolean): void{
    this.isLoggedIn = value;
  }


}
