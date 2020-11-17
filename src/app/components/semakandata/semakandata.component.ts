import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api-service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-semakandata',
  templateUrl:'./semakandata.component.html',
  styleUrls: ['./semakandata.component.scss'],
})
export class SemakandataComponent {

data = [];
mySubscription: any;

constructor(
  private http: HttpClient,
  public formBuilder: FormBuilder,
  private ApiService: ApiService,
  private router: Router

  
)

{
  this.http.get('http://localhost/php_ara/getkubur.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, 
    error => console.error(error));
    
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


accept(userid, name, dob, dod, plot,location) {
  console.log("accept kubur");
  this.ApiService.acceptkubur(userid, name, dob, dod, plot,location).subscribe(result => {
  console.log("result");
  console.log(result)
  },
  error => {
    console.log("kubur accepted");
    console.log(error.status);
    
    if(error.status==200){
    const allInfo = `${name} berjaya ditambah!`;
    alert(allInfo);
    this.router.navigate(['/semakandata']);
    }
  }
 )
 }

reject(userid, name, dob, dod, plot) {
      console.log("datakubur");
      this.ApiService.rejectkubur(userid, name, dob, dod, plot).subscribe(result => {
        console.log("result");
        console.log(result);
        // const allInfo = `Data ${name} kematian ditolak!`;
        // alert(allInfo);
        // this.router.navigate(['/semakandata']);
      },
      error => {
        console.log("data rejected");
        console.log(error.status);
        
        if(error.status==200){      
          const allInfo = `Data ${name} kematian ditolak!`;
        alert(allInfo);  
        this.router.navigate(['/semakandata']);
        }
      }
     )
     }

}
