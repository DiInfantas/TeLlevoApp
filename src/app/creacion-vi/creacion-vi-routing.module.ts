import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacionViPage } from './creacion-vi.page';

const routes: Routes = [
  {
    path: '',
    component: CreacionViPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacionViPageRoutingModule {}
