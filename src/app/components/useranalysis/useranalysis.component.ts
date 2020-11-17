import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-useranalysis',
  templateUrl: './useranalysis.component.html',
styleUrls: ['./useranalysis.component.scss']
})
export class UseranalysisComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  populasimelayu : string;
  keluasan : string;
  kadar_populasi : number;

  KadarPopulasi () {
    this.kadar_populasi = parseInt(this.populasimelayu) / parseInt(this.keluasan);
  }

  bilpopu : string;
  kelahiran : string;
  kematian : string;
  unjuran : number;

  UnjuranPopulasi (){
    this.unjuran = parseInt(this.bilpopu) + parseInt(this.kelahiran) - parseInt(this.kematian);
  }

  bilkematian : string;
  jumpenduduk : string;
  kadarkematian : number;

  KadarKematian (){
    this.kadarkematian = parseInt(this.bilkematian) / parseInt(this.jumpenduduk) * 1000;
  }

  bilpopulasi : string;
  kk : string;
  bilkelahiran : number;

  BilKelahiran (){
    this.bilkelahiran = parseInt(this.bilpopulasi) / 1000 * parseFloat(this.kk); 
    // Math.round(this.bilkelahiran);
  }

  bilkel : string;
  jumlahpen : string;
  kadarkelahiran : number;

  KadarKelahiran (){
    this.kadarkelahiran = parseInt(this.bilkel) / parseInt(this.jumlahpen) * 1000;
  }

  bilpop : string;
  kkn : string;
  bilkem : number;

  BilKematian (){
    this.bilkem = (parseInt(this.bilpop) / 1000 ) * parseFloat(this.kkn); 
  }

  luastanah : string;
  lotsedia : string;
  keluasanlot : number;

  KeluasanLot (){
    this.keluasanlot = parseInt(this.luastanah) / parseInt(this.lotsedia); 
  }
 
  luasseluruhtanah : string;
  luastanahguna : string;
  keseluruhantanah : number;

  KeseluruhanTanah (){
    this.keseluruhantanah = parseFloat(this.luasseluruhtanah) - parseFloat(this.luastanahguna); 
  }
 
  luaslotkosong : string;
  satulot : string;
  billotkosong : number;

  LotKosong (){
    this.billotkosong = parseFloat(this.luaslotkosong) / parseFloat(this.satulot); 
  }


  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor() { }

  

  ngOnInit(): void {
  }
  

  view: any[] = [900, 400];

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
}
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tahun';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah Kematian';
  timeline = true;
  colorScheme = {
    domain: ['#87CEFA']
  };
  //pie
  showLabels = true;

  // data mengikut tahun
public year = [
  {
    "name": "Tidak ternyata",
    "value": 4
  },
  {
    "name": "1954",
    "value": 1
  },
  {
    "name": "2003",
    "value": 2
  },
  {
    "name": "2004",
    "value": 2
  },
  {
    "name": "2005",
    "value": 16
  },
  {
    "name": "2006",
    "value": 23
  },
  {
    "name": "2007",
    "value": 30
  },
  {
    "name": "2008",
    "value": 48
  },
  {
    "name": "2009",
    "value": 50
  },
  {
    "name": "2010",
    "value": 57
  },
  {
    "name": "2011",
    "value": 58
  },
  {
    "name": "2012",
    "value": 89
  },
  {
    "name": "2013",
    "value": 94
  },
  {
    "name": "2014",
    "value": 77
  },
  {
    "name": "2015",
    "value": 121
  },
  {
    "name": "2016",
    "value": 137
  },
  {
    "name": "2017",
    "value": 129
  },
  {
    "name": "2018",
    "value": 135
  },
  {
    "name": "2019",
    "value": 7
  },
  {
    "name": "2020",
    "value": 0
  }
];

}
