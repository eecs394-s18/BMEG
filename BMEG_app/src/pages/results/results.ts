import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingplansPage } from '../buildingplans/buildingplans'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.low_cost={};
  	this.middle={};
  	this.low_impact={};
  	this.floorType={
  		1:'Brick-Concrete',
  		2:'Stone-Concrete',
  		3:'Brick-Aerated Conrete'
  	};

  	this.wallType = {
  		1:"Brick-Concrete",
		2:"Stone-Concrete",
		3:"Bamboo-Concrete",
		4:"CSEB-Concrete",
		5:"Concrete Blocks-Concrete",
		6:"Brick-Aerated Concrete"
  	};

  	this.roofType = {
  		1:"Wood-CGI",
		2:"Wood-Slate",
		3:"Bamboo-CGI",
		4:"Wood-Aluminum",
		5:"Bamboo-Aluminum",
		6:"Plywood-Wood-Ceramic",
		7:"Bamboo-Wood-Ceramic"
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage', this.navParams.get('materials'));
    var material = this.navParams.get('materials')
    var scenario_number = scenarios[material];
    this.low_cost = data[scenario_number][1]
    this.middle = data[scenario_number][2]
    this.low_impact = data[scenario_number][3]
    console.log(this.low_cost,this.middle,this.low_impact)
  }

  buildingplans() {
  	this.navCtrl.push(BuildingplansPage);
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
			'Roof':1,
			'Cost':4,
			'Energy':5,
		},
		2:{
			'Floor':2,
			'Walls':6,
			'Roof':2,
			'Cost':9,
			'Energy':10,
		},
		3:{
			'Floor':3,
			'Walls':1,
			'Roof':3,
			'Cost':14,
			'Energy':15,
		},
	},
	2:{
		1:{
			'Floor':2,
			'Walls':5,
			'Roof':4,
			'Cost':19,
			'Energy':20,
		},
		2:{
			'Floor':1,
			'Walls':4,
			'Roof':5,
			'Cost':51,
			'Energy':61,
		},
		3:{
			'Floor':2,
			'Walls':3,
			'Roof':6,
			'Cost':25,
			'Energy':26,
		},
	},
	3:{
		1:{
			'Floor':3,
			'Walls':2,
			'Roof':2,
			'Cost':30,
			'Energy':31,
		},
		2:{
			'Floor':2,
			'Walls':6,
			'Roof':7,
			'Cost':35,
			'Energy':36,
		},
		3:{
			'Floor':1,
			'Walls':4,
			'Roof':4,
			'Cost':40,
			'Energy':41,
		},
	},
}
