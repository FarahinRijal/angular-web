import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../shared/api-service';
import { ToastrService } from 'ngx-toastr';
// import {month} from 'src/app/month';

@Component({
  selector: 'app-adminhome',
templateUrl: './adminhome.component.html',
styleUrls: ['./adminhome.component.scss']
})

export class AdminhomeComponent implements OnInit {

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
    this.bilkelahiran = parseInt(this.bilpopulasi) / 1000 * parseInt(this.kk); //kurang 1
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
    this.bilkem = (parseInt(this.bilpop) / 1000 ) * parseInt(this.kkn); //kurang 1
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

  reactiveForm: FormGroup;
  data = [];
  faPlus = faPlus;
  faTrash = faTrash;

  // month: any[];
  // public view2: any[] = [700, 400];
  // public showXAxis2 = true;
  // public showYAxis2 = true;
  // public gradient2 = false;
  // public showLegend2 = true;
  // public showXAxisLabel2 = true;
  // public xAxisLabel2: "Years";
  // public showYAxisLabel2 = true;
  // public yAxisLabel2: "Salary";
  // public graphDataChart: any[];
  // public colorScheme2 = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  constructor(
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private ApiService: ApiService,
    private toastr: ToastrService,
  ) 
  
  {
    this.http.get('php/getkubur.php').subscribe(data => {
    this.data.push(data);
    console.log("Get Kubur:",data);
    }, 
      error => console.error(error)
      );

    this.http.get('php/getjangkapenuh.php').subscribe(data1 => {
    this.data.push(data1);
    console.log("Tanah Tinggal:",(data1));
    }, 
      error => console.error(error)
      );

      this.http.get('php/getjangkamasa.php').subscribe(data2 => {
    this.data.push(data2);
    console.log("Jangka Penuh:",(data2));
    }, 
      error => console.error(error)
      );

      this.reactiveForm = formBuilder.group({      
        userid: [''],
        name: [''],
        dob: [''],
        dod: [''],
        plot: ['']
         
      }); 

      this.view = [innerWidth / 1.4, 400];

      // Object.assign(this, { month })

  }

  ngOnInit() {
  }

  pipe = new DatePipe('en-US');
  now = Date.now();
    
  // mySimpleFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
  myShortFormat = this.pipe.transform(this.now, 'dd-MM-yyyy / hh:mm a', '+0800' );

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

