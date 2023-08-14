import {Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  users$:any = this.usersService.getUsers();

  


  constructor(
    private usersService: UsersService
  ) {}


}
