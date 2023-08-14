import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import {RouterModule} from "@angular/router";
import { UserpostsComponent } from './userposts/userposts.component';
import { PostCardComponent } from './userposts/post-card/post-card.component';
import { UserpageComponent } from './userpage.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [UserpostsComponent, PostCardComponent, UserpageComponent],
    imports: [
        CommonModule,
        UserpageRoutingModule,
        RouterModule,
        SharedModule,
    ]
})
export class UserpageModule { }
