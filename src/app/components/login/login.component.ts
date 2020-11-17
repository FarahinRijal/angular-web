import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginError: string;
  reactiveForm:FormGroup;
  message: any;
  errorMessage = '';
  invalidLogin = false;
  username = '';
  userData = { "username": "", "password": "" };
  

  constructor(

    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router 

    ) {

      this.reactiveForm = formBuilder.group({      
        username: ['', [Validators.required, Validators.maxLength(12)]],  
        password: ['', [Validators.required, Validators.maxLength(12)]]  
        }); 
      }

  doLogin() {
    let data = this.reactiveForm.value;
    console.log(data);
    this.ApiService.userLogin(data.username, data.password).subscribe(data => {
      console.log("Data -> ", data);
      // this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
      if(data=="admin"){
        const allInfo = `Anda berjaya log masuk sebagai admin!`;
        alert(allInfo);
        this.router.navigate(['/adminhome']);
      }
      else if(data=="master"){
        const allInfo = `Anda berjaya log masuk sebagai master!`;
        alert(allInfo);
        this.router.navigate(['/masterhome']);
      }
      else{
        const allInfo = `Akaun tidak wujud/masih dalam proses!`;
        alert(allInfo);
      }
      
    },
    error => {
      console.log(error);
      this.invalidLogin = true;
      const allInfo = `Log Masuk tidak berjaya!`;
      alert(allInfo);
    });
    
  }

}




