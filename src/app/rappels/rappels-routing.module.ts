import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RappelsPage } from './rappels.page';

const routes: Routes = [
  {
    path: '',
    component: RappelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RappelsPageRoutingModule {}
