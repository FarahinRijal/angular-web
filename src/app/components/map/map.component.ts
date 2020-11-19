import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Employee } from 'src/app/app.service';
import { MapService } from '../shared/map.service';

@Component({
  selector: 'app-smap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  // @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  // map: google.maps.Map;
  // lat = 40.73061;
  // lng = -73.935242;

  // coordinates = new google.maps.LatLng(this.lat, this.lng);

  // mapOptions: google.maps.MapOptions = {
  //  center: this.coordinates,
  //  zoom: 8
  // };

  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  // ngAfterViewInit() {
  //   this.mapInitializer();
  // }

  // mapInitializer() {
  //   this.map = new google.maps.Map(this.gmap.nativeElement, 
  //   this.mapOptions);
  //   this.marker.setMap(this.map);
  // }
  
  currentName: Data = new Employee();
  response = [];
  @Input() latitude: string;
  @Input() longitude: string;
  // message:string;
  

  constructor (
    private http: HttpClient,
    private mapservice: MapService
  ) {

    // this.http.get('http://localhost/php_ara/getlocation.php').subscribe(response => {
    // this.response.push(response);
    // console.log("response",this.response);
   
    
    // }, 
    // error => console.error(error));
    
  }
 

  ngOnInit () {  
    this.mapservice.currentMessage.subscribe(message => this.currentName.latitude = message)
    console.log("latitude: ", this.currentName.latitude);       
    console.log("longitude: ", this.currentName.longitude);
    // console.log("message: ", this.message)

  }

  // newMessage() {
  //   this.mapservice.changeMessage("Hello from Sibling")
  // }


  lat = 1.530280;
  lng = 103.621613;

}
