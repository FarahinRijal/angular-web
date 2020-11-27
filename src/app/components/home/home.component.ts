import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-header [isUserLoggedIn]="false" ></app-header>

  <!-- home -->

  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">
          Selamat Datang ke Halaman GeoPusara
        </h1>
      </div>
    </div>
  </section>        

  <div class="tile is-ancestor" style="margin-top:10px;">
    
    <div class="tile is-parent" routerLink="/search-form">
      <article class="tile is-child box notification is-success is-light">
        <div class="img">
          <img src="assets/img/search2.png" />
          <p class="title has-text-centered">Carian Data </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent" routerLink="/userdaftarkubur">
    <article class="tile is-child box notification is-primary is-light">
      <div class="img">
        <img src="assets/img/reg.png" />
        <p class="title has-text-centered">Daftar Kematian </p>
      </div>
    </article>
  </div>

    <div class="tile is-parent" routerLink="/useranalysis">
      <article class="tile is-child box notification is-success is-light">
        <div class="img">
          <img src="assets/img/analysis.png" />
          <p class="title has-text-centered">Analisis Data</p>
        </div>
      </article>
    </div>

    <div class="tile is-parent" routerLink="/register">
      <article class="tile is-child box notification is-primary is-light">
        <div class="img">
          <img src="assets/img/register.png" />
          <p class="title has-text-centered">Daftar Admin</p>
          <h5>Untuk pihak berwajib sahaja</h5>
        </div>
      </article>
    </div>

    </div>

  
    <nav class="level" style="margin-top: 30px; margin-bottom: 30px;">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Pelawat</p>
          <p class="title">3,456</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Pengguna</p>
          <p class="title">123</p>
        </div>
      </div>
    </nav>

  `,
  styles: [`
    .hero {
      // background-image: url(assets/img/wallpaper2.jpg) !important;
      background-size: cover;
      background-position: center center;
    }

    .a:hover {cursor: pointer;}

    h1{
      font-size:3vw;
      // height: auto;
      font-family: fantasy;
      
    }

    .img {
      max-width: 100%;
      height: auto;

      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    img:hover {
      transform: scaleX(-1);
    }

    `],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// <nav class="level is-mobile" style="margin-top: 50px;">
// <div class="level-item has-text-centered">
//   <div>
//     <figure class="image is-128x128">
//       <img class="is-square" src="https://bulma.io/images/placeholders/128x128.png">
//     </figure>
//   </div>
// </div>
// <div class="level-item has-text-centered">
//   <div>
//     <figure class="image is-128x128">
//       <img class="is-square" src="https://bulma.io/images/placeholders/128x128.png">
//     </figure>
//   </div>
// </div>
// <div class="level-item has-text-centered">
//   <div>
//   <figure class="image is-128x128">
//     <img class="is-square" src="https://bulma.io/images/placeholders/128x128.png">
//   </figure>
//   </div>
// </div>
// </nav>
