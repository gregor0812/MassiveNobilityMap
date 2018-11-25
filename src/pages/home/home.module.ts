import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {ProvincesPage} from "./provinces";
import {HousesPage} from "./houses";

@NgModule({
  declarations: [
    HomePage,ProvincesPage,HousesPage
  ],
  entryComponents:[HomePage,ProvincesPage,HousesPage],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
