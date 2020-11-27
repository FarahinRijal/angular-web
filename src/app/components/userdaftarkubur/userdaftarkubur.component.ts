import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { parseNumber } from '@progress/kendo-angular-intl';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { ApiService } from '../shared/api-service';

interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-userdaftarkubur',
  templateUrl:'./userdaftarkubur.component.html',
  styleUrls: ['./userdaftarkubur.component.scss'],

})
export class UserdaftarkuburComponent {
  loginError: string;
  // reactiveForm: FormGroup;
  message: any;
  errorMessage = '';
  invalidRegister = false;
  showModal: boolean = false;
  selected: string = '';
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
    private modalService: NgbModal,
    private route:ActivatedRoute


    ) 
     {
        // this.reactiveForm = formBuilder.group({      
        //   userid: ['', Validators.required],
        //   name: ['', Validators.required],
        //   dod: ['', Validators.required],
        //   dob: ['', Validators.required],
        //   plot: ['', Validators.required],
        //   location: ['', Validators.required],
        //   latitude: [''],
        //   longitude: ['']
        // }); 

        this.coordinates = {} as Coordinates;

      }

      
      reactiveForm = new FormGroup({
        userid : new FormControl('', Validators.required),
        name : new FormControl('', Validators.required),
        dod : new FormControl('', Validators.required),
        dob : new FormControl('', Validators.required),
        plot: new FormControl('', Validators.required),
        location:new FormControl('', Validators.required),
        latitude: new FormControl(''),
        longitude: new FormControl('')
      });


      changeWebsite(selectedValue:string){
        console.log('value is ',selectedValue);
     
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
              this.router.navigate(['/userdaftarkubur']);
            
          },
            error => {
              console.log(error);
              this.invalidRegister = true;
              const allInfo = `Pendaftaran tidak berjaya!`;
              alert(allInfo);
          }); 
          
        }

      format = "dd/MM/yyyy";
      date = new Date();
      form = new FormGroup({
      date: new FormControl(this.date)
      })

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

      // openGoogelMapsModal() {
      //   const modalRef = this.modalService.open(GoogleMapsComponent,
      //     {
      //       scrollable: true,
      //       // windowClass: 'myCustomModalClass',
      //       // keyboard: false,
      //       // backdrop: 'static'
      //     });
      //   let data = {
      //     prop1: 'Some Data',
      //     prop2: 'From Parent Component',
      //     prop3: 'This Can be anything'
      //   }
    
      //   modalRef.componentInstance.fromParent = data;
      //   modalRef.result.then((result) => {
      //     this.coordinates = result;
      //   }, (reason) => {
      //   });
      // }

}