//   // data mengikut bulan
  // public month = [
  //   {
  //     "name": "Tidak ternyata",
  //     "value": 4
  //   },
  //   {
  //     "name": "Jun 1954",
  //     "value": 1
  //   },
  //   {
  //     "name": "Januari 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Februari 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Mac 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "April 2003",
  //     "value": 1
  //   },
  //   {
  //     "name": "Mei 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Jun 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Julai 2003",
  //     "value": 1
  //   },
  //   {
  //     "name": "Ogos 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "September 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "November 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Disember 2003",
  //     "value": 0
  //   },
  //   {
  //     "name": "Januari 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Februari 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Mac 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "April 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Mei 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Jun 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Julai 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Ogos 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "September 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "November 2004",
  //     "value": 0
  //   },
  //   {
  //     "name": "Disember 2004",
  //     "value": 2
  //   },
    
  //   {
  //     "name": "Januari 2005",
  //     "value": 2
  //   },
  //   {
  //     "name": "Februari 2005",
  //     "value": 3
  //   },
  //   {
  //     "name": "Mac 2005",
  //     "value": 2
  //   },
  //   {
  //     "name": "April 2005",
  //     "value": 5
  //   },
  //   {
  //     "name": "Mei 2005",
  //     "value": 1
  //   },
  //   {
  //     "name": "Jun 2005",
  //     "value": 0
  //   },
  //   {
  //     "name": "Julai 2005",
  //     "value": 3
  //   },
  //   {
  //     "name": "Ogos 2005",
  //     "value": 0
  //   },
  //   {
  //     "name": "September 2005",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2005",
  //     "value": 0
  //   },
  //   {
  //     "name": "November 2005",
  //     "value": 0
  //   },
  //   {
  //     "name": "Disember 2005",
  //     "value": 0
  //   },
    
  //   {
  //     "name": "Januari 2006",
  //     "value": 0
  //   },
  //   {
  //     "name": "Februari 2006",
  //     "value": 3
  //   },
  //   {
  //     "name": "Mac 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "April 2006",
  //     "value": 4
  //   },
  //   {
  //     "name": "Mei 2006",
  //     "value": 3
  //   },
  //   {
  //     "name": "Jun 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "Julai 2006",
  //     "value": 4
  //   },
  //   {
  //     "name": "Ogos 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "September 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "Oktober 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "November 2006",
  //     "value": 1
  //   },
  //   {
  //     "name": "Disember 2006",
  //     "value": 3
  //   },
    
  //   {
  //     "name": "Januari 2007",
  //     "value": 3
  //   },
  //   {
  //     "name": "Februari 2007",
  //     "value": 3
  //   },
  //   {
  //     "name": "Mac 2007",
  //     "value": 3
  //   },
  //   {
  //     "name": "April 2007",
  //     "value": 5
  //   },
  //   {
  //     "name": "Mei 2007",
  //     "value": 3
  //   },
  //   {
  //     "name": "Jun 2007",
  //     "value": 1
  //   },
  //   {
  //     "name": "Julai 2007",
  //     "value": 1
  //   },
  //   {
  //     "name": "Ogos 2007",
  //     "value": 4
  //   },
  //   {
  //     "name": "September 2007",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2007",
  //     "value": 2
  //   },
  //   {
  //     "name": "November 2007",
  //     "value": 2
  //   },
  //   {
  //     "name": "Disember 2007",
  //     "value": 1
  //   },
    
  //   {
  //     "name": "Januari 2008",
  //     "value": 1
  //   },
  //   {
  //     "name": "Februari 2008",
  //     "value": 1
  //   },
  //   {
  //     "name": "Mac 2008",
  //     "value": 4
  //   },
  //   {
  //     "name": "April 2008",
  //     "value": 7
  //   },
  //   {
  //     "name": "Mei 2008",
  //     "value": 1
  //   },
  //   {
  //     "name": "Jun 2008",
  //     "value": 4
  //   },
  //   {
  //     "name": "Julai 2008",
  //     "value": 3
  //   },
  //   {
  //     "name": "Ogos 2008",
  //     "value": 8
  //   },
  //   {
  //     "name": "September 2008",
  //     "value": 4
  //   },
  //   {
  //     "name": "Oktober 2008",
  //     "value": 6
  //   },
  //   {
  //     "name": "November 2008",
  //     "value": 3
  //   },
  //   {
  //     "name": "Disember 2008",
  //     "value": 5
  //   },
    
  //   {
  //     "name": "Januari 2009",
  //     "value": 4
  //   },
  //   {
  //     "name": "Februari 2009",
  //     "value": 4
  //   },
  //   {
  //     "name": "Mac 2009",
  //     "value": 1
  //   },
  //   {
  //     "name": "April 2009",
  //     "value": 5
  //   },
  //   {
  //     "name": "Mei 2009",
  //     "value": 6
  //   },
  //   {
  //     "name": "Jun 2009",
  //     "value": 3
  //   },
  //   {
  //     "name": "Julai 2009",
  //     "value": 5
  //   },
  //   {
  //     "name": "Ogos 2009",
  //     "value": 5
  //   },
  //   {
  //     "name": "September 2009",
  //     "value": 4
  //   },
  //   {
  //     "name": "Oktober 2009",
  //     "value": 5
  //   },
  //   {
  //     "name": "November 2009",
  //     "value": 3
  //   },
  //   {
  //     "name": "Disember 2009",
  //     "value": 5
  //   },
    
  //   {
  //     "name": "Januari 2010",
  //     "value": 5
  //   },
  //   {
  //     "name": "Februari 2010",
  //     "value": 4
  //   },
  //   {
  //     "name": "Mac 2010",
  //     "value": 3
  //   },
  //   {
  //     "name": "April 2010",
  //     "value": 4
  //   },
  //   {
  //     "name": "Mei 2010",
  //     "value": 4
  //   },
  //   {
  //     "name": "Jun 2010",
  //     "value": 1
  //   },
  //   {
  //     "name": "Julai 2010",
  //     "value": 9
  //   },
  //   {
  //     "name": "Ogos 2010",
  //     "value": 7
  //   },
  //   {
  //     "name": "September 2010",
  //     "value": 4
  //   },
  //   {
  //     "name": "Oktober 2010",
  //     "value": 5
  //   },
  //   {
  //     "name": "November 2010",
  //     "value": 5
  //   },
  //   {
  //     "name": "Disember 2010",
  //     "value": 6
  //   },
  //   {
  //     "name": "Januari 2011",
  //     "value": 4
  //   },
  //   {
  //     "name": "Februari 2011",
  //     "value": 3
  //   },
  //   {
  //     "name": "Mac 2011",
  //     "value": 13
  //   },
  //   {
  //     "name": "April 2011",
  //     "value": 6
  //   },
  //   {
  //     "name": "Mei 2011",
  //     "value": 5
  //   },
  //   {
  //     "name": "Jun 2011",
  //     "value": 7
  //   },
  //   {
  //     "name": "Julai 2011",
  //     "value": 3
  //   },
  //   {
  //     "name": "Ogos 2011",
  //     "value": 3
  //   },
  //   {
  //     "name": "September 2011",
  //     "value": 3
  //   },
  //   {
  //     "name": "Oktober 2011",
  //     "value": 4
  //   },
  //   {
  //     "name": "November 2011",
  //     "value": 5
  //   },
  //   {
  //     "name": "Disember 2011",
  //     "value": 2
  //   },
  //   {
  //     "name": "Januari 2012",
  //     "value": 4
  //   },
  //   {
  //     "name": "Februari 2012",
  //     "value": 4
  //   },
  //   {
  //     "name": "Mac 2012",
  //     "value": 4
  //   },
  //   {
  //     "name": "April 2012",
  //     "value": 6
  //   },
  //   {
  //     "name": "Mei 2012",
  //     "value": 10
  //   },
  //   {
  //     "name": "Jun 2012",
  //     "value": 8
  //   },
  //   {
  //     "name": "Julai 2012",
  //     "value": 14
  //   },
  //   {
  //     "name": "Ogos 2012",
  //     "value": 6
  //   },
  //   {
  //     "name": "September 2012",
  //     "value": 8
  //   },
  //   {
  //     "name": "Oktober 2012",
  //     "value": 10
  //   },
  //   {
  //     "name": "November 2012",
  //     "value": 9
  //   },
  //   {
  //     "name": "Disember 2012",
  //     "value": 6
  //   },
  //   {
  //     "name": "Januari 2013",
  //     "value": 10
  //   },
  //   {
  //     "name": "Februari 2013",
  //     "value": 11
  //   },
  //   {
  //     "name": "Mac 2013",
  //     "value": 6
  //   },
  //   {
  //     "name": "April 2013",
  //     "value": 10
  //   },
  //   {
  //     "name": "Mei 2013",
  //     "value": 8
  //   },
  //   {
  //     "name": "Jun 2013",
  //     "value": 4
  //   },
  //   {
  //     "name": "Julai 2013",
  //     "value": 9
  //   },
  //   {
  //     "name": "Ogos 2013",
  //     "value": 9
  //   },
  //   {
  //     "name": "September 2013",
  //     "value": 7
  //   },
  //   {
  //     "name": "Oktober 2013",
  //     "value": 12
  //   },
  //   {
  //     "name": "November 2013",
  //     "value": 3
  //   },
  //   {
  //     "name": "Disember 2013",
  //     "value": 5
  //   },
  //   {
  //     "name": "Januari 2014",
  //     "value": 4
  //   },
  //   {
  //     "name": "Februari 2014",
  //     "value": 6
  //   },
  //   {
  //     "name": "Mac 2014",
  //     "value": 6
  //   },
  //   {
  //     "name": "April 2014",
  //     "value": 5
  //   },
  //   {
  //     "name": "Mei 2014",
  //     "value": 7
  //   },
  //   {
  //     "name": "Jun 2014",
  //     "value": 9
  //   },
  //   {
  //     "name": "Julai 2014",
  //     "value": 9
  //   },
  //   {
  //     "name": "Ogos 2014",
  //     "value": 5
  //   },
  //   {
  //     "name": "September 2014",
  //     "value": 6
  //   },
  //   {
  //     "name": "Oktober 2014",
  //     "value": 2
  //   },
  //   {
  //     "name": "November 2014",
  //     "value": 6
  //   },
  //   {
  //     "name": "Disember 2014",
  //     "value": 12
  //   },
  //   {
  //     "name": "Januari 2015",
  //     "value": 20
  //   },
  //   {
  //     "name": "Februari 2015",
  //     "value": 12
  //   },
  //   {
  //     "name": "Mac 2015",
  //     "value": 10
  //   },
  //   {
  //     "name": "April 2015",
  //     "value": 14
  //   },
  //   {
  //     "name": "Mei 2015",
  //     "value": 18
  //   },
  //   {
  //     "name": "Jun 2015",
  //     "value": 4
  //   },
  //   {
  //     "name": "Julai 2015",
  //     "value": 11
  //   },
  //   {
  //     "name": "Ogos 2015",
  //     "value": 4
  //   },
  //   {
  //     "name": "September 2015",
  //     "value": 6
  //   },
  //   {
  //     "name": "Oktober 2015",
  //     "value": 11
  //   },
  //   {
  //     "name": "November 2015",
  //     "value": 6
  //   },
  //   {
  //     "name": "Disember 2015",
  //     "value": 5
  //   },
  //   {
  //     "name": "Januari 2016",
  //     "value": 5
  //   },
  //   {
  //     "name": "Februari 2016",
  //     "value": 12
  //   },
  //   {
  //     "name": "Mac 2016",
  //     "value": 12
  //   },
  //   {
  //     "name": "April 2016",
  //     "value": 6
  //   },
  //   {
  //     "name": "Mei 2016",
  //     "value": 15
  //   },
  //   {
  //     "name": "Jun 2016",
  //     "value": 15
  //   },
  //   {
  //     "name": "Julai 2016",
  //     "value": 10
  //   },
  //   {
  //     "name": "Ogos 2016",
  //     "value": 13
  //   },
  //   {
  //     "name": "September 2016",
  //     "value": 11
  //   },
  //   {
  //     "name": "Oktober 2016",
  //     "value": 14
  //   },
  //   {
  //     "name": "November 2016",
  //     "value": 11
  //   },
  //   {
  //     "name": "Disember 2016",
  //     "value": 13
  //   },
  //   {
  //     "name": "Januari 2017",
  //     "value": 13
  //   },
  //   {
  //     "name": "Februari 2017",
  //     "value": 7
  //   },
  //   {
  //     "name": "Mac 2017",
  //     "value": 12
  //   },
  //   {
  //     "name": "April 2017",
  //     "value": 5
  //   },
  //   {
  //     "name": "Mei 2017",
  //     "value": 16
  //   },
  //   {
  //     "name": "Jun 2017",
  //     "value": 14
  //   },
  //   {
  //     "name": "Julai 2017",
  //     "value": 8
  //   },
  //   {
  //     "name": "Ogos 2017",
  //     "value": 12
  //   },
  //   {
  //     "name": "September 2017",
  //     "value": 8
  //   },
  //   {
  //     "name": "Oktober 2017",
  //     "value": 11
  //   },
  //   {
  //     "name": "November 2017",
  //     "value": 12
  //   },
  //   {
  //     "name": "Disember 2017",
  //     "value": 11
  //   },
  //   {
  //     "name": "Januari 2018",
  //     "value": 13
  //   },
  //   {
  //     "name": "Februari 2018",
  //     "value": 12
  //   },
  //   {
  //     "name": "Mac 2018",
  //     "value": 12
  //   },
  //   {
  //     "name": "April 2018",
  //     "value": 16
  //   },
  //   {
  //     "name": "Mei 2018",
  //     "value": 14
  //   },
  //   {
  //     "name": "Jun 2018",
  //     "value": 9
  //   },
  //   {
  //     "name": "Julai 2018",
  //     "value": 13
  //   },
  //   {
  //     "name": "Ogos 2018",
  //     "value": 10
  //   },
  //   {
  //     "name": "September 2018",
  //     "value": 8
  //   },
  //   {
  //     "name": "Oktober 2018",
  //     "value": 13
  //   },
  //   {
  //     "name": "November 2018",
  //     "value": 7
  //   },
  //   {
  //     "name": "Disember 2018",
  //     "value": 8
  //   },
  //   {
  //     "name": "Januari 2019",
  //     "value": 3
  //   },
  //   {
  //     "name": "Februari 2019",
  //     "value": 2
  //   },
  //   {
  //     "name": "Mac 2019",
  //     "value": 1
  //   },
  //   {
  //     "name": "April 2019",
  //     "value": 1
  //   },
  //   {
  //     "name": "Mei 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Jun 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Julai 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Ogos 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "September 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "November 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Disember 2019",
  //     "value": 0
  //   },
  //   {
  //     "name": "Januari 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Februari 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Mac 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "April 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Mei 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Jun 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Julai 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Ogos 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "September 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Oktober 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "November 2020",
  //     "value": 0
  //   },
  //   {
  //     "name": "Disember 2020",
  //     "value": 0
  //   },

  // ];

}
