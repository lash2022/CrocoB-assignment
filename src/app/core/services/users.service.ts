import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/iuser";
import {IPosts} from "../interfaces/iposts";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  getUsers(): Observable<IUser> {
    return this.get<IUser>('users');
  }

  getUser(id: number): Observable<IUser> {
    return this.get<IUser>(`users/${id}`);
  }

  getUserPosts(id: number): Observable<IPosts> {
      return this.get<IPosts>(`users/${id}/posts`);
  }

}
