import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userId: string = '';
  public password: string = '';
  public logingId: any = '';
  public success = true

  sess_msg: any = "";

  form :any ={
    "login_id" : this.userId,
    "password" : this.password,
    "message" : "",
    "error" : "",
  }

  inputError ={
    "login_id" : "",
    "password" : "",
  }
  constructor(private router: Router, private service: AuthService) { 
    console.log("in login component const")
  }

  ngOnInit(): void {
    console.log("in login ts ng on init ---->>>>>>>>>>>>>>")
    localStorage.removeItem("loginId")
    console.log("this.router.url---->>",this.router.url)
    if(this.router.url == "/sessionOut"){
      this.success = false;
      this.form.message = localStorage.getItem("sess_msg");
      console.log("ngOnInit-sess_msg-->",localStorage.getItem("sess_msg"));
    }
    else{
      console.log("else login ng on init called--->>")
      let msg = localStorage.getItem("logout_msg")
      console.log("logout msg---->>",msg)
      if (msg != null && msg != "null"){
        this.success = true;
        this.form.message = msg;
        console.log("ngOnInit--->>logout_msg--->>",localStorage.getItem("logout_msg"));
      }
    }
  }

  signIn(){
    var _self = this;
    console.log("signIn-->");

    this.service.auth(this.form, function(info:any){
      console.log("info---->>",info)
      if (info.form.error){
        _self.success = false;
        _self.form.message = info.form.message;
        _self.inputError = info.form.inputError;
      }else{
        localStorage.clear();
        console.log("signIn--->",info.form.error);
        localStorage.setItem("loginId",info.form.data.login_id);
        localStorage.setItem("roleName",info.form.data.role_Name);
        localStorage.setItem("firstName",info.form.data.firstName);
        _self.router.navigateByUrl("/welcome");
      }
    })
   }
   onclick(){
    this.router.navigateByUrl("/registration")
   }
}
