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
      var kade = [
        {'id': '15', 'value': 300},
        {'id': '200', 'value': 730},
        {'id': '362', 'value': 230},
      ];
      var Ivrae = [
        {'id': '29', 'value': 300},
        {'id': '88', 'value': 730},
        {'id': '188', 'value': 230},
        {'id': '231', 'value': 300},
        {'id': '247', 'value': 730},
        {'id': '312', 'value': 300},
        {'id': '340', 'value': 730},
        {'id': '342', 'value': 230},



      ];
      var di_alan = [
        {'id': '33', 'value': 400},
        {'id': '66', 'value': 400},
        {'id': '102', 'value': 400},
        {'id': '133', 'value': 400},
        {'id': '153', 'value': 400},
        {'id': '155', 'value': 400},
        {'id': '171', 'value': 400},
        {'id': '209', 'value': 400},
        {'id': '217', 'value': 400},
        {'id': '248', 'value': 400},
        {'id': '279', 'value': 400},
        {'id': '360', 'value': 400},
      ];
      var de_Paquet = [
        {'id': 'Scarrais', 'value': 400},
        {'id': 'Shorois', 'value': 400},
        {'id': 'Baste-Caerillion', 'value': 400},
        {'id': 'Perlive', 'value': 400},
        {'id': 'Bittre-Mosais', 'value': 400},
        {'id': 'Couldevonne', 'value': 400},
        {'id': 'Rebarconne', 'value': 400},
        {'id': 'Resentois', 'value': 400},
      ];

      var d_Aruele = [
        {'id': 'Helais', 'value': 400},
        {'id': 'Laicer', 'value': 400},
        {'id': 'Saint-Etruve', 'value': 400},
        {'id': 'Saint-Claivont', 'value': 400},
        {'id': 'Ile-de-Borrois', 'value': 400},
        {'id': 'Ile-de-Cancois', 'value': 400},
        {'id': 'Ile-de-Morvois', 'value': 400},
      ];
      var de_Gosselin = [
        {'id': 'Saint-Etoile', 'value': 400},
        {'id': 'Saint-Mirais', 'value': 400},
        {'id': 'Accru', 'value': 400},
        {'id': 'Saint-Lumierz', 'value': 400},
      ];

      var map = anychart.map();
      /*var localData = http.get("path");
      localData.subscribe( data => {
        this.geoData = data.json();
      });
      */
      http.get("./assets/map/Version_7.geojson").subscribe(data => {
        map.geoData(data);
        var series = map.choropleth(Ivrae);
        series.name("Ivrae");
        series.hovered().hovered()
          .stroke(series.stroke())
          .fill(series.fill());
        series.fill("pink")
        // disable labels
        series.labels(true);
        var series2 = map.choropleth(di_alan);
        series2.name("di_alan");
        series2.labels(true);
        series2.fill("green")
        var series3 = map.choropleth(kade);
        series3.name("Kade");
        series3.labels(true);
        series3.fill("purple");
        map.legend(true);
        var series4 = map.choropleth(de_Paquet);
        series4.name("De Paquet");
        series4.labels(true);
        map.legend(true);
        var series5 = map.choropleth(d_Aruele);
        series5.name("d'Aruele");
        series5.labels(true);
        map.legend(true);
        var series6 = map.choropleth(de_Gosselin);
        series6.name("de Gosselin");
        series6.labels(true);
        map.legend(true);

      });

      // set the series



      // set the container
      map.background().fill("lightblue")
      map.container('container');
      map.draw();
    });

  }

  public getJSON(): Observable<any>{
    return this.http.get("./assets/map/test.geojson");
  }

}
