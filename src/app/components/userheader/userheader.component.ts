
// TAK GUNA, PAKAI HEADER JA!

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-userheader',
  template: `
  <nav class="navbar is-link">

    <!-- logo -->
    <div class="navbar-brand">

      <div class="logo">
        <a class="navbar-item" routerLink="/">
          <img src="assets/img/logo4.png" />
        </a>
      </div>

      <a (click)="toggleNavbar()" role="button" #navBurger class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarBasicExample" class="navbar-menu" #navMenu>
      <div class="navbar-start">

        <a class="navbar-item is-spaced" routerLink="/">
          Halaman Utama
        </a>

        <a class="navbar-item is-spaced" routerLink="/contact">
          Hubungi Kami
        </a>

      </div>

      <span class="navbar-item" routerLink="/login">
        <a class="button is-link is-light is-rounded is-focused">
          <span>Log Masuk</span>
        </a>
      </span>

    </div>  

  </nav>
  `,
  styles: [`
    .logo {
      max-width: 100%;
      height: auto;
      width: auto;  
    }

    logo:hover {
      box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }

    a {
      font-family: Times, "Times New Roman", serif;
      font-size:15px;
    }
  `],
})
export class UserheaderComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

toggleNavbar() {
  this.navBurger.nativeElement.classList.toggle('is-active');
  this.navMenu.nativeElement.classList.toggle('is-active');
}

  constructor() { }

  ngOnInit(): void {
  }

}
