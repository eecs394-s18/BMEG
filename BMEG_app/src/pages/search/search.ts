import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
    public names: any;
    public building_types: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      this.materials = {};
      this.names = this.navParams.get("names") as any;
      console.log(this.names);
      this.building_types = ['Two Room House','Three Room House', 'Four Room House']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

  }

  search() {
      console.log('search');
      console.log(this.materials);

      if (Object.keys(this.materials).length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'You must select at least one unavailable material before searching.',
          buttons: ['OK']
        });
        alert.present();
      } else {
        this.navCtrl.push(ResultsPage, {materials: this.materials});
      }
  }
}
