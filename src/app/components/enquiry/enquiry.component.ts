import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../shared/api-service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {

  
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  data = [];
  mySubscription: any;

  constructor(
    private ApiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) { 

    this.http.get('php/listenquiry.php').subscribe(data => {
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

  reply(name,email, enquiry, status) {
    console.log("reply");
    this.ApiService.replyenq(name,email, enquiry, status).subscribe(result => {
    console.log("result: ", result);
    const allInfo = `${name} sudah dibalas`;
      alert(allInfo);
      this.router.navigate(['/enquiry']);
    },
    error => {
      console.log("admin replied");
      console.log(error.status);
      
      if(error.status==200){
      // const allInfo = `${name} sudah dibalas`;
      // alert(allInfo);
      this.router.navigate(['/enquiry']);
      }
    }
   )
   }

}
