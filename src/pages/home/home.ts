import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, Toast, ToastController} from 'ionic-angular';
import  'anychart';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase";

let map = anychart.map();
let houseData;
let tradeData;
let lordshipData;
let houseColourArray;
let tradeColourArray;
let lordshipColourArray;
let data = [];
let dataSet = anychart.data.set(data);
let toastcontroller;
let clicked = true;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public db: AngularFireDatabase, public toastCtrl: ToastController) {
    toastcontroller = toastCtrl;
    var items: Observable<any[]>;
    items = db.list('provinces').valueChanges();
    var firstload: boolean;
    firstload = false;
    items.subscribe(function () {
      map.removeAllSeries();
      reload();
      function reload(){
        if (firstload){
          location.reload();
        } else {
          firstload = !firstload;
        }
      }
    });

    items.forEach(key =>{
key.map(value =>{
  let obj;
  obj = Object.assign({},value);
  dataSet.append({
    'id': obj.id,
    'name': obj.name,
    'manpower':obj.manpower,
    'tax':obj.tax,
    'house':obj.house,
    'house_id':obj.house_id,
    'goods_id':obj.goods_id,
    'goods_name':obj.goods_name,
    'ldshp_name':obj.ldshp_name,
    'ldshp_id':obj.ldshp_id,
    'capital':obj.capital,
    'desc': obj.desc});

});
    });

    //Define colour ranges
    houseColourArray = anychart.scales.ordinalColor([
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
    houseColourArray.colors([
      '#ffffff',//0
      '#39479f',//1
      '#326b89',//2
      '#c49989',//3
      '#84b588',//4
      '#6c98cd',//5
      '#895d2e',//6
      '#997eb1',//7
      '#847755',//8
      '#bf4b4b',//9
      '#4c5746',//10
      '#58887c',//11
      '#cb90a4',//12
      '#89734c',//13
      '#624e45',//14
      '#ba9c80',//15
      '#99775e',//16
      '#62817b',//17
      '#7564e4',//18
      '#c6b26b',//19
      '#58685e',//20
      '#b8976a',//21
      '#959b5b',//22
      '#9b4e83',//23
      '#444444',//24
      '#998084',//25
      '#947684',//26
      '#c2784b',//27
      '#812b2c',//28
      '#526d42',//29
      '#526d42',//30
      '#ca863d',//31
      '#93ccc1',//32
      '#5f4bc6',//33
      '#c0a742',//34
      '#994b4b',//35
      '#744688',//36
      '#815353',//37
      '#6b7d89',//38
      '#7fc4bf',//39
      '#8f0f0d',//40
      '#61cad1',//41
      '#eda7ff',//42
      '#af3290',//43
      '#89a678',//44
      '#474a73',//45
      '#528177',//46
      '#ab838c',//47
      '#76d8bf',//48
      '#5f8e6e',//49
      '#8a9962',//50
      '#61a63b',//51
      '#3e9bc6',//52
      '#719e8a',//53
    ]);
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
      anychart.data.loadJsonFile("./assets/map/RegaliaMap.geojson",function (data) {
        map.geoData(data);

      });

      //Load in province dataset


      //  dataProvider.setData(data);


      //Map province click listener
      //Draw map
      var interactivity: anychart.core.utils.MapInteractivity;
      interactivity = (map.interactivity() as anychart.core.utils.MapInteractivity);
      interactivity.zoomOnMouseWheel(true);

      map.background().fill("lightblue");
      map.container('container');
      map.contextMenu(true);
      map.draw(true);
     // map.autoRedraw(true);
    });


    houseData = dataSet.mapAs({'value': 'house_id'});
    tradeData = dataSet.mapAs({'value': 'goods_id'});
    lordshipData = dataSet.mapAs({'value':'ldshp_id'});
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
}
  public  toggleLabels() {
    toggle();

    function toggle(){
      console.log(clicked.valueOf());
      clicked = !clicked;
      if (clicked) {
        map.labels(true);
      }
      else {
        map.labels(false);
      }


    }
  }
  //Toggle between mapmodes
  public mapModeToggle(number: Number): void  {
  console.log("toggle");
  map.removeAllSeries();

  if (number == 1) {
    let series = map.choropleth(houseData);
    series.colorScale(houseColourArray);
    series.tooltip().useHtml(true).format(function () {
      return '<span style="color: #d9d9d9">House</span>: ' +
        this.getData('house').toLocaleString() + '<br/>' +
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
    series.listen('pointClick', function (e:any )  {
      try {
        toast.dismiss();
      } catch(e) {}

      toast = toastcontroller.create({
        message: (e.point.get('desc')),
        position: 'bottom',
        showCloseButton: true,

      });

      toast.present();
    });
  }

  if (number == 2) {
    let series2 = map.choropleth(tradeData);
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
    let series3 = map.choropleth(lordshipData);
    series3.colorScale(lordshipColourArray);
    series3.tooltip().useHtml(true).format(function () {
      return '<span style="color: #d9d9d9">Lordship</span>: ' +
        this.getData('ldshp_name').toLocaleString() + '<br/>'

    });
  }

}
}


