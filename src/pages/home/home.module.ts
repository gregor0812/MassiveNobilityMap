import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {ProvincesPage} from "./provinces";

@NgModule({
  declarations: [
    HomePage,ProvincesPage
  ],
  entryComponents:[HomePage,ProvincesPage],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
