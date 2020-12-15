import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api-service';
import { Employee } from 'src/app/app.service';
import { Data } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {

  @Input() public isClicked: boolean;
  p: number = 1;
  collection: any[];  
  name : any;
  currentEmployee: Data = new Employee();
  data = [];
  popupVisible = false;
  submitForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ApiService: ApiService,
    public formBuilder: FormBuilder
    
    ) {


    this.http.get('php/listkubur.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));

    // this.submitForm = formBuilder.group({      
    //   userid: [''],
    //   name: [''],
    //   dod: [''],
    //   dob: [''],
    //   plot: [''],
    //   // latitude: [''],
    //   // longitude: ['']
    // }); 

}

// submit() {
//   let data = this.submitForm.value;
//   this.ApiService.correctionkubur(data.userid, data.name, data.dob, data.dod, data.plot,data.corrname, data.corrdob, data.corrdod, data.corrplot, data.lat, data.long).subscribe( 
//     data => {
//       console.log("submit:",data);  
//       const allInfo = `New record created successfully.`;
//       alert(allInfo);
//       this.router.navigate(['/displaydata']);
    
//   },
//     error => {
//       console.log(error);
//       const allInfo = `Registration failed!`;
//       alert(allInfo);
//   }); 
  
// }


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
      this.router.navigate(['/displaydata']);
      }
    })
}

ngOnInit(): void {
  this.isClicked = true;
}

public toggle(): void { 
  this.isClicked = !this.isClicked; 
  console.log(this.isClicked);
} 

public backTogle(): void { 
  this.isClicked = true;
} 

lokasi() {

}

// updateKubur(nama, dob, dod, plot) {
//   this.success = '';
//   this.error = '';

//   let data = this.reactiveForm.value;
//   this.ApiService.update(data.nama, data.dob,  data.dod, data.plot)
//     .subscribe(
//       (res) => {
//         // this.data = res;
//         this.success = 'Updated successfully';
//       },
//       (err) => this.error = err
//     );
// }

 


}
