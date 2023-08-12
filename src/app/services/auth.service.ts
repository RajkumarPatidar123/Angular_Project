import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Provides REST CRUD operations of User functionality
 * Each method of this class receives response callback method
 * Response callback method is called by Observable and passed data and error
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Rest endpoint
  endpoint = "http://localhost:8000/ORSAPI/Login/";
  locatar : any;
  form : any;

  /** Constructor injects Http service
   * 
   * @param http
   */

  constructor(private http: HttpClient) { 
    console.log("------>>Auth Service")
  }
   /**
   * 
   * @param form
   * 
   */
  auth(form:any, compCB:any){
    console.log("compCB---->>",compCB)
    console.log("in auth service auth method")
    let url = this.endpoint + "auth";
    this.http.post(url,form).subscribe(
      (data) =>{
        console.log("data---->>1",data)
        compCB(data);
      },
      (data) =>{
        console.log("data---->>2",data)
        compCB(data, true);
      }
    );
  }
}
