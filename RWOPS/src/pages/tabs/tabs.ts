import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController, Slides, AlertController, NavParams } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  currentLoggedIn = new Array();

  constructor(public navParams: NavParams) {
    this.currentLoggedIn.push(this.navParams.get('orgObject'));
    console.log(this.currentLoggedIn)
  }

}
