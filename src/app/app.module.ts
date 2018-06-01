import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";
import {TabsPage} from "../pages/tabs/tabs";
import {StatisticsPage} from "../pages/statistics/statistics";
import {OrdersPage} from "../pages/orders/orders";
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environment";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {HomePageModule} from "../pages/home/home.module";
import {ResetPasswordPage} from "../pages/reset-password/reset-password.page";
import {LoginPage} from "../pages/login/login.page";
import {SignupPage} from "../pages/signup/signup.page";
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {AuthService} from "../providers/auth.service";
import {AngularFireAuth} from "angularfire2/auth";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    StatisticsPage,
    OrdersPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,



  ],
  imports: [
    HomePageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxDatatableModule,
    HttpClientModule,
    NgxErrorsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StatisticsPage,
    OrdersPage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    AuthService,
    AngularFireAuth,
    AngularFireDatabase,
  ]
})
export class AppModule {}
