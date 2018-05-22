/// <reference types="anychart" />
import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import  'anychart';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  geoData: any = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {

    anychart.onDocumentReady(function () {


      var map = anychart.map();
      /*var localData = http.get("path");
      localData.subscribe( data => {
        this.geoData = data.json();
      });
      */
      anychart.data.loadJsonFile("./assets/map/RegaliaMap.geojson",function (data) {
        anychart.data.loadJsonFile("./assets/map/provinces.json",function (data) {
          var dataSet = anychart.data.set(data);
          var houseData = dataSet.mapAs({'value': 'house_id'});
          var series = map.choropleth(houseData);
          var houseColourArray = anychart.scales.ordinalColor([
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
          houseColourArray.colors([
            '#ffffff',//0
            '#39479f',//1
            '#326b89',//2
            '#c49989',//3
            '#84b588',//4
            '#E6B333',//5 //PLACEHOLDER
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
            '#4D8000',//22 //PLACEHOLDER
            '#9b4e83',//23
            '#444444',//24
            '#998084',//25
            '#947684',//26
            '#c2784b',//27
            '#812b2c',//28
            '#526d42',//29
            '#526d42',//30
            '#ca863d',//31 //PLACEHOLDER
            '#93ccc1',//32
            '#5f4bc6',//33
            '#c0a742',//34
            '#994b4b',//35
            '#744688',//36
            '#815353',//37
            '#6b7d89',//38
            '#6b7d89',//39 //PLACEHOLDER
            '#FF3380',//40 // PLACEHOLDER
            '#CCCC00',//41 //PLACEHOLDER
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
          series.colorScale(houseColourArray);
          series.tooltip().useHtml(true).format(function () {
            return '<span style="color: #d9d9d9">House</span>: ' +
              this.getData('house').toLocaleString() + '<br/>' +
              '<span style="color: #d9d9d9">Base Tax</span>: ' +
              parseInt(this.getData('tax')).toLocaleString() + '<br/>' +
              '<span style="color: #d9d9d9">Manpower</span>: ' +
              parseInt(this.getData('manpower')).toLocaleString()
          });
        });
      });
      map.background().fill("lightblue")
      map.container('container');
      map.draw();
    });
  }
}
