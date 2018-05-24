import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { RegionsurveyPage} from '../regionsurvey/regionsurvey';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RegionsurveyPage;

  constructor() {

  }
}
