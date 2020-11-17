import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api-service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `

  <!-- User Header -->
  <app-header></app-header>

  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">

        <h1 class="title">Hubungi Kami!</h1>

      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <!-- form goes here -->
      <form [formGroup]="reactiveForm" (ngSubmit)="contactForm()">

     <!--{{contact.valid}}--> 

        <!-- name -->
        <div class="field">
        <label class="label">Nama Penuh</label>
          <input class="input"
                  type="text"
                  formControlName="name" 
                  [class.invalid]="!reactiveForm.controls.name.valid && reactiveForm.controls.name.dirty">
                <p style="color:red;" class="errorMessage" *ngIf="reactiveForm.controls.name.hasError('required') && (reactiveForm.controls.name.dirty)">
                    Sila isi nama penuh anda
                </p>
      </div>


        <!-- email -->
        <div class="field">
            <label class="label">E-mel</label>
            <input class="input"
                  type="text"
                  placeholder="abc@gmail.com"
                  formControlName="email"[class.invalid]="!reactiveForm.controls.email.valid && reactiveForm.controls.email.dirty">
                  <p style="color:red;" class="errorMessage" *ngIf="reactiveForm.controls.email.hasError('required') && (reactiveForm.controls.email.dirty)">
                    Sila isi e-mel anda
                  </p>
          </div>

        <!-- message -->
        <div class="field">
            <label class="label">Pertanyaan/Mesej</label>
              <input class="input"
                      type="text"
                      formControlName="enquiry" 
                      [class.invalid]="!reactiveForm.controls.enquiry.valid && reactiveForm.controls.enquiry.dirty">
                    <p style="color:red;" class="errorMessage" *ngIf="reactiveForm.controls.enquiry.hasError('required') && (reactiveForm.controls.enquiry.dirty)">
                        Sila isi mesej
                    </p>
          </div>

        <button type="submit" class="button is-info is-medium is-rounded" [disabled]="!reactiveForm.valid">
          Hantar
        </button>

      </form>

    </div>
  </section>
  `,
  styles: [
  ],
})
export class ContactComponent implements OnInit {

 
  reactiveForm: FormGroup;

  constructor(
    private ApiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({      
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enquiry: ['', Validators.required],
    }); 

  }
  

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  contactForm() {
    let data = this.reactiveForm.value;
    this.ApiService.enquiry(data.name, data.email, data.enquiry).subscribe(data => {
      console.log(data);
      
      const allInfo = `Mesej anda telah dihantar. Terima kasih!`;
      alert(allInfo);
      this.router.navigate(['/']);

    },
    error => {
      console.log(error);
      const allInfo = `Mesej anda tidak berjaya dihantar!`;
      alert(allInfo);
    }); 

    // const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    // alert(allInfo); 
  }

}
