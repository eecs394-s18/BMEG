import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingplansPage } from '../buildingplans/buildingplans';

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

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

		this.low_cost = {};
		this.middle = {};
		this.low_impact = {};
		this.floorType = {};
		this.wallType = {};
		this.roofType = {};
		this.scenarios = {};
		this.results = {};
  	}

  ionViewDidLoad() {

	console.log('ionViewDidLoad ResultsPage', this.navParams.get('materials'));

	this.readAllJSONData().then(() => {
		console.log("finished reading data");

		let material = this.navParams.get('materials')
		let scenario_number = this.scenarios[material];
		console.log(this.scenarios);
		console.log(material);
		console.log(scenario_number);

		this.low_cost = this.results[scenario_number][2]
		this.middle = this.results[scenario_number][3]
		this.low_impact = this.results[scenario_number][1]
		console.log(this.low_cost,this.middle,this.low_impact)
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

  readJSONData(param: string) {
	  return this.http.get('../../assets/database/'+ param).toPromise();
  }
}
