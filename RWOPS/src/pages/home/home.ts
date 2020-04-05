import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,AlertController,NavParams } from 'ionic-angular';
import { ServiceProvider} from '../../providers/service/service';
import {UserProfile} from '../../model/userProfile.model'
export interface CapacityBuildingResponseData {
  capacity_buildings: any;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('mySlider')  slides: Slides;

  currentLoggedIn = new Array();
  id;
  firstname;
  surname;
  email;
  persal_number;
  tel_number;
  cell_number;
  id_number;
  branch_id;
  department_id;
  job_title_id;
  designation_id;
  postal_code;
  postal_address;
  jobDescription;
  jobTitle
  branchDescription;
  originalListOfCsoes: UserProfile[] = [];
  filteredListOfCsoes: UserProfile[] = [];
  listOriginalLookupDistrict = [];
  listFilteredLookupDistrict = [];
  listOriginalLookupMunicipality = [];
  listFilteredLookupMunicipality = [];
  listFilteredLookupJob = [];
  listFilteredLookupDesignated = [];
  

  constructor(public navCtrl: NavController, 
     public alertCtrl: AlertController,
      public verifyLogin :ServiceProvider,
      public navParams: NavParams,
      public service: ServiceProvider,
     ) {
   

    this.currentLoggedIn.push(this.navParams.get('orgObject'));
   
    console.log(this.currentLoggedIn[0][0].id)
    this.id = this.currentLoggedIn[0][0].id
    this.firstname = this.currentLoggedIn[0][0].firstname
    this.surname = this.currentLoggedIn[0][0].surname
    this.id_number = this.currentLoggedIn[0][0].id_number
    this.email = this.currentLoggedIn[0][0].email
    // console.log(this.firstname)

    this.getUserProfile();
    
   
    // this.getWorkCategory();
  }
  moveToNext(){
    this.slides.slideNext();
  }

  getUserProfile(){
    this.verifyLogin.getUserProfile(this.id).subscribe((_responseData) => {
      this.originalListOfCsoes = _responseData;
      this.filteredListOfCsoes = _responseData;
      console.log(this.filteredListOfCsoes)
      this.id = _responseData.id
      this.firstname = _responseData.firstname
      this.surname = _responseData.surname
      this.persal_number = _responseData.persal_number
      this.tel_number = _responseData.tel_number
      this.cell_number = _responseData.cell_number
      this.id_number = _responseData.id_number
      this.branch_id = _responseData.branch_id
      this.department_id = _responseData.department_id
      this.job_title_id = _responseData.job_title_id
      this.postal_address = _responseData.postal_address
      this.designation_id = _responseData.designation_id
      this.postal_code = _responseData.postal_code
      console.log(this.branch_id)
      console.log(_responseData)

      this.getBranch();
      this.getDepartment();
      this.getDesignation();
      this.getJob();
      this.getUnit();
    })
  }


  getBranch(){
    console.log(this.branch_id)
    this.service.getBranch2(this.branch_id).subscribe(_responseDataBranch => {
      console.log(this.branchDescription)
      this.branchDescription = _responseDataBranch.description
      console.log(this.branchDescription)
    this.listFilteredLookupMunicipality = _responseDataBranch;
    console.log(this.listFilteredLookupMunicipality)
    // this.listOriginalLookupMunicipality = _responseDataBranch;
    })
  }

  
  getDepartment(){
    this.service.getDepartment2(this.department_id).subscribe(_responseDataDepartment => {
    console.log(_responseDataDepartment)
    this.listFilteredLookupDistrict = _responseDataDepartment
    console.log(this.listFilteredLookupDistrict)

    })
  }
  getDesignation(){
    this.service.getDesignation2(this.designation_id).subscribe(_responseDataDesignation => {
    console.log(_responseDataDesignation)
    this.listFilteredLookupDesignated = _responseDataDesignation
    })
  }
  
  getJob(){
    this.service.getJob2(this.job_title_id).subscribe(_responseDataJob => {
    console.log(_responseDataJob)
    this.jobDescription = _responseDataJob.description
    this.jobTitle = _responseDataJob.job_title
    this.listFilteredLookupJob = _responseDataJob
    console.log(this.listFilteredLookupJob)
    })
  }


  getWorkCategory(){
    this.verifyLogin.getWorkCategory().subscribe(_responseData => {
    console.log(_responseData)
    })
  }

  
  getUnit(){
    this.verifyLogin.getUnit().subscribe(_responseDataUnit => {
    console.log(_responseDataUnit)
    })
  }

    

  // searchForCapacityBuildingByVenue(element: any) {
  //   const _needle = element.target.value;
  //   if (_needle === '') {
  //     this.filteredListOfCsoes = this.originalListOfCsoes;
  //     return;
  //   }
  //   this.filteredListOfCsoes = this.originalListOfCsoes.filter((user) => {
  //     return (user.email.toLowerCase().indexOf(_needle.toLowerCase()) > -1);
  //   })
  // }

}
