import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoVehiPageRoutingModule } from './ingreso-vehi-routing.module';

import { IngresoVehiPage } from './ingreso-vehi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoVehiPageRoutingModule
  ],
  declarations: [IngresoVehiPage]
})
export class IngresoVehiPageModule {}
