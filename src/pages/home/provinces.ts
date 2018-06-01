import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Rx";

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-provinces',
  templateUrl: 'provinces.html',
})
export class ProvincesPage {
  items;
  selectedvalue: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.items = db.list('houses').valueChanges();


  }
  ionViewDidLoad() {
  }

  updateProvince(id,desc,house,tax,manpower){
console.log("id: "+id);
    console.log("desc: "+desc);
    console.log("house: "+house);
    console.log("tax: "+tax);
    console.log("manpower: "+manpower);

    const itemRef = this.db.object('provinces/'+id);
    itemRef.update({desc: desc});
    itemRef.update({house_id: house});
    itemRef.update({tax: tax});
    itemRef.update({manpower: manpower});
    this.navCtrl.pop();

}
}
