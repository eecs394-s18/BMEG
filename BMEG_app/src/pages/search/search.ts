import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultsPage } from '../results/results'

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
    public materials:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.materials = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

  }

  search() {
      console.log('search');
      console.log(this.materials);
      this.navCtrl.push(ResultsPage, {materials: this.materials});
  }

}
