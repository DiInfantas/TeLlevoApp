import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacionViPageRoutingModule } from './creacion-vi-routing.module';

import { CreacionViPage } from './creacion-vi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacionViPageRoutingModule
  ],
  declarations: [CreacionViPage]
})
export class CreacionViPageModule {}
