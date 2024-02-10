import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private router: Router){};
  redirectTo(num: number): void {
    // this.router.navigateByUrl(`/about/subabout/${num}`);
    this.router.navigate([`/about/subabout/`, num]);
  }

  
}
