import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciokidPageRoutingModule } from './iniciokid-routing.module';

import { IniciokidPage } from './iniciokid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciokidPageRoutingModule
  ],
  declarations: [IniciokidPage]
})
export class IniciokidPageModule {}
