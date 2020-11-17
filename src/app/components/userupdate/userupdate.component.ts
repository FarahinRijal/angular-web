import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../shared/api-service';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/month';


@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss'],
})
export class UserupdateComponent implements OnInit{

  loginError: string;
  personForm: FormGroup;
  message: any;
  errorMessage = '';
  invalidForm = false;
  username = '';
  // userData = { "user": "","phone": "","name": "","dob": "","dod": "", "plot": "" };
  data = [];
  mySubscription: any;
  // private selectedPlace = 0;

  // public person: Person = {
  //   nama: 'Jack',
  //   dob:  'Daniels',
  //   dod: 'adsa',
  //   plot: 'adad'
  // }

  constructor(
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router
  )

  {

    this.http.get('http://localhost/php_ara/correctionlist.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
     
      
      }, 
      error => console.error(error)
      );

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.router.navigated = false;
        }
      });

       // Create FormGroup
    this.personForm = this.formBuilder.group({
      nama: [''],
      dob: [''],
      dod: [''],
      plot: ['']
    });

    // Set Values
    console.log("datas->", this.data);
    this.personForm.controls["nama"].setValue(this.data);
    // this.personForm.controls["dob"].setValue(this.data.dob);
    // this.personForm.controls["dod"].setValue(this.data.dod);
    // this.personForm.controls["plot"].setValue(this.data.plot);
  }

  resetForm() {
    // let data = this.personForm.value;
    // this.ApiService.update(data.nama, data.dob, data.dod, data.plot).subscribe(data => {
    //   console.log(data);
    // })
    // this.personForm.controls["nama"].setValue(this.data);
    // this.personForm.controls["dob"].setValue(this.data.dob);
    // this.personForm.controls["dod"].setValue(this.data.dod);
    // this.personForm.controls["plot"].setValue(this.data.plot);    
  }

  saveForm() {
    // let person = this.personForm.value;
    //     this.ApiService.update(person.nama, person.dob, person.dod, person.plot).subscribe(data => {
    //       console.log(data);

    //       const allInfo = `Successfully sent`;
    //       alert(allInfo);
    //       this.router.navigate(['/']);

    //     },
    //     error => {
    //       console.log(error);
    //       const allInfo = `Failed!`;
    //       alert(allInfo);
    //     }); 
  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.Iid); // You get the Id of the selected item here
}

  

  ngOnInit() {
    // this.placesForm = this.formBuilder.group({
    //   name: [null],
    //   dob: [null],
    //   dod: [null],
    //   plot: [null],
    // });
  }

  onSubmit() {
  }

  // addPlace() {
  //     places.push(this.fb.group({
  //         street: [null, Validators.required],
  //         city: [null, Validators.required],
  //         zipCode: [null, Validators.pattern(/\d+/)]
  //       }));
  // }

  // editPlace(userid,phone,corrname,corrdob,corrdod,corrplot) {
  //   // this.selectedPlace = index;
  //   console.log("update");
  //   this.ApiService.correctionkubur(userid,phone,corrname,corrdob,corrdod,corrplot).subscribe(result => {
  //   console.log("result");
  //   console.log(result)
  //   },
  //   error => {
  //     const allInfo = `Maklumat anda berjaya dihantar!`;
  //     alert(allInfo);
  //     console.log("update accepted");
  //     console.log(error.status);
      
  //     if(error.status==200){
  //     const allInfo = `Maklumat anda tidak berjaya dihantar!`;
  //     alert(allInfo);
  //     this.router.navigate(['/displaydata']);
  //     }
  //   }
  //  )
  // }

  // removePlace(index) {
  //   let places = (<FormArray>this.placesForm.get('places'));
  //   places.removeAt(index);
  //   if (this.selectedPlace >= places.controls.length) {
  //     this.selectedPlace --;
  //   }
  // }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  
  // update(userid,phone,corrname,corrdob,corrdod,corrplot){
  //   console.log("accept");
  //   this.ApiService.correctionkubur(userid,phone,corrname,corrdob,corrdod,corrplot).subscribe(result => {
  //   console.log("result");
  //   console.log(result)
  //   },
  //   error => {
  //     const allInfo = `Maklumat anda berjaya dihantar!`;
  //     alert(allInfo);
  //     console.log("update accepted");
  //     console.log(error.status);
      
  //     if(error.status==200){
  //     const allInfo = `Maklumat anda tidak berjaya dihantar!`;
  //     alert(allInfo);
  //     this.router.navigate(['/displaydata']);
  //     }
  //   }
  //  )
  // }


  format = "dd/MM/yyyy";
  date = new Date();
  form = new FormGroup({
  date: new FormControl(this.date)
  })


}
