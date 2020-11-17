import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  template: `

    <!-- routes will be rendered here -->
      <router-outlet></router-outlet> 

      <app-footer></app-footer> 
   
  `,
  styles: []
})
export class AppComponent {
   title = 'GeoPusara';
   rootPage: any = HomeComponent;

  

}
