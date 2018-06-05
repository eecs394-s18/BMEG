import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegionsurveyPage } from '../regionsurvey/regionsurvey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  search(){

      this.navCtrl.setRoot( RegionsurveyPage );
  }
}
