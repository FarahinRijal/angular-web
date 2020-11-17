import { Component, OnInit, NgZone, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api-service';
import { Data, Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/app.service';

// interface Student {
//   nama: string;
//   dob: string;
//   dod: string;
//   plot: string;
// }

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {

  @Input() public isClicked: boolean;
  p: number = 1;
  currentName: Data = new Employee();
  data = [];
  popupVisible = false;

  @Input() public isEditing: boolean;
  @Input() public isSaving: boolean;

  response = [];
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

get updateData(){
  return this.updateForm.controls;
}

changeWebsite(selectedValue:string){
    console.log('value is ',selectedValue);
 
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
    

    this.http.post('http://localhost/php_ara/searchloc.php', JSON.stringify(body))
      .subscribe((response: any[]) => {
        this.response = response;
      // this.response.push(response);
      console.log("response ==> ", response);
    },
      error => {
        console.log("error");
        console.log(error);
        const allInfo = `Tiada dalam rekod.`;
        alert(allInfo);
      });
}

  constructor(
    private http: HttpClient,
    private ApiService: ApiService,
    private router: Router,
    private fb:FormBuilder
    ) 
    {

    this.form = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    })

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
      console.log(result);
      const allInfo = `Laporan ${name} berjaya dihantar!`;
      alert(allInfo);
      // window.location.reload();
      this.router.navigate(['/search-form']);
      },
      error => {
        console.log("error: ",error.status);
      //   console.log("data: ",this.updateForm.value);
        
      //   if(error.status==200){
      //   const allInfo = `Laporan ${name} berjaya dihantar!`;
      //   alert(allInfo);
      //   this.router.navigate(['/search-form']);
      //   }
      })
  }
  
  
  public toggle(): void { 
    this.isClicked = !this.isClicked; 
    console.log("kemaskini: ",this.isClicked);
  } 
  
  public backTogle(): void { 
    this.isClicked = true;
    const allInfo = `Laporan dibatalkan!`;
    alert(allInfo);
  } 
  
  lokasi() {
    
  }
 
  ngOnInit() {
    this.isClicked = true;
  }

  format = "dd/MM/yyyy";


}
