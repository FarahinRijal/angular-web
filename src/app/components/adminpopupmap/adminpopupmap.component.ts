import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpopupmap',
  templateUrl:'./adminpopupmap.component.html',
  styleUrls: ['./adminpopupmap.component.scss'],
})
export class AdminpopupmapComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Input() selected: string = '';
  previous;
  
  // lat = 1.554812;
  // lng = 103.584084;

  latitude: number;
  longitude: number;
  address: string;
  private geoCoder;
  zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @Input() fromParent;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // console.log("lalu curr loc:");
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
   
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log("ngZone:", this.latitude);
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    // console.log("event:",$event);
    // console.log("event['latLng']:",$event['latLng']);
    // console.log("event['latLng']['lat'].length:",$event['latLng']['lat'].length);
    // console.log("event['latLng']['lat'].length:",$event['latLng']['lat'].Scopes[0]);  
    console.log("dragged lat:",$event['latLng']['lat']('FunctionLocation'));  
    console.log("dragged lng:",$event['latLng']['lng']('FunctionLocation'));
    this.latitude = $event['latLng']['lat']('FunctionLocation');
    this.longitude = $event['latLng']['lng']('FunctionLocation');
    console.log("marker:",this.latitude,",",this.longitude);
    this.getAddress(this.latitude, this.longitude);
  }

  // placeMarker($event){
  //   console.log("marker");
  //   console.log($event.lat);
  //   console.log($event.lng);
  // }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log("result:",results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
      
      // console.log("lalu get address");
    });
  }

  saveLocation(){
    const data = {
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude
    }
    console.log("data:",data);     
    let addr = this.address;  
    let lat = this.latitude;
    let lng = this.longitude;  
    this.router.navigate(['/daftarkubur'], {queryParams: {data1 : addr, data2 : lat, data3 : lng}});
    console.log("pass latitude, longitude->", lat,",",lng);
    this.onClose.emit(data);
  }

  cancel() { 
    this.onClose.emit(null); 
  }


//   clickedMarker(infowindow) {
//     if (this.previous) {
//         this.previous.close();
//     }
//     this.previous = infowindow;
//  }
 

}
