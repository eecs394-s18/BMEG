import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingplansPage } from '../buildingplans/buildingplans';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

	public low_cost:any;
	public middle:any;
	public low_impact:any;

	public floorType:any;
	public wallType:any;
	public roofType:any;
	public scenarios:any;
	public results:any;

	public nameMap:any;

	public flag:boolean;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {

		this.low_cost = {};
		this.middle = {};
		this.low_impact = {};
		this.floorType = {};
		this.wallType = {};
		this.roofType = {};
		this.scenarios = {};
		this.results = {};

		// Maps dropdown material display names to json database index names
		// Format is {'displayName': 'DB index name'}
		this.nameMap = {
			'CGI Sheets': 'CGI',
			'Compressed Stabilized Earth Blocks': 'CSEB',
			'Ceramic Tiles': 'Ceramic'
		};

		this.flag = false;
  	}

  ionViewDidLoad() {

	console.log('ionViewDidLoad ResultsPage', this.navParams.get('materials'));

	let building = this.navParams.get('building');

	if (building != "Two Room House") { // we currently only support two room houses.
		this.flag = true;
		return;
	}

	this.readAllJSONData().then(() => {

		let material = this.navParams.get('materials')
		let key = "";

		// If more than one selected, concatenate with commas.
		if (material.length != 1) {
			material.sort(); 	// sort before concatenating
			material.forEach((element, index, arr) => {
				if (this.nameMap[element] != undefined) {
					arr[index] = this.nameMap[element];
				}
			});
			key = material.join(", ");
		} else {
			// Replace display name with database index name
			if (this.nameMap[material[0]] != undefined) {
				key = this.nameMap[material[0]];
			} else {
				key = material[0];
			}
		}

		let scenario_number = this.scenarios[key];

		if (scenario_number == undefined) { // No option outputted by the algorithm
			let alert = this.alertCtrl.create({
				title: 'Data Unavailable',
				subTitle: 'No recommendations are available at the moment based on your selection.',
				buttons: ['OK']
			});
			alert.present();
			return;
		}

		this.low_cost = this.results[scenario_number][3]
		this.middle = this.results[scenario_number][2]
		this.low_impact = this.results[scenario_number][1]
	});
  }

  buildingplans() {
  	this.navCtrl.push(BuildingplansPage);
  }

  readAllJSONData() {

	return new Promise((resolve, reject) => {
		resolve();
	}).then(() => {
		return Promise.resolve(
			this.readJSONData("floor_number.json").then((data) => {
				this.floorType = data;
			})
		);
	}).then(() => {
		return Promise.resolve(
			this.readJSONData("wall_number.json").then((data) => {
				this.wallType = data;
			})
		);
	}).then(() => {
		return Promise.resolve(
			this.readJSONData("roof_number.json").then((data) => {
				this.roofType = data;
			})
		);
	}).then(() => {
		return Promise.resolve(
			this.readJSONData("scenario.json").then((data) => {
				this.scenarios = data;
			})
		);
	}).then(() => {
		return Promise.resolve(
			this.readJSONData("results.json").then((data) => {
				this.results = data;
			})
		);
	});
  }

  // modify hardcoded JSON for more options
  readJSONData(param: string) {
	  return this.http.get('../../assets/database/'+ param).toPromise();
  }
}
