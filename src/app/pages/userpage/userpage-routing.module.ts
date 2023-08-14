import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./userpage.component";
import {UserpostsComponent} from "./userposts/userposts.component";

const routes: Routes = [
  {
    path: ':id',
    component: UserpageComponent,
  },
  {
    path: ':id/posts',
    component: UserpostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
