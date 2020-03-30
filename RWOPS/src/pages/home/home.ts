import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('mySlider')  slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  moveToNext(){
    this.slides.slideNext();
  }

}
