import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import {NgModel, NgForm} from '@angular/forms';
import {AlertController} from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../model/user.model';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface AuthResponseData {
   email:string
   username :string
   password_hash:number
   id :number;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logo:boolean = true
  lowdesign:boolean = true
  private userForm: FormGroup;
  email
  password_hash;
  displayUser = new Array();
  private User: User;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public verifyLogin :ServiceProvider,
     ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.verifyLogin.getUser().subscribe(_responseData => {
      console.log(_responseData)

      // if(_responseData === form.value)
      // this.navCtrl.push(TabsPage);
      // const alert = this.alertCtrl.create({
      //   subTitle: 'Please check your email address for the One Time Password.',
      //   buttons: ['OK']
      // });
      // alert.present();
  //   }, _error => {
  //   //   const alert = this.alertCtrl.create({
  //   //     title: 'Oops',
  //   //     subTitle: 'Something went wrong, please contact administrator.',
  //   //     buttons: ['OK']
  //   //   });
  //   //   alert.present();
  //   // });
    });


  }  

  onInput($event){
    this.logo = false
    this.lowdesign = false
  } 
  noInput($event){
    this.logo = true;
    this.lowdesign = true
  }
  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }
  signup(){
    this.navCtrl.push(RegisterPage)
  }
  SignIn()
 {
  this.navCtrl.push(TabsPage)
 }

 getEmail(form: NgForm) {

  this.User = new User();
  this.User.email = form.value.email
  this.User.password_hash = form.value.password_hash
   
  // if (form.value.password_hash === '' || form.value.email === '') {
  //   const alert = this.alertCtrl.create({
  //     title: 'Oops',
  //     subTitle: 'You did not enter anything in the form please insert information to continue.',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
   if (form.value.password_hash === '') {
    const alert = this.alertCtrl.create({
      title: 'Oops',
      subTitle: 'You did not enter your password please enter your valid password.',
      buttons: ['OK']
    });
    alert.present();
  }
  else if (form.value.email === '') {
    const alert = this.alertCtrl.create({
      title: 'Oops',
      subTitle: 'You did not enter your email address please enter your valid email address.',
      buttons: ['OK']
    });
    alert.present();
  } else {
    this.verifyLogin.getUser().subscribe(_responseData => {
      console.log(_responseData)
      for(var x =0; x <_responseData.length; x++){
        console.log(_responseData[x].email)
          
      if(_responseData[x].email === form.value.email && _responseData[x].password_hash === form.value.password_hash){
      console.log(_responseData[x].id)
      let obj ={
        id:_responseData[x].id,
        email:_responseData[x].email,
        username:_responseData[x].username,
        password_hash:_responseData[x].password_hash
      }
      console.log(obj)
      this.displayUser.push(obj)
      console.log(this.displayUser)
        this.navCtrl.push(HomePage, { orgObject: this.displayUser });
      }
      else{
    //  const alert = this.alertCtrl.create({
    //     subTitle: 'Please check your email address or password something is invalid.',
    //     buttons: ['OK']
    //   });
    //   alert.present();
      }
      }
      // console.log(_responseData[7].email)
    
   
 
    }, _error => {
      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'Something went wrong, please contact administrator.',
        buttons: ['OK']
      });
      alert.present();
    });
  }


}
}
