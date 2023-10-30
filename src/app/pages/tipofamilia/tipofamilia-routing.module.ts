import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipofamiliaPage } from './tipofamilia.page';

const routes: Routes = [
  {
    path: '',
    component: TipofamiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipofamiliaPageRoutingModule {}
