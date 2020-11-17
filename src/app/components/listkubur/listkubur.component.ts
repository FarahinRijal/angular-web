import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/api-service';
import { NavigationEnd, Router, Data } from '@angular/router';
import { Employee } from 'src/app/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listkubur',
  templateUrl: './listkubur.component.html',
  styleUrls: ['./listkubur.component.scss']
})
export class ListKuburComponent implements OnInit, OnDestroy {

  mySubscription: any;  
  response = [];
  @Input() public isClicked: boolean;
  p: number = 1;
  currentEmployee: Data = new Employee();
  data = [];
  popupVisible = false;
  submitForm: FormGroup;

  locList: any = ['Kangkar Pulai',
                  'Impian Emas', ]
 
  form = new FormGroup({
  location: new FormControl('', Validators.required),
  name: new FormControl('', Validators.required)
 });
   
 get f(){
   return this.form.controls;
 }
 
 changeWebsite(selectedValue:string){
     console.log('value is ',selectedValue);
  
     }

 onChangeEvent(event: any){

      console.log(event.target.value);
  
    }
 
 submit(){
     
     let data = this.form.value;
     console.log("chck data",data);
     let locationselected = this.form.value.location;
     console.log("search-->", this.form.value.name);
     
     if (locationselected == "Kangkar Pulai") {
       var body = {
         location: "Kangkar Pulai",
         nama: this.form.value.name,
       } 
       console.log("KP selected");
       
     } 
     else    
     {
       var body = {
         location: "Impian Emas",
         nama: this.form.value.name,
       } 
       console.log("IE selected");
     }
     
 
      // this.http.post('http://localhost/php_ara/searchloc.php', JSON.stringify(body))
      // .subscribe(response => {
      // this.response.push(response);
      // console.log("response ==> ", response);

      this.http.post('http://localhost/php_ara/searchloc.php', JSON.stringify(body))
      .subscribe((response: any[]) => {
        this.response = response;
      console.log("response ==> ", response);
     },
       error => {
         console.log("error");
         console.log(error);         
        const allInfo = `No records found.`;
        alert(allInfo);
       });
 
       this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });

  }  
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  constructor(
    private http: HttpClient,
    private ApiService: ApiService,
    private router: Router,
  ) { 
 

}  

  ngOnInit(): void {
    this.isClicked = true;
  }

show(kubur){
  console.log("data->", this.currentEmployee);    
  this.currentEmployee = kubur;
  this.popupVisible = true;
}

update(nama,dob,dod,plot,corrnama,corrdob,corrdod,corrplot){
  console.log("kemaskini",this.data);
    this.ApiService.correctionkubur(nama,dob,dod,plot,corrnama,corrdob,corrdod,corrplot).subscribe(result => {
    console.log("result");
    console.log(result)
    },
    error => {
      console.log("error: ",error.status);
      console.log("data: ",this.currentEmployee);
      
      if(error.status==200){
      const allInfo = `Laporan ${nama} berjaya dihantar!`;
      alert(allInfo);
      this.router.navigate(['/listkubur']);
      }
    })
}


public toggle(): void { 
  this.isClicked = !this.isClicked; 
  console.log(this.isClicked);
} 

public backTogle(): void { 
  this.isClicked = true;
} 

lokasi () {

}

}
