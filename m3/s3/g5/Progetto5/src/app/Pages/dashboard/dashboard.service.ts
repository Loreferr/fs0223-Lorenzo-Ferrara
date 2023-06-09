import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Interface/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl:string = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }


  get(){
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  post(user:User){
    return this.http.post<User>(this.apiUrl,user);
  }

  put(user:User){

    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }

  delete(id:number){

    return this.http.delete(this.apiUrl + '/users/' + id);
  }

}
