import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {StatisticsPage} from "../statistics/statistics";
import {OrdersPage} from "../orders/orders";

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  statisticsRoot = StatisticsPage
  ordersRoot = OrdersPage


  constructor(public navCtrl: NavController) {}

}
