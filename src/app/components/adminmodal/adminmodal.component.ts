import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Employee } from 'src/app/app.service';
import { ApiService } from '../shared/api-service';

@Component({
  selector: 'app-adminmodal',
  templateUrl: './adminmodal.component.html',
  styleUrls: ['./adminmodal.component.scss']
})
export class AdminmodalComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Input() selected: string = '';  
  @Input() public isClicked: boolean; 

  currentName: Data = new Employee();
  response = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ApiService: ApiService
  ) { }

  updateForm = new FormGroup({
    nama : new FormControl('', Validators.required),
    dob : new FormControl('', Validators.required),
    dod : new FormControl('', Validators.required),
    plot : new FormControl('', Validators.required),
    corrnama: new FormControl('', Validators.required),
    corrdob:new FormControl('', Validators.required),
    corrdod: new FormControl('', Validators.required),
    corrplot: new FormControl('', Validators.required)
  });


  name: string;
  dob: string;
  dod: string;
  plot:string;
  lat: string;
  lng:string;
  id: number;

  nam : number;
  db : number;
  dd : number;
  plo : number;
  lt : number;
  long : number;
  Id : number;

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams.data1;
    this.dob = this.route.snapshot.queryParams.data2; 
    this.dod = this.route.snapshot.queryParams.data3;
    this.plot = this.route.snapshot.queryParams.data4;    
    this.lat = this.route.snapshot.queryParams.data5;
    this.lng = this.route.snapshot.queryParams.data6;
    this.id = this.route.snapshot.queryParams.data7;
    console.log("receive id-> ",this.route.snapshot.queryParams.data7);    
    // console.log("receive dob-> ",this.route.snapshot.queryParams.data2);
    // console.log("receive dod-> ",this.route.snapshot.queryParams.data3);    
    // console.log("receive plot-> ",this.route.snapshot.queryParams.data4);
    this.nam = parseFloat(this.route.snapshot.queryParams.data1);
    this.db = parseFloat(this.route.snapshot.queryParams.data2);
    this.dd = parseFloat(this.route.snapshot.queryParams.data3);
    this.plo = parseFloat(this.route.snapshot.queryParams.data4);
    this.lt = parseFloat(this.route.snapshot.queryParams.data5);
    this.long = parseFloat(this.route.snapshot.queryParams.data6);
    this.Id = parseFloat(this.route.snapshot.queryParams.data7);

    
    this.isClicked = false;
  }

  public toggle(): void { 
    this.isClicked = !this.isClicked; 
    console.log("kemaskini: ",this.isClicked);
  }

  public backTogle(): void { 
    this.isClicked = false;
    const allInfo = `Laporan dibatalkan!`;
    alert(allInfo);
    this.router.navigate(['/listkubur']);
  } 

  lokasi()
  {
    console.log("curr lat->", this.lat);
    let lat = this.lat;
    let lng = this.lng;
    let pl = this.plot;
    let nama = this.name;    
    let db = this.dob;
    let dd = this.dod;
    this.router.navigate(['/admin-map'], {queryParams: {data1 : nama, data2 : db, data3 : dd, data4 : pl, data5 : lat, data6 : lng}});
    // console.log("pass dob->", db);
    // console.log("pass long->", lng); 
    // console.log("pass plot->", pl);
    // console.log("pass nama->", nama); 
  }

  update(){
    console.log("old data ->",this.name);
    let oldname = this.name;
    let olddob = this.dob;
    let olddod = this.dod;
    let oldplot = this.plot;
    let testkubur_id = this.Id;
    this.updateForm.value.nama = oldname;
    console.log("data ->",oldname);
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
      }
      else{
        const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
        alert(allInfo);
        // window.location.reload();
      }
      this.isClicked = false;
      // this.router.navigate(['/search-form']);
      // window.location.reload();
      },
      error => {
        console.log("error: ",error);
        // const allInfo = `Laporan ${oldname} terdahulu masih dalam proses`;
        // alert(allInfo);
        this.router.navigate(['/listkubur']);
      })
  }

  cancel() { 
    console.log("close")
    // this.onClose.emit(null); 
    this.isClicked = false;
    // const allInfo = `Close!`;
    // alert(allInfo);
    this.router.navigate(['/listkubur']);
  }

  
selectedItem() { 
  this.onClose.emit(this.selected) 
}



}

