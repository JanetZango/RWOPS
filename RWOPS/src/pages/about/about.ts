import { Component ,ViewChild} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('mySlider')  slides: Slides;
  constructor(public navCtrl: NavController) {

  }

  swipeNext(){
    this.slides.slideNext();
  }

}
