import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import {LoginService} from 'src/app/services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup
resData;
errMsg;
  constructor(private fb:FormBuilder , private lser:LoginService, private router :Router) { }

loginData() {
    // body...
    let formData=this.myForm.getRawValue();
    this.lser.adminLoginData(formData)
    .subscribe(res=>{
     // console.log(res);
     this.resData=res;
     if(this.resData.err==0)
     {
      localStorage.setItem('grd','t'); ////
      localStorage.setItem('uname',this.resData.username);
      this.router.navigate(['/dashboard']);
     }
     if(this.resData.err==1)
     {
      localStorage.setItem('grd','f');   ////
      this.errMsg=this.resData.msg;
     }
    },err=>{
      console.log("api error");
    });
    
  }

  ngOnInit() {
  this.validate();
  }


   validate()
  {
    this.myForm=this.fb.group
    (
	    {
	    		'name'   : ['',Validators.required],
	    		'pass'   : ['',Validators.required]
	    }		
    ) 	
  }

}
