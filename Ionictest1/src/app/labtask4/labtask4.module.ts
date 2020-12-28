import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask4PageRoutingModule } from './labtask4-routing.module';

import { Labtask4Page } from './labtask4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask4PageRoutingModule
  ],
  declarations: [Labtask4Page]
})
export class Labtask4PageModule {}
