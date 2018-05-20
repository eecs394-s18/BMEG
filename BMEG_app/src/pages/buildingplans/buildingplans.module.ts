import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingplansPage } from './buildingplans';

@NgModule({
  declarations: [
    BuildingplansPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingplansPage),
  ],
})
export class BuildingplansPageModule {}
