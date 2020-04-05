
import { Injectable } from '@angular/core';
import { ConfigService } from "./ConfigService";
import {User} from '../../model/user.model';
import {UserProfile} from '../../model/userProfile.model'
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import {_throw} from 'rxjs/observable/throw';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  private readonly baseUrl: string;
  constructor(public http: HttpClient,public configService: ConfigService) {
    this.baseUrl = this.configService.apiUrl;
  }

  create(user: User) {
    const url = `${this.baseUrl}/api/user/post`;
    console.log(url)
    var data = this.http.post(url,user,httpOptions)
    console.log(data)
    return data  
      .pipe(
        catchError(this.handleError)
      );
      
  }

  createProfile(userProfile: UserProfile) {
    const url = `${this.baseUrl}/api/userprofile/post`;
    console.log(url)
    var dataUser = this.http.post(url,userProfile,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );
      
  }


  getUser(){
    const url = `${this.baseUrl}/api/user/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }


  getUserProfile(user_id){
    console.log(user_id)
    const url = `${this.baseUrl}/api/userprofile/get/`+ user_id;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  getBranch2(id){
    const url = `${this.baseUrl}/api/branch/get/`+ id;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

    
  getDesignation2(id){
    const url = `${this.baseUrl}/api/designation/get/` + id;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  getJob2(id){
    const url = `${this.baseUrl}/api/jobtitle/get/`+ id;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }
  getDepartment2(id){
    const url = `${this.baseUrl}/api/department/get/` +id;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }




  getWorkCategory(){
    const url = `${this.baseUrl}/api/workcategory/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }


  getBranch(){
    const url = `${this.baseUrl}/api/branch/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  
  getDepartment(){
    const url = `${this.baseUrl}/api/department/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

   
  getDesignation(){
    const url = `${this.baseUrl}/api/designation/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  getJob(){
    const url = `${this.baseUrl}/api/jobtitle/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  getUnit(){
    const url = `${this.baseUrl}/api/unit/get`;
    console.log(url)
    var dataUser = this.http.get(url,httpOptions)
    console.log(dataUser)
    return dataUser  
      .pipe(
        catchError(this.handleError)
      );  
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return _throw(errorRes);
  }






}
