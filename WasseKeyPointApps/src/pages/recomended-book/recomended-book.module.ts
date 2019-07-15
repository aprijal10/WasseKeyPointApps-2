import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecomendedBookPage } from './recomended-book';

@NgModule({
  declarations: [
    RecomendedBookPage,
  ],
  imports: [
    IonicPageModule.forChild(RecomendedBookPage),
  ],
})
export class RecomendedBookPageModule {}
