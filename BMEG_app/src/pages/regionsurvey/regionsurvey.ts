import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search'

/**
 * Generated class for the RegionsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regionsurvey',
  templateUrl: 'regionsurvey.html',
})
export class RegionsurveyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionsurveyPage');
  }

  findmaterials() {
  	this.navCtrl.push(SearchPage);
  }

}
