import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniversitiesCollectionPage } from './universities-collection';

@NgModule({
  declarations: [
    UniversitiesCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(UniversitiesCollectionPage),
  ],
})
export class UniversitiesCollectionPageModule {}
