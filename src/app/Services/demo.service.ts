import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private ourClient:HttpClient) { }

  //  BaseUrl = "https://jsonplaceholder.typicode.com/users";
  BaseUrl = "http://localhost:3000/Users";

  GetAllUsers(){
    return this.ourClient.get(this.BaseUrl);
  }

  GetUserById(id:number){
    return this.ourClient.get(this.BaseUrl+"/"+id);
  }

  newuser(user:{name:string, phone:string, email:string, street: string, city:string}){
    return this.ourClient.post(this.BaseUrl, user);
  }

  updateuser(id:number, user:{name:string, phone:string, email:string, street: string, city:string}){
    return this.ourClient.put(`${this.BaseUrl}/${id}`,user);
  }

  deleteUser(id:number){
    return this.ourClient.delete(`${this.BaseUrl}/${id}`);
  }

}
