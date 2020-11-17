import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <div >
        <span>
          All Right Reserved
        </span>
        <span class="copy">
          <span class="copyright">
            ©
          </span>
            &nbsp;
            2020&nbsp;GEOPUSARA
          </span>
      </div>
      
    </div>
    </div>
    </footer>
  `,
  styles: [`

  
  `],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
