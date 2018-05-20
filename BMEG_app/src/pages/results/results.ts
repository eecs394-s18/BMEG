import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.low_cost={};
  	this.middle={};
  	this.low_impact={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage', this.navParams.get('materials'));
    var material = this.navParams.get('materials')
    var scenario_number = scenarios[material];
    this.low_cost = data[scenario_number][1]
    this.middle = data[scenario_number][2]
    this.low_impact = data[scenario_number][3]
  }

}

// past json here
var scenarios = {
	'Wood':1,
	'Stone':2,
	'Slate':3
};

var data = {
	1:{
		1:{
			'Floor':1,
			'Walls':2,
			'Roof':3,
			'Cost':4,
			'Energy':5,
		},
		2:{
			'Floor':6,
			'Walls':7,
			'Roof':8,
			'Cost':9,
			'Energy':10,
		},
		3:{
			'Floor':11,
			'Walls':12,
			'Roof':13,
			'Cost':14,
			'Energy':15,
		},
	},
	2:{
		1:{
			'Floor':16,
			'Walls':17,
			'Roof':18,
			'Cost':19,
			'Energy':20,
		},
		2:{
			'Floor':21,
			'Walls':31,
			'Roof':41,
			'Cost':51,
			'Energy':61,
		},
		3:{
			'Floor':22,
			'Walls':23,
			'Roof':24,
			'Cost':25,
			'Energy':26,
		},
	},
	3:{
		1:{
			'Floor':27,
			'Walls':28,
			'Roof':29,
			'Cost':30,
			'Energy':31,
		},
		2:{
			'Floor':32,
			'Walls':33,
			'Roof':34,
			'Cost':35,
			'Energy':36,
		},
		3:{
			'Floor':37,
			'Walls':38,
			'Roof':39,
			'Cost':40,
			'Energy':41,
		},
	},
}