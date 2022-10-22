import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RappelsPageRoutingModule } from './rappels-routing.module';

import { RappelsPage } from './rappels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RappelsPageRoutingModule
  ],
  declarations: [RappelsPage]
})
export class RappelsPageModule {}
