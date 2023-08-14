import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.scss']
})
export class UserpostsComponent {

  userId: any;
  posts$:any = this.route.params.pipe(
    switchMap(params => {
      return this.usersService.getUserPosts(params['id']);
    })
  ) as Observable<any>
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  /*ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
    })


  }*/

}
