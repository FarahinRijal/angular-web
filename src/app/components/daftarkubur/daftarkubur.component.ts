import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api-service';


@Component({
  selector: 'app-daftarkubur',
  templateUrl:'./daftarkubur.component.html',
  styleUrls: ['./daftarkubur.component.scss'],

})
export class DaftarkuburComponent {
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

      regKubur() {
        let data = this.reactiveForm.value;
        this.ApiService.insertKubur(data.userid, data.name, data.dob, data.dod, data.plot,data.location, data.latitude, data.longitude).subscribe( 
          data => {
            console.log(data);          
            this.invalidRegister = false;
            const allInfo = `New record created successfully.`;
            alert(allInfo);
            this.router.navigate(['/adminhome']);
          
        },
          error => {
            console.log(error);
            this.invalidRegister = true;
            const allInfo = `Registration failed!`;
            alert(allInfo);
        }); 
        
      }

      changeWebsite(selectedValue:string){
        console.log('value is ',selectedValue);
     
        }

      format = "dd/MM/yyyy";
      // date = new Date();
      // form = new FormGroup({
      // date: new FormControl(this.date)
      // })

      
      // onSubmit(){
      //   console.log(this.form.value)
      // }
  


}
