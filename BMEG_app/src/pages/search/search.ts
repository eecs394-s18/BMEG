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
    public building_type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      this.materials = [];
      this.names = this.navParams.get("names") as any;
      this.names.sort();
      this.names.unshift("All Available");
      this.building_types = ['Two Room House','Three Room House', 'Four Room House'];
      this.building_type = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');

  }

  search() {

      if (this.building_type == "") {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'You must select a building type before searching.',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      if (this.materials.length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'You must select at least one option before searching.',
          buttons: ['OK']
        });
        alert.present();
      } else if (this.materials.length > 2) { // Change to limit how many user can select depending on algorithm.
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'You may not select more than 2 unavailable options at the moment.',
          buttons: ['OK']
        });
        alert.present();
      } else if (this.materials.length > 1 && this.materials.includes('All Available')) {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'You may not select "All Available" and an unavailable material.',
          buttons: ['OK']
        });
        alert.present();
      } else {
        this.navCtrl.push(ResultsPage, {materials: this.materials, building: this.building_type});
      }
  }
}
