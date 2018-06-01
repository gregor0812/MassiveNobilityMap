import {Component} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, Toast, ToastController} from 'ionic-angular';
import 'anychart';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "angularfire2/database";
import {map} from "rxjs/operators";
import {ProvincesPage} from "./provinces";
import {LoginPage} from '../login/login.page';
import {AuthService} from "../../providers/auth.service";


let regaliaMap = anychart.map();
let houseData;
let tradeData;
let lordshipData;
let houseColourArray;
let tradeColourArray;
let lordshipColourArray;
let data = [];
let houseNames;
let toastcontroller;
let actionsheetController;
let clicked = false;
let navController;
let database;
let authentication;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public db: AngularFireDatabase,private auth: AuthService, public toastCtrl: ToastController,public actionSheetCtrl: ActionSheetController) {
    authentication = auth;
  database = db;
  houseNames = [];
    toastcontroller = toastCtrl;
    actionsheetController = actionSheetCtrl;
    navController = navCtrl;

    let dataSet = anychart.data.set(data);
    db.list('provinces').valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(res => {
      dataSet.data(res);
      console.log(res);
      houseData = dataSet.mapAs({'value': 'house_id'});
      tradeData = dataSet.mapAs({'value': 'goods_id'});
      lordshipData = dataSet.mapAs({'value': 'ldshp_id'});
    });
    let items2: any[] = [];
    let houseList = [{'from': 0, 'to': 0}];
    let colourList = ["#ffffff"];
    db.list('houses').valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(res => {
      console.log(res);
      items2 = res;
      items2.forEach(key => {
        let obj;
        obj = Object.assign({}, key);
        houseList.push({
          'from': obj.house_id,
          'to': obj.house_id
        });
        houseNames.push(obj.house_name);
        colourList.push(obj.house_colour);

      });
      console.log(houseNames);
      console.log(houseList);
      console.log(colourList);
      houseColourArray = anychart.scales.ordinalColor(houseList);
      houseColourArray.colors(colourList);

    });

  }

  // Prompt mapmode selection for first use
  // noinspection JSUnusedGlobalSymbols
  ionViewDidLoad(): void {
    let alert = this.alertCtrl.create({
      title: 'Select mapmode',
      inputs: [
        {
          type: 'radio',
          label: 'Political',
          value: '1',
          checked: true
        },
        {
          type: 'radio',
          label: 'Economic',
          value: '2'
        },
        {
          type: 'radio',
          label: 'Lordship',
          value: '3'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: (data: Number) => {
            this.mapModeToggle(data);
          }
        }
      ]
    });
    alert.present();

    tradeColourArray = anychart.scales.ordinalColor([
      {from: 0, to: 0},
      {from: 1, to: 1},
      {from: 2, to: 2},
      {from: 3, to: 3},
      {from: 4, to: 4},
      {from: 5, to: 5},
      {from: 6, to: 6},
      {from: 7, to: 7},
      {from: 8, to: 8},
      {from: 9, to: 9},
      {from: 10, to: 10},
      {from: 11, to: 11},
      {from: 12, to: 12},
      {from: 13, to: 13},
      {from: 14, to: 14},
      {from: 15, to: 15},
      {from: 16, to: 16},
      {from: 17, to: 17},
      {from: 18, to: 18},
      {from: 19, to: 19},
      {from: 20, to: 20},
      {from: 21, to: 21},
      {from: 22, to: 22},
      {from: 23, to: 23},
      {from: 24, to: 24},
      {from: 25, to: 25},
      {from: 26, to: 26},
      {from: 27, to: 27},
      {from: 28, to: 28},
      {from: 29, to: 29},
      {from: 30, to: 30},
      {from: 31, to: 31},
      {from: 32, to: 32},
      {from: 33, to: 33},
      {from: 34, to: 34},
      {from: 35, to: 35},
      {from: 36, to: 36},
      {from: 37, to: 37},
      {from: 38, to: 38},
      {from: 39, to: 39},
      {from: 40, to: 40},
      {from: 41, to: 41},
      {from: 42, to: 42},
      {from: 43, to: 43},
      {from: 44, to: 44},
      {from: 45, to: 45},
      {from: 46, to: 46},
      {from: 47, to: 47},
      {from: 48, to: 48},
      {from: 49, to: 49},
      {from: 50, to: 50},
      {from: 51, to: 51},
      {from: 52, to: 52},
      {from: 53, to: 53},
    ]);
    lordshipColourArray = anychart.scales.ordinalColor([
      {from: 0, to: 0},
      {from: 1, to: 1},
      {from: 2, to: 2},
      {from: 3, to: 3},
      {from: 4, to: 4},
      {from: 5, to: 5},
      {from: 6, to: 6},
      {from: 7, to: 7},
      {from: 8, to: 8},
      {from: 9, to: 9},
      {from: 10, to: 10},
      {from: 11, to: 11},
      {from: 12, to: 12},
      {from: 13, to: 13},
      {from: 14, to: 14},
      {from: 15, to: 15},
      {from: 16, to: 16},
      {from: 17, to: 17},
      {from: 18, to: 18},
      {from: 19, to: 19},
      {from: 20, to: 20},
      {from: 21, to: 21},
      {from: 22, to: 22},
      {from: 23, to: 23},
      {from: 24, to: 24},
      {from: 25, to: 25},
      {from: 26, to: 26},
      {from: 27, to: 27},
      {from: 28, to: 28},
      {from: 29, to: 29},
      {from: 30, to: 30},
      {from: 31, to: 31},
      {from: 32, to: 32},
      {from: 33, to: 33},
      {from: 34, to: 34},
      {from: 35, to: 35},
      {from: 36, to: 36},
      {from: 37, to: 37},
      {from: 38, to: 38},
      {from: 39, to: 39},
      {from: 40, to: 40},
      {from: 41, to: 41},
      {from: 42, to: 42},
      {from: 43, to: 43},
      {from: 44, to: 44},
      {from: 45, to: 45},
      {from: 46, to: 46},
      {from: 47, to: 47},
      {from: 48, to: 48},
      {from: 49, to: 49},
      {from: 50, to: 50},
      {from: 51, to: 51},
      {from: 52, to: 52},
      {from: 53, to: 53},
    ]);
    //Define colours to ranges

    tradeColourArray.colors([
      '#ffffff',//0
      '#c9d2a7',//1
      '#addeda',//2
      '#6e6786',//3
      '#645da1',//4
      '#e9e9e9',//5
      '#b8a956',//6
      '#a3a3a3',//7
      '#6a9375',//8
      '#000000',//9
      '#ce896a',//10
      '#be9ecd',//11
      '#8b6f98',//12
      '#c9c9c9',//13
      '#d3ea68',//14
      '#aea057',//15
      '#84d0b6',//16
      '#87695e',//17
      '#74836e',//18
      '#91b683',//19
      '#8a9a51',//20
      '#929da3',//21
      '#516657',//22
      '#78bfd3',//23

    ]);
    lordshipColourArray.colors([
      '#ffffff',//0
      '#43379a',//1
      '#877be2',//2
      '#5246b5',//3
      '#5246b5',//4
      '#6251e5',//5
      '#d4453b',//6
      '#dc17fd',//7
      '#b883b8',//8
      '#e5b4e5',//9
      '#b79bc9',//10
      '#cd83cd',//11
      '#ae6aad',//12
      '#9d835a',//13
      '#b19e81',//14
      '#cdb48b',//15
      '#a35376',//16
      '#c2d191',//17
      '#7e86a7',//18
      '#b55b82',//19
      '#717db1',//20
      '#b0bf7e',//21
      '#638b5e',//22
      '#588b51',//23
      '#43763e',//24
      '#4c9d42',//25
      '#9f6b6b',//26
      '#629d5a',//27
      '#6eaea4',//28
      '#93d9cf',//29
      '#6695a0',//30
      '#7ac6ba',//31

    ]);

    //Initialize map and data
    anychart.onDocumentReady(function () {
      //Load in Map geodata
      anychart.data.loadJsonFile("./assets/map/RegaliaGeoData.geojson", function (data) {
        regaliaMap.geoData(data);

      });

      //Load in province dataset


      //  dataProvider.setData(data);


      //Map province click listener
      //Draw map
      var interactivity: anychart.core.utils.MapInteractivity;
      interactivity = (regaliaMap.interactivity() as anychart.core.utils.MapInteractivity);
      interactivity.zoomOnMouseWheel(true);

      regaliaMap.background().fill("lightblue");
      regaliaMap.container('container');
      regaliaMap.contextMenu(true);
      regaliaMap.draw(true);
    });


  }

  public toggleLabels() {
    toggle();

    function toggle() {
      console.log(clicked.valueOf());
      clicked = !clicked;
      if (clicked) {
        regaliaMap.labels(true);
      }
      else {
        regaliaMap.labels(false);
      }


    }
  }

  //Toggle between mapmodes
  public mapModeToggle(number: Number): void {
    console.log("toggle");
    regaliaMap.removeAllSeries();


    if (number == 1) {
      let series = regaliaMap.choropleth(houseData);
      series.colorScale(houseColourArray);
      series.tooltip().useHtml(true).format(function () {
        var int;
        int = this.getData('house_id');
        return '<span style="color: #d9d9d9">House</span>: ' +
           houseNames[int-1]+'<br/>' +
          '<span style="color: #d9d9d9">Base Tax</span>: ' +
          parseInt(this.getData('tax')).toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">Manpower</span>: ' +
          parseInt(this.getData('manpower')).toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">Capital</span>: ' +
          this.getData('capital').toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">Province ID</span>: ' +
          parseInt(this.getData('id')).toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">House ID</span>: ' +
          parseInt(this.getData('house_id')).toLocaleString()
      });

      let toast: Toast;
      /*series.listen('pointClick', function (e: any) {
        console.log(e);
        toast = toastcontroller.create({
          message: (e.point.get('desc')),
          position: 'bottom',
          showCloseButton: true,

        });

        toast.present();
      });*/

series.listen('pointDblClick', function (e: any) {
if (authentication.getEmail() == 'mikey0812@gmail.com' ||authentication.getEmail() == 'monmarty@gmail.com'){
  let actionSheet = actionsheetController.create({
    title: (e.point.get('name')),
    buttons: [
      {
        text: 'Edit Province ',
        handler: () => {
          navController.push(ProvincesPage,{
            id: e.point.get('id'),
            name: e.point.get('name'),
            house: e.point.get('house_id'),
            tax: e.point.get('tax'),
            desc: e.point.get('desc'),
            manpower: e.point.get('manpower'),

          });
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      }
    ]
  });
  actionSheet.present();

}


})
    }

    if (number == 2) {
      let series2 = regaliaMap.choropleth(tradeData);
      series2.colorScale(tradeColourArray);
      series2.tooltip().useHtml(true).format(function () {
        return '<span style="color: #d9d9d9">House</span>: ' +
          this.getData('house').toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">Trade Good</span>: ' +
          this.getData('goods_name').toLocaleString() + '<br/>' +
          '<span style="color: #d9d9d9">Tradegood ID</span>: ' +
          parseInt(this.getData('goods_id')).toLocaleString()
      });
    }
    if (number == 3) {
      let series3 = regaliaMap.choropleth(lordshipData);
      series3.colorScale(lordshipColourArray);
      series3.tooltip().useHtml(true).format(function () {
        return '<span style="color: #d9d9d9">Lordship</span>: ' +
          this.getData('ldshp_name').toLocaleString() + '<br/>'

      });
    }

  }

  login() {
navController.push(LoginPage)
  }

  logout() {
    authentication.signOut();
  }
}


