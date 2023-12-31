import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassrecPageRoutingModule } from './passrec-routing.module';

import { PassrecPage } from './passrec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassrecPageRoutingModule
  ],
  declarations: [PassrecPage]
})
export class PassrecPageModule {}
