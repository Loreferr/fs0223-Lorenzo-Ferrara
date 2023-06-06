import { Component } from '@angular/core';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent {
  hero1 = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  };

  hero2 = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  };

  submitForm(form: any) {
    if (form.valid) {
      console.log('Dati inviati:', form.value);
      // Aggiungi qui la logica per salvare il supereroe
    }
  }
}
