import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/api-service';
import { NavigationEnd, Router, Data } from '@angular/router';
import { Employee } from 'src/app/app.service';

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
  currentName: Data = new Employee();
  data = [];
  popupVisible = false;
  submitForm: FormGroup;

  locList: any = ['Kangkar Pulai',
                  'Impian Emas', ]
 
  form = new FormGroup({
  location: new FormControl('', Validators.required),
  name: new FormControl('', Validators.required)
 });

 updateForm = new FormGroup({
  nama : new FormControl('', Validators.required),
  dob : new FormControl('', Validators.required),
  dod : new FormControl('', Validators.required),
  plot : new FormControl('', Validators.required),
  corrnama: new FormControl('', Validators.required),
  corrdob:new FormControl('', Validators.required),
  corrdod: new FormControl('', Validators.required),
  corrplot: new FormControl('', Validators.required),
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
  console.log("data->", this.currentName);    
  this.currentName = kubur;
  this.popupVisible = true;
}

  // update(corrname,corrdob,corrdod,corrplot){
    update(){
      console.log("old data ->",this.currentName);
      let oldname = this.currentName.nama;
      let olddob = this.currentName.dob;
      let olddod = this.currentName.dod;
      let oldplot = this.currentName.plot;
      let testkubur_id = this.currentName.id;
      // console.log("nama lama:", oldname);
      // console.log("dob lama:", olddob);
      // console.log("dod lama:", olddod);
      // console.log("plot lama:", oldplot);
      // console.log("id lama:", testkubur_id);
      this.updateForm.value.nama = oldname;
      this.updateForm.value.dob = olddob;
      this.updateForm.value.dod = olddod;
      this.updateForm.value.plot = oldplot;
      this.updateForm.value.id = testkubur_id;
      let edit = this.updateForm.value;
      console.log("updated data",edit);
        this.ApiService.correction(edit.nama,edit.dob,edit.dod,edit.plot,edit.corrnama,edit.corrdob,edit.corrdod,edit.corrplot,edit.id).subscribe(result => {
          console.log("result");
          console.log(result['message']);
    
          // const allInfo ='';
          if(result['message']=='success'){
             const allInfo = `Laporan ${oldname} berjaya dihantar!`;
             alert(allInfo);
             window.location.reload();
          }
          else{
            const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
            alert(allInfo);
            window.location.reload();
          }
          this.router.navigate(['/listkubur']);
          // alert(allInfo);
          // window.location.reload();
          // this.router.navigate(['/search-form']);
          },
          error => {
            console.log("error: ",error.status);
            const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
            alert(allInfo);
            // window.location.reload();
            this.router.navigate(['/search-form']);
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
