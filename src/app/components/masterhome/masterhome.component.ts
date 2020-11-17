import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api-service';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-masterhome',
  templateUrl: './masterhome.component.html',
  styleUrls: ['./masterhome.component.scss']
})
export class MasterhomeComponent {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  data = [];
  mySubscription: any;

  constructor(
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router

    
  )
  
  {
    this.http.get('http://localhost/php_ara/getadmin.php').subscribe(data => {
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
  

  addRow(fullname,username,email, password, phone, job) {
    console.log("accept");
    this.ApiService.accept(fullname,username,email, password, phone, job).subscribe(result => {
    console.log("result");
    console.log(result)
    },
    error => {
      console.log("admin accepted");
      console.log(error.status);
      
      if(error.status==200){
      const allInfo = `${fullname} berjaya menjadi admin!`;
      alert(allInfo);
      this.router.navigate(['/masterhome']);
      }
    }
   )
   }

   deleteRow(fullname,username,email, password, phone, job) {
    console.log("reject");
    this.ApiService.reject(fullname,username,email, password, phone, job).subscribe(result => {
    console.log("result");
    console.log(result)
    },
    error => {
      console.log("admin rejected");
      console.log(error.status);
      
      if(error.status==200){
      const allInfo = `${fullname} tidak berjaya menjadi admin!`;
      alert(allInfo);
      this.router.navigate(['/masterhome']);
      }
    }
   )
   }

}
