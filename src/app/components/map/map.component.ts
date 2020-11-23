import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-smap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  latitude: number;
  longitude: number;
  nama: string;
  plot:string;

  lat : number;
  lng : number;
  nam : number;
  plo : number;
  previous;

  // lat = 1.53280; 1.554812
  // lng = 103.621613; 103.584084


  constructor (
    private route: ActivatedRoute
  ) {

  }

  ngOnInit () { 
    this.latitude = this.route.snapshot.queryParams.data1;
    this.longitude = this.route.snapshot.queryParams.data2; 
    this.nama = this.route.snapshot.queryParams.data3;
    this.plot = this.route.snapshot.queryParams.data4;
    // console.log("receive lati-> ",this.route.snapshot.queryParams.data1);    
    // console.log("receive long-> ",this.route.snapshot.queryParams.data2);
    // console.log("receive nama-> ",this.route.snapshot.queryParams.data3);    
    // console.log("receive plot-> ",this.route.snapshot.queryParams.data4);
    this.lat = parseFloat(this.route.snapshot.queryParams.data1);
    this.lng = parseFloat(this.route.snapshot.queryParams.data2);
    this.nam = parseFloat(this.route.snapshot.queryParams.data3);
    this.plo = parseFloat(this.route.snapshot.queryParams.data4);
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
