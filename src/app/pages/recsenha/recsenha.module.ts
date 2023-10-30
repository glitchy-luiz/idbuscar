import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecsenhaPageRoutingModule } from './recsenha-routing.module';

import { RecsenhaPage } from './recsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecsenhaPageRoutingModule
  ],
  declarations: [RecsenhaPage]
})
export class RecsenhaPageModule {}
