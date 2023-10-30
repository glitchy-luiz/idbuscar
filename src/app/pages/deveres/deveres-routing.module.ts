import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveresPage } from './deveres.page';

const routes: Routes = [
  {
    path: '',
    component: DeveresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveresPageRoutingModule {}
