import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-about',
  templateUrl: './sub-about.component.html',
  styleUrls: ['./sub-about.component.scss']
})
export class SubAboutComponent {
  currId: number = 0;

  constructor(private actvRouter: ActivatedRoute){
    
    this.actvRouter.params.subscribe(param=>{
      this.currId = param['id'];
    });
  };

}
