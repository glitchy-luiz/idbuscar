import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipofamiliaPageRoutingModule } from './tipofamilia-routing.module';

import { TipofamiliaPage } from './tipofamilia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipofamiliaPageRoutingModule
  ],
  declarations: [TipofamiliaPage]
})
export class TipofamiliaPageModule {}
