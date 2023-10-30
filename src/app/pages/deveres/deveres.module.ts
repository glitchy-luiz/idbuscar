import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeveresPageRoutingModule } from './deveres-routing.module';

import { DeveresPage } from './deveres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeveresPageRoutingModule
  ],
  declarations: [DeveresPage]
})
export class DeveresPageModule {}
