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
  selector: 'page-houses',
  templateUrl: 'houses.html',
})
export class HousesPage {
  items;
  selectedvalue: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.items = db.list('houses').valueChanges();


  }
  ionViewDidLoad() {
  }

  createHouse(name,id,colour){
    let _name = name;
    let _id = Number(id);
    let _colour = colour;

    const itemRef = this.db.object('houses/'+id);
    itemRef.update({house_name: _name});
    itemRef.update({house_id: _id});
    itemRef.update({house_colour: _colour});

    this.navCtrl.pop();

  }
}
