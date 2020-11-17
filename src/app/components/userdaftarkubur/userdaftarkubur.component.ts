import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api-service';


@Component({
  selector: 'app-userdaftarkubur',
  templateUrl:'./userdaftarkubur.component.html',
  styleUrls: ['./userdaftarkubur.component.scss'],

})
export class UserdaftarkuburComponent {
  loginError: string;
  reactiveForm: FormGroup;
  message: any;
  errorMessage = '';
  invalidRegister = false;
  // userData = { "userid":"", "name": "","dob": "","dod": "","plot": "", "latitude":"", "longitude":"" };
  locList: any = ['Kangkar Pulai',
                  'Impian Emas', ]

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor(
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router


    ) 
     {
        this.reactiveForm = formBuilder.group({      
          userid: ['', Validators.required],
          name: ['', Validators.required],
          dod: ['', Validators.required],
          dob: ['', Validators.required],
          plot: ['', Validators.required],
          location: ['', Validators.required],
          latitude: ['', Validators.required],
          longitude: ['', Validators.required]
        }); 

      }

      changeWebsite(selectedValue:string){
        console.log('value is ',selectedValue);
     
        }

      regKubur() {
        let data = this.reactiveForm.value;
        this.ApiService.insertKubur(data.userid,data.name,data.dob,data.dod,data.plot,data.location,data.latitude,data.longitude).subscribe( 
          data => {
            console.log(data);          
            this.invalidRegister = false;
            const allInfo = `Rekod baru berjaya ditambah.`;
            alert(allInfo);
            this.router.navigate(['/']);
          
        },
          error => {
            console.log(error);
            this.invalidRegister = true;
            const allInfo = `Rekod gagal ditambah!`;
            alert(allInfo);
        }); 
        
      }

      format = "dd/MM/yyyy";
      date = new Date();
      form = new FormGroup({
      date: new FormControl(this.date)
      })

      
      onSubmit(){
        console.log(this.form.value)
      }
  


}
