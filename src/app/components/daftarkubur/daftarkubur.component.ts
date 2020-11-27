import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api-service';

interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}

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
  showModal: boolean = false;
  selected: string = '';
  // userData = { "userid":"", "name": "","dob": "","dod": "","plot": "", "latitude":"", "longitude":"" };
  locList: any = ['Kangkar Pulai',
                  'Impian Emas', ]

  coordinates: Coordinates;


  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor(
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router,
    private route:ActivatedRoute


    ) 
     {
  
        this.reactiveForm = formBuilder.group({      
          userid: ['', Validators.required],
          name: ['', Validators.required],
          dod: ['', Validators.required],
          dob: ['', Validators.required],
          plot: ['', Validators.required],
          location: ['', Validators.required],
          latitude: [''],
          longitude: ['']
        }); 

        this.coordinates = {} as Coordinates;

      }

      lt: string = '';
      ln: string = '';

      regKubur() {
        this.route.queryParams.subscribe(params => {
          this.lt = params['data2'];
          this.ln = params['data3'];           
        console.log('receive latitude, longitude->',this.lt,",",this.ln);
        });
        let lati = this.lt; 
        let long = this.ln;        
        // console.log('receive A->',A);
        this.reactiveForm.value.latitude = lati;  
        this.reactiveForm.value.longitude = long;         
        // console.log('receive latitude->',A);       
        // console.log('receive in form->',this.reactiveForm.value.latitude);
        let data = this.reactiveForm.value;
        console.log("Form:",data)
        this.ApiService.insertKubur(data.userid, data.name, data.dob, data.dod, data.plot,data.location, data.latitude, data.longitude).subscribe( 
          data => {
            console.log(data);          
            this.invalidRegister = false;
            const allInfo = `Rekod baru berjaya ditambah.`;
            alert(allInfo);
            this.router.navigate(['/daftarkubur']);
          
        },
          error => {
            console.log(error);
            this.invalidRegister = true;
            const allInfo = `Pendaftaran tidak berjaya!`;
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
        
      selectItem() {
        this.showModal = true;
        
     }

    addr: string = '';
    lat: string = '';
    lng: string = '';
    address : number;
    lati : number;
    long : number;

      selectedItem() {
        this.showModal = false; // hide modal
        // this.addr = this.route.snapshot.queryParams.data1;
        // this.lat = this.route.snapshot.queryParams.data2; 
        // this.lng = this.route.snapshot.queryParams.data3;
        this.route.queryParams.subscribe(params => {
          this.addr = params['data1']; 
          this.lat = params['data2'];
          this.lng = params['data3'];           
        console.log('receive latitude, longitude 2->',this.lat,",",this.lng); 
        });
      
        // console.log('receive latitude->',this.lat);
        // this.address = parseFloat(this.route.snapshot.queryParams.data1);
        // this.lati = parseFloat(this.lat);
        // console.log('parse latitude->',this.lati);
        // this.long = parseFloat(this.route.snapshot.queryParams.data3);
        
      }

}
