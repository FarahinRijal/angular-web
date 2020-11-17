import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  loginError: string;
  reactiveForm: FormGroup;
  // reactiveForm:any;
  message: any;
  errorMessage = '';
  invalidRegister = false;
  username = '';
  userData = { "fullname": "","phone": "","email": "","job": "","username": "", "password": "" };

  constructor(
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router

    ) {
  
        this.reactiveForm = formBuilder.group({      
          fullname: ['', Validators.required],
          phone: ['', [Validators.required, Validators.maxLength(10)]],
          email: ['', [Validators.required, Validators.email]],
          job: ['', Validators.required],
          username: ['', [Validators.required, Validators.maxLength(12)]],
          password: ['', [Validators.required, Validators.maxLength(12)]] 
        }); 

      }

      doRegister() {
        let data = this.reactiveForm.value;
        this.ApiService.insertUser(data.username, data.fullname, data.email, data.password, data.job, data.phone).subscribe(data => {
          console.log(data);
          
          this.invalidRegister = false;

          const allInfo = `Anda berjaya daftar sebagai admin. Permohonan anda masih dalam proses. Terima kasih.`;
          alert(allInfo);
          this.router.navigate(['/']);

        },
        error => {
          console.log(error);
          this.invalidRegister = true;
          const allInfo = `Pendaftaran tidak berjaya.Nama pengguna atau kata laluan telah wujud!`;
          alert(allInfo);
        }); 
        
      }
}
