import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask4Page } from './labtask4.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask4PageRoutingModule {}
