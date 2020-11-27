import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api-service';

@Component({
  selector: 'app-calculator',
  templateUrl:'./calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  
  // luasForm: FormGroup;
  invalid = false;

  constructor(
    private formBuilder : FormBuilder,
    private ApiService : ApiService,
    private router : Router
  ) { 
    // this.luasForm = formBuilder.group({      
    //   luas: ['', Validators.required],
    //   plot: ['', Validators.required],
    //   panjang: ['', Validators.required],
    //   lebar: ['', Validators.required],
    //   tanah: ['', Validators.required]
    // }); 
  }

  luasForm = new FormGroup({
    luas : new FormControl(''),
    plot : new FormControl(''),
    panjang : new FormControl(''),
    lebar : new FormControl(''),
    area: new FormControl(''),
    tanah: new FormControl('')
  });

  masaForm = new FormGroup({
    luastanah : new FormControl(''),
    matisebulan : new FormControl(''),
    length : new FormControl(''),
    width : new FormControl(''),
    area: new FormControl(''),
    masa: new FormControl('')
  });


  ngOnInit(): void {
  }

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;  

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  // Keluasan bagi Satu Lot
  tanah : string;
  lotsedia : string;
  keluasanlot : number;

  KeluasanLot (){
    this.keluasanlot = parseFloat(this.tanah) / parseInt(this.lotsedia); 
  }

  // Bilangan Lot yang Masih Kosong
  luaslotkosong : string;
  satulot : string;
  billotkosong : number;

  LotKosong (){
    this.billotkosong = parseFloat(this.luaslotkosong) / parseFloat(this.satulot); 
  }

   // Keluasan Tanah Perkuburan Yang Masih Tinggal 
   tinggal : number;
   luas : string;
   plot : string;  
   panjang : number;
   lebar : number;
 
  //  baru = '';
  //  value :string;
  //  Area(baru: string) {    
  //    let area = this.panjang * this.lebar; 
  //    this.luasForm.value.area = area;  
  //    let A = this.luasForm.value.area; 
  //    console.log("area:", A);  
  //    // let baru = this.luasForm.value.area; 
  //    // console.log("baru:",baru); 
  //  }

   Tinggal () {    
    let area1 = this.panjang * this.lebar; 
     this.luasForm.value.area = area1;  
     let A = this.luasForm.value.area; 
    console.log("area",A);
     this.tinggal = parseFloat(this.luas) - (parseFloat(this.plot) * area1);
     let tgl = this.tinggal;
     console.log("Tinggal",tgl);
     this.luasForm.value.tanah = tgl;  
     let B = this.luasForm.value.tanah; 
     console.log("Tanah",B);
     console.log("Tanah Tinggal:",this.luasForm.value, tgl);
     let data = this.luasForm.value;
     this.ApiService.tanahtinggal(data.area,data.luas,data.plot,data.tanah).subscribe( 
       data => {
         console.log(data);          
         this.invalid = false;
         const allInfo = `Rekod keluasan tanah berjaya ditambah.`;
         alert(allInfo);
         this.router.navigate(['/kalkulator']);
       
     },
       error => {
         console.log(error);
         this.invalid = true;
         const allInfo = `Rekod tidak berjaya!`;
         alert(allInfo);
     });
     
   }

  // area1 : number;

  //  Area () {     
  //   let area1 = this.panjang * this.lebar; 
  //   this.luasForm.value.area = area1;  
  //   console.log("area:",area1);
  //  }

  // value = '';
  // update(value: string) { 
  //   this.value = value; 
  // }

   
  

  // Keluasan Tanah Perkuburan yang Telah Digunakan
  
  jangkamasa : number;
  luastanah : string;
  matisebulan : string;  
  length : number;
  width : number;

  JangkaMasa () {
    let area = this.width * this.length; 
    this.masaForm.value.area = area;  
    let C = this.masaForm.value.area; 
    console.log("area: ",C);
    this.jangkamasa = parseFloat(this.luastanah) / parseInt(this.matisebulan) * area;
    let masa = this.jangkamasa;
    console.log("Jangka: ",masa);
    this.masaForm.value.masa = masa;  
    let D = this.masaForm.value.masa; 
    console.log("Masa: ",D);
    console.log("Jangka Masa:",this.masaForm.value, masa);
    let data = this.masaForm.value;
    console.log("Jangka Masa:", data);
    this.ApiService.jangkamasa(data.luastanah,data.matisebulan,data.area,data.masa).subscribe( 
      data => {
        console.log(data);          
        this.invalid = false;
        const allInfo = `Rekod jangka masa berjaya ditambah.`;
        alert(allInfo);
        this.router.navigate(['/kalkulator']);
      
    },
      error => {
        console.log(error);
        this.invalid = true;
        const allInfo = `Rekod tidak berjaya!`;
        alert(allInfo);
    });
  }


}
