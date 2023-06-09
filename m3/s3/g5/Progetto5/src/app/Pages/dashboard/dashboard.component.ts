import { Component } from '@angular/core';
import { User } from 'src/app/Interface/user';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  UserArr:User[] = [];
  constructor(private _userService: DashboardService){

  }

  ngOnInit(): void {

    this._userService.get().subscribe(res => {
      return this.UserArr = res;

    })
  }
  deleteUser(user: User): void {
    this._userService.delete(user.id).subscribe(
      response => {
        console.log(response);
        const index = this.UserArr.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.UserArr.splice(index, 1);
        }
      },
      error => {
        console.log(error);
      }
    );
  }


  changeMail(email: string): void {
    const newEmail = prompt('Modifica la Mail:');
    if (newEmail) {
      const userToUpdate = this.UserArr.find(u => u.email === email);
      if (userToUpdate) {
        userToUpdate.email = newEmail;
        this._userService.put(userToUpdate).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        )
      }
    }
  }




}
