import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecsenhaPage } from './recsenha.page';

const routes: Routes = [
  {
    path: '',
    component: RecsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecsenhaPageRoutingModule {}
