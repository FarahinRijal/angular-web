import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';
import { MasterhomeComponent } from './components/masterhome/masterhome.component';
import { ListKuburComponent } from './components/listkubur/listkubur.component';
import { HeaderComponent } from './components/header/header.component';
import { DaftarkuburComponent } from './components/daftarkubur/daftarkubur.component';
import { LaporandataComponent } from './components/laporandata/laporandata.component';
import { SemakandataComponent } from './components/semakandata/semakandata.component';
import { AdmincontactComponent } from './components/admincontact/admincontact.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { UseranalysisComponent } from './components/useranalysis/useranalysis.component';
import { UserdaftarkuburComponent } from './components/userdaftarkubur/userdaftarkubur.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { MapComponent } from './components/map/map.component';
import { AdminMapComponent } from './components/admin-map/admin-map.component';
import { ModalComponent } from './components/modal/modal.component';
import { AdminmodalComponent } from './components/adminmodal/adminmodal.component';





const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'adminhome',
    component: AdminhomeComponent
  },

  {
    path: 'search-form',
    component: SearchFormComponent
  },

  {
    path: 'displaydata',
    component: DisplaydataComponent
  },

  {
    path: 'masterhome',
    component: MasterhomeComponent
  },

  {
    path: 'listkubur',
    component: ListKuburComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'daftarkubur',
    component: DaftarkuburComponent
  },
  {
    path: 'semakandata',
    component: SemakandataComponent
  },
  {
    path: 'laporandata',
    component: LaporandataComponent
  },
  {
    path: 'admincontact',
    component: AdmincontactComponent
  },
  {
    path: 'userupdate',
    component: UserupdateComponent
  },
  {
    path: 'useranalysis',
    component: UseranalysisComponent
  },
  {
    path: 'userdaftarkubur',
    component: UserdaftarkuburComponent
  },
  {
    path: 'enquiry',
    component: EnquiryComponent
  },
  {
    path: 'map',
    component: MapComponent
  },

  {
    path: 'admin-map',
    component: AdminMapComponent
  },

  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'adminmodal',
    component: AdminmodalComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
