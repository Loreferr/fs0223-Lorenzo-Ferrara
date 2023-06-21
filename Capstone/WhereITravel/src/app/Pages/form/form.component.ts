import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent {
  personality: string = ''
  age: number = 0
  budget: number = 0
  destination: string = ''
  constructor(private router: Router){}

  onFormSubmit() {
    if (this.personality === 'avventuroso') {
      if (this.age < 30) {
        this.destination = 'Montagna';
      } else {
        this.destination = 'Spiaggia';
      }
    } else if (this.personality === 'cultura') {
      if (this.age < 30) {
        this.destination = 'Città storiche';
      } else {
        this.destination = 'Musei';
      }
    } else {
      this.destination = 'Destinazione generica';
    }


    this.router.navigate(['results'], { queryParams: { destination: this.destination } });
  }


}
