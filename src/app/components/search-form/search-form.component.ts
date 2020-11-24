import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api-service';
import { Data, Router } from '@angular/router';
import { Employee } from 'src/app/app.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {

  showModal: boolean = false;
  selected: string = '';

  @Input() public isClicked: boolean;
  // @Input() public isShow: boolean;
  p: number = 1;
  currentName: Data = new Employee();
  // popupVisible = false;

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
    // latitude: new FormControl('', Validators.required),
    // longitude: new FormControl('', Validators.required)
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
      // console.log("KP selected");
      
    } 
    else    
    {
      var body = {
        location: "Impian Emas",
        nama: this.form.value.name,
      } 
      // console.log("IE selected");
    }
    

    this.http.post('http://localhost/php_ara/searchloc.php', JSON.stringify(body))
      .subscribe((response: any[]) => {
        this.response = response;
      // this.response.push(response);
      // console.log("response ==> ", response);
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

  // show(kubur){
  //   // console.log("data->", this.currentName);    
  //   this.currentName = kubur;
  //   this.popupVisible = true; 
  // }
  
  // // update(corrname,corrdob,corrdod,corrplot){
  //   update(){
  //   console.log("old data ->",this.currentName);
  //   let oldname = this.currentName.nama;
  //   let olddob = this.currentName.dob;
  //   let olddod = this.currentName.dod;
  //   let oldplot = this.currentName.plot;
  //   let testkubur_id = this.currentName.id;
  //   this.updateForm.value.nama = oldname;
  //   this.updateForm.value.dob = olddob;
  //   this.updateForm.value.dod = olddod;
  //   this.updateForm.value.plot = oldplot;
  //   this.updateForm.value.id = testkubur_id;
  //   let edit = this.updateForm.value;
  //   console.log("updated data",edit);
  //     this.ApiService.correction(edit.nama,edit.dob,edit.dod,edit.plot,edit.corrnama,edit.corrdob,edit.corrdod,edit.corrplot,edit.id).subscribe(result => {
  //     console.log("result");
  //     console.log(result['message']);

  //     // const allInfo ='';
  //     if(result['message']=='success'){
  //        const allInfo = `Laporan ${oldname} berjaya dihantar!`;
  //        alert(allInfo);
  //        window.location.reload();
  //     }
  //     else{
  //       const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
  //       alert(allInfo);
  //       window.location.reload();
  //     }
  //     this.router.navigate(['/search-form']);
  //     // alert(allInfo);
  //     // window.location.reload();
  //     // this.router.navigate(['/search-form']);
  //     },
  //     error => {
  //       console.log("error: ",error);
  //       // const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
  //       // alert(allInfo);
  //       // window.location.reload();
  //       this.router.navigate(['/search-form']);
  //     })
  // }
  
  
  // public toggle(): void { 
  //   this.isClicked = !this.isClicked; 
  //   console.log("kemaskini: ",this.isClicked);
  // } 
  
  // public backTogle(): void { 
  //   this.isClicked = true;
  //   const allInfo = `Laporan dibatalkan!`;
  //   alert(allInfo);
  // } 

  // lokasi()
  // {
  //   let lat = this.currentName.latitude;
  //   let lng = this.currentName.longitude;
  //   let pl = this.currentName.plot;
  //   let nama = this.currentName.nama;
  //   this.updateForm.value.latitude = lat;  
  //   this.updateForm.value.longitude = lng;    
  //   this.updateForm.value.nama = nama;  
  //   this.updateForm.value.plot = pl;
  //   let lati = this.updateForm.value.latitude;  
  //   let longi = this.updateForm.value.longitude;
  //   let nam = this.updateForm.value.nama;  
  //   let plot = this.updateForm.value.plot;
  //   // let adduserdata = this.currentName.latitude;
  //   this.router.navigate(['/map'], {queryParams: {data1 : lati, data2 : longi, data3 : nam, data4 : plot}});
  //   // console.log("pass lati->", lati);
  //   // console.log("pass long->", longi); 
  //   // console.log("pass nama->", nam);
  //   // console.log("pass plot->", plot); 
  // }

  selectItem(kubur) {  
    this.showModal = true;
    this.currentName = kubur;
    console.log("curr:", this.currentName);
    let id = this.currentName.id;
    let nama = this.currentName.nama;
    let dob = this.currentName.dob;
    let dod = this.currentName.dod;
    let plt = this.currentName.plot;
    let lat = this.currentName.latitude;
    let lng = this.currentName.longitude;
    this.updateForm.value.id = id;  
    this.updateForm.value.nama = nama;  
    this.updateForm.value.dob = dob;    
    this.updateForm.value.dod = dod;  
    this.updateForm.value.plot = plt;    
    this.updateForm.value.latitude = lat;  
    this.updateForm.value.longitude = lng;
    let Id = this.updateForm.value.id;  
    let name = this.updateForm.value.nama;  
    let db = this.updateForm.value.dob;
    let dd = this.updateForm.value.dod;  
    let plot = this.updateForm.value.plot;
    let lt = this.updateForm.value.latitude;  
    let long = this.updateForm.value.longitude;
    this.router.navigate(['/modal'], {queryParams: {data1 : name, data2 : db, data3 : dd, data4 : plot, data5 : lt, data6 : long, data7 : Id}});
    console.log("pass id->", Id);
    // console.log("pass dob->", db); 
    // console.log("pass dod->", dd);
    // console.log("pass plot->", plot); 
    // console.log("pass lat->", lt);
    // console.log("pass long->", long); 
 }

//  selectedItem(selected) {
//   this.showModal = false; // hide modal
//   if(selected) {
//     this.selected = selected;
//   }
// }

  ngOnInit() {
    this.isClicked = true;
  }

}

