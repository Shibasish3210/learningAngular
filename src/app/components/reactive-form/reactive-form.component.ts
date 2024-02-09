import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  signUpForm: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl(''),
    adress: new FormGroup({
      city: new FormControl(''),
      dist: new FormControl(''),
      zip: new FormControl('')
    }),
    profession: new FormGroup({
      company: new FormGroup({
        department: new FormControl(''),
        position: new FormControl('')
      })
    }),    
  });

  handleSubmission() : void{
    localStorage.setItem('data', JSON.stringify(this.signUpForm.value));
    this.signUpForm.reset();
  } 
  patchSignUpform(): void {
    this.signUpForm.patchValue({
      name:{
        firstName: 'Shibasish',
        lastName: 'Mondal',
      },
      email: "shibasish3210@gmail.com",
      password: "abc123@!",
      adress: {
        city: 'Hyderabad',
        dist: 'Telengana',
        zip: '500032',
      },
      profession:{
        company:{
          department: 'Software Developement',
          position: 'AMTS-1'
        }
      }

    })
  }

}
