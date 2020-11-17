import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api-service';
import { NavigationEnd, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-laporandata',
  templateUrl: './laporandata.component.html',
  styleUrls: ['./laporandata.component.scss'],
})
export class LaporandataComponent {
  
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  data = [];
  columns: string[];
  mySubscription: any;

  constructor(
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private ApiService: ApiService,
    private router: Router

  ) { 
    this.http.get('http://localhost/php_ara/correctionlist.php').subscribe(data => {
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

  accept(name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id) {
    console.log("accept -> user id", testkubur_id );
    this.ApiService.acceptlaporan(name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id).subscribe(result => {
    console.log("result");
    console.log(result)
    const allInfo = `${name}, laporan diterima!`;
    alert(allInfo);
    this.router.navigate(['/laporandata']);
    },
    error => {
      console.log("error:");
      console.log(error.status);
      
      if(error.status==200){
      const allInfo = `${name}, laporan diterima!`;
      alert(allInfo);
      this.router.navigate(['/laporandata']);
      }
    }
   )
   }

   reject(name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id) {
    console.log("'reject' -> user id", testkubur_id );
    this.ApiService.rejectlaporan(name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id).subscribe(result => {
    console.log("result");
    console.log(result)
    const allInfo = `${name}, laporan ditolak!`;
    alert(allInfo);
    this.router.navigate(['/laporandata']);
    },
    error => {
      console.log("error:");
      console.log(error.status);
      
      // if(error.status==200){
      // const allInfo = `${name}, laporan diterima!`;
      // alert(allInfo);
      // this.router.navigate(['/laporandata']);
      // }
    }
   )
   }


}
