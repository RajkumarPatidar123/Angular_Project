import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // User Form
  form = {
    "id" : 0,
    "firstName" : "",
    "lastName" : "",
    "login_id" : "",
    "password" : "",
    "confirmpassword" : "",
    "dob" : "",
    "address" : "",
    "gender" : "",
    "mobilenumber" : "",
    "role_Id" : "",
    "role_Name" : ""
  }

  // Input Error
  inputError = {
    "firstName" : "",
    "lastName" : "",
    "login_id" : "",
    "password" : "",
    "confirmpassword" : "",
    "dob" : "",
    "address" : "",
    "gender" : "",
    "mobilenumber" : "",
    "role_Id" : "",
    "role_Name" : ""
  }

  // Server Success / Fail Message
  message = "";

  // Server Error
  success: boolean = true;

   /**
 * 
 * @param aroute
 * @param router
 * @param service
 */

  constructor(private aroute: ActivatedRoute, private router: Router, private service: UserService) { }
  // Display record if primary key is used
  ngOnInit(): void {
    var _self = this;
    this.form.id = Number(this.aroute.snapshot.paramMap.get("id") || "{}");
    if(!isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id, function(res:any, error:any){
        if (error){
          alert("Error ngOnInit get:----->> " + error.message)
          console.log("ngOnInit error-msg---->>",error.message)
          return;
        }
        _self.form = res.data;
        console.log("user edit data =", res.data)
      });
    }
    this.preload();
  }

  // Save A Record
  save(){
    var _self = this;
    this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function(res:any, error:any){
      console.log("user Save--->>", res.data)
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      console.log("res.data.message--->>", _self.success)
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
          "firstName" : "",
          "lastName" : "",
          "login_id" : "",
          "password" : "",
          "confirmpassword" : "",
          "dob" : "",
          "address" : "",
          "gender" : "",
          "mobilenumber" : "",
          "role_Id" : "",
          "role_Name" : ""
        }
      }else{
        _self.message = "Data was not Saved";
      }
    });
  }
  /**
     * Go to search page
     */
    search(){
      this.router.navigateByUrl("/userlist");
    }
    preloadData : any = []
    preload(){
      var _self = this;
      this.service.preload(function(res:any, error:any){
        if(error){
          alert("Preload Error:----->>" + error.message);
          return;
        }
        _self.preloadData = res.preloadList;
        console.log("PreloadList---->>", res.preloadList);
      });
    }
    reset(){
      this.form = {
        "id" : 0,
        "firstName" : "",
        "lastName" : "",
        "login_id" : "",
        "password" : "",
        "confirmpassword" : "",
        "dob" : "",
        "address" : "",
        "gender" : "",
        "mobilenumber" : "",
        "role_Id" : "",
        "role_Name" : ""
      }
      this.ngOnInit();
      this.inputError = {
        "firstName" : "",
        "lastName" : "",
        "login_id" : "",
        "password" : "",
        "confirmpassword" : "",
        "dob" : "",
        "address" : "",
        "gender" : "",
        "mobilenumber" : "",
        "role_Id" : "",
        "role_Name" : "",
      }
      this.message = "";
    };
}
