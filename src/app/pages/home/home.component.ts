import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  state = {
    firstName: '',
    lastName: ''
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  setState(obj: Object) : void {
    this.state = {...this.state, ...obj}
  }

  onKey(event: any) {
    let inputName = event.target.getAttribute('formcontrolname');
    let inputValue = event.target.value;
    let updatedState = {
      [inputName]: inputValue
    }

    this.setState(updatedState);
  }

  onSubmit(event: any) {
    console.log(this.profileForm.value);
  }
 


}
