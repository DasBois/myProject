import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  selected = false;
  public items = [false, false, false, false]
  constructor(public navCtrl: NavController) {

  }

  changePage() {
    this.navCtrl.setRoot(TabsPage);
  }

  click(num) {
    this.selected = true;
    if(this.items[num] === true){
      this.items[num] = false;
    }else{
      this.items[num] = true;
    }

  }
}