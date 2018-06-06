import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search'
import { HttpClient } from '@angular/common/http';

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

  public results:{climate: string, soiltype: string, water: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.results = {climate: "", soiltype: "", water: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionsurveyPage');
  }

  findmaterials() {
    this.http.get('../../assets/database/decision_tree_util.json').toPromise().then(data => {
      const climate = this.results.climate;
      const soil_type = this.results.soiltype;
      const water = this.results.water;

      var acidic = (soil_type == "Acidic" ? true : false);
      var alkali = (soil_type == "Alkali" ? true : false);
      var neutral = (soil_type == "Neutral" ? true : false);
      var salt = (water == "Salt water resistant" ? true : false);

      var names = [];

      // Get JSON here
      for (var key in data) {
        var shouldAdd = true;

        /***********************************************************************************************/
        /* TODO: UNCOMMENT IF YOU WOULD LIKE TO ACTUALLY FILTER OUT MATERIALS USING THE DECISION TREE. */
        /***********************************************************************************************/

        // if (acidic && !data[key]["acidic"]) shouldAdd = false;
        // if (alkali && !data[key]["alkaline"]) shouldAdd = false;
        // if (salt && !data[key]["salt_water"]) shouldAdd = false;

        if (shouldAdd) names.push(data[key]["name"]);
      }
      this.navCtrl.push(SearchPage, { names: names });
    }).catch(err => {
      console.log(err);
    });
  }

}
