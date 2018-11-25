import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AngularFireDatabase} from "angularfire2/database";
import {map} from "rxjs/internal/operators";
import 'rxjs/add/operator/take';


export interface Config {
  house_id: number;
  house_name: string;
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
  public config: Config;


  /**
   * @name columns
   * @type {any}
   * @public
   * @description     Defines an object for storing the column definitions of the datatable
   */
  public columns: any;

  /**
   * @name rows
   * @type {any}
   * @public
   * @description     Defines an object for storing returned data to be displayed in the template
   */
  public rows: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _HTTP: HttpClient, public db: AngularFireDatabase) {
    this.columns = [
      {prop: 'house_name'},
      {name: 'house_id'},
      {name: 'manpower'},
      {name: 'Tax'},
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
  ionViewDidLoad(): void {

    let subscription = this.db.list('houses').valueChanges().take(1).pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(res => {
      res.forEach(key => {
        let tax: number =0;
        let manpower: number = 0;

        let obj;
        obj = Object.assign({}, key);
        let id;
        id = obj.house_id;

        this.db.list('provinces', ref => ref.orderByChild('house_id').equalTo(obj.house_id)).valueChanges().pipe(map(res => {
          return res.map(eachlLabel => eachlLabel)
        })).subscribe(res => {
          res.forEach(key => {
            let obj2;
            obj2 = Object.assign({}, key);
            tax = (tax + obj2.tax);
            manpower = (manpower + obj2.manpower);
          });
        });



      });

      this.rows = res;
      subscription.unsubscribe();
    });

  }
}
