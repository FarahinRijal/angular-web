import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from "angular-notifier";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); 
import {NgxPaginationModule} from 'ngx-pagination';
// import {MatCardModule} from '@angular/material/card';
// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatDialogModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatAutocompleteModule, MatToolbarModule, MatMenuModule, MatCardModule, MatSortModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {DataTablesModule} from 'angular-datatables';
import { DxDataGridModule, DxPopupModule, DxButtonModule, DxTemplateModule, DxSelectBoxModule, DxListModule, DxScrollViewModule, DxDateBoxModule } from 'devextreme-angular';
// import { FlxUiDataTable, FlxUiDatatableModule } from 'flx-ui-datatable';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { ApiService } from './components/shared/api-service';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';
import { MasterhomeComponent } from './components/masterhome/masterhome.component';
import { ListKuburComponent } from './components/listkubur/listkubur.component';
import { DaftarkuburComponent } from './components/daftarkubur/daftarkubur.component';
import { SemakandataComponent } from './components/semakandata/semakandata.component';
import { LaporandataComponent } from './components/laporandata/laporandata.component';
import { AdmincontactComponent } from './components/admincontact/admincontact.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { FilterPipe } from './filterPipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { UseranalysisComponent } from './components/useranalysis/useranalysis.component';

import { Service } from './app.service';
import { CommonModule } from '@angular/common';
import { UserdaftarkuburComponent } from './components/userdaftarkubur/userdaftarkubur.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { MapComponent } from './components/map/map.component';
import { MapService } from './components/shared/map.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    SearchFormComponent,
    DisplaydataComponent,
    MasterhomeComponent,
    ListKuburComponent,
    DaftarkuburComponent,
    SemakandataComponent,
    LaporandataComponent,
    AdmincontactComponent,
    FilterPipe,
    HighlightDirective,
    UserupdateComponent,
    UseranalysisComponent,
    UserdaftarkuburComponent,
    EnquiryComponent,
    MapComponent,
    
  

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    // MatCardModule,
    // SlimLoadingBarModule,
    DateInputsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatGridListModule,
    DataTablesModule,
    DataTablesModule,
    // FlxUiDatatableModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbo68cxXibR42QB4XDeytAnSWhA6kbXHw'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    MatToolbarModule,
    MatMenuModule, 
    MatCardModule,
    MatSortModule,
    DxDataGridModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxListModule,
    DxScrollViewModule,
    DxDateBoxModule

  ],

  exports:[  
    MatToolbarModule, 
    MatMenuModule, 
    MatInputModule, 
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule  
  ],

  providers: [
    ApiService,
    Service,
    MapService
    // FlxUiDataTable
  ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
