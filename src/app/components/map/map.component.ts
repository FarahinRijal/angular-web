import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  latitude: number;
  longitude: number;
  nama: string;
  plot:string;
  dob: string;
  dod:string;

  lat : number;
  lng : number;
  nam : number;
  plo : number;
  db : number;
  dd : number;
  previous;

  // lat = 1.53280; 1.554812
  // lng = 103.621613; 103.584084


  constructor (
    private route: ActivatedRoute
  ) {

  }

  ngOnInit () { 
    this.nama = this.route.snapshot.queryParams.data1;
    this.dob = this.route.snapshot.queryParams.data2;
    this.dod = this.route.snapshot.queryParams.data3;
    this.plot = this.route.snapshot.queryParams.data4; 
    this.latitude = this.route.snapshot.queryParams.data5;
    this.longitude = this.route.snapshot.queryParams.data6; 
    // console.log("receive dod-> ",this.route.snapshot.queryParams.data3);    
    // console.log("receive long-> ",this.route.snapshot.queryParams.data6);
    // console.log("receive nama-> ",this.route.snapshot.queryParams.data1);    
    // console.log("receive plot-> ",this.route.snapshot.queryParams.data4);
    this.nam = parseFloat(this.route.snapshot.queryParams.data1);
    this.db = parseFloat(this.route.snapshot.queryParams.data2);
    this.dd = parseFloat(this.route.snapshot.queryParams.data3);
    this.plo = parseFloat(this.route.snapshot.queryParams.data4);
    this.lat = parseFloat(this.route.snapshot.queryParams.data5);
    this.lng = parseFloat(this.route.snapshot.queryParams.data6);
    // console.log("loc: ", this.lat, this.lng)

  }

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }

  

  // get() {
  //   let lat = this.latitude;
  //   let lng = this.longitude;
  //   console.log("latlong->", lat, lng)
  // }

  // getMessage(id : number) {
  //   this.receivedChildMessage = id;
  //   console.log("get map:", this.receivedChildMessage);
  //   // console.log("Height = " + value.id); 
  //   // this.id = id
  // }

 

}
