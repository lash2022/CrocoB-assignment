import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import { IUser } from 'src/app/core/interfaces/iuser';

import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
})
export class UserpageComponent {
    userId: any;
    user$ = this.route.params.pipe(
    switchMap(params => {
      return this.usersService.getUser(params['id']);

    })
  ) as Observable<IUser>


    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService
    ){}


}
