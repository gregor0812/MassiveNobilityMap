import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

export interface Config {
  technologies: string;
}

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  /**
   * @name config
   * @type {any}
   * @public
   * @description     Defines an object allowing the interface properties to be accessed
   */
  public config : Config;




  /**
   * @name columns
   * @type {any}
   * @public
   * @description     Defines an object for storing the column definitions of the datatable
   */
  public columns : any;

  /**
   * @name rows
   * @type {any}
   * @public
   * @description     Defines an object for storing returned data to be displayed in the template
   */
  public rows : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _HTTP: HttpClient) {
    this.columns = [
      { prop: 'House' },
      { name: 'Land capacity' },
      { name: 'Current troops' },
      { name: 'Naval capacity' },
      { name: 'Current ships' },
      { name: 'Weekly Income' },
    ];
  }

  /**
   * Retrieve the technologies.json file (supplying the data type, via
   * the config property of the interface object, to 'instruct' Angular
   * on the 'shape' of the object returned in the observable and how to
   * parse that)
   *
   * @public
   * @method ionViewDidLoad
   * @return {none}
   */
  ionViewDidLoad() : void
  {


  }

}
