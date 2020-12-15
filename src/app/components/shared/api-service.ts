import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class ApiService {
  //--------------Properties----------------
  readonly rootUrl = 'https://www.geopusara.com';  
  // readonly url = '';
  currentUser: any[];
  data: any[];
  display: any[];
  handleError: any;
 
  constructor(
    private http : HttpClient) {
  }

  // REGISTER AS ADMIN
  insertUser(username: string, fullname: string, email: string, password: string, job: string, phone: string) {
    var body = {
      username: username,
      fullname: fullname,
      email: email,
      password:password,
      job:job,
      phone:phone
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/adminregister.php', JSON.stringify(body));
  }

  // LOGIN 
  userLogin(username: string, password: string) {
    var body = {
      username: username,
      password:password
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/loginid.php', JSON.stringify(body));
  }

  // DAFTAR KUBUR
  insertKubur(userid: string, name: string, dob: string, dod: string, plot: string,location: string, latitude: string, longitude: string) {
    var body = {
      userid: userid,
      name: name,
      dob: dob,
      dod: dod,
      plot: plot,
      location: location,
      latitude: latitude,
      longitude: longitude
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/registerkubur.php', JSON.stringify(body));
  }

  //ACCEPT AS ADMIN
  accept(fullname:string, username:string, email:string, password:string, phone:string, job:string) {
    var body = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      job: job
    }
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/adminaccept.php', JSON.stringify(body));
  }

    //REJECT AS ADMIN
  reject(fullname:string, username:string, email:string, password:string, phone:string, job:string) {
    var body = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      job: job
    }
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/adminreject.php', JSON.stringify(body));
  }

    //ACCEPT DAFTAR DATA KEMATIAN
    acceptkubur(userid:string, name:string, dob:string, dod:string, plot:string, location:string, latitude:string, longitude:string,) {
      var body = {
        userid: userid,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        location:location,
        latitude: latitude,
        longitude: longitude
      }
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php/acceptkubur.php', JSON.stringify(body));
    }

    //REJECT DAFTAR DATA KEMATIAN
    rejectkubur(userid:string, name:string, dob:string, dod:string, plot:string) {
      var body = {
        userid: userid,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot
      }
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php/rejectkubur.php', JSON.stringify(body));
    }

     //ENQUIRY
     enquiry(name: string, email: string, enquiry: string) {
      var body = {
        name: name,
        email: email,
        enquiry:enquiry
      } 
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php/enquiry.php', JSON.stringify(body));
    }

    public GetAllTodos() {  
      return this.http.get(this.rootUrl + '/php/listkubur.php').pipe
        (map((res: Response) => {  
          return res.json();  
        }))
        // .catch(this.handleError);)  
    } 

     //ACCEPT LAPORAN DATA KEMATIAN
     acceptlaporan(id:number, name:string, dob:string, dod:string, plot:string, corrname:string, corrdob:string, corrdod:string, corrplot:string, testkubur_id:number) {
      var body = {
        id: id,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        corrnama: corrname,
        corrdob: corrdob,
        corrdod: corrdod,
        corrplot: corrplot,
        testkubur_id: testkubur_id
      }
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php/correctionaccept.php', JSON.stringify(body));
    }

    //REJECT LAPORAN DATA KEMATIAN
    rejectlaporan(name:string, dob:string, dod:string, plot:string, corrname:string, corrdob:string, corrdod:string, corrplot:string, testkubur_id:number) {
      var body = {
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        corrnama: corrname,
        corrdob: corrdob,
        corrdod: corrdod,
        corrplot: corrplot,
        testkubur_id: testkubur_id
      }
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php/correctionreject.php', JSON.stringify(body));
    }


    // USER SUBMIT LAPORAN DATA
    correction(nama:string,dob:string,dod:string,plot:string,corrnama:string, corrdob:string, corrdod:string, corrplot:string, id: number) {
      var body = {
        nama: nama,
        dob: dob,
        dod: dod,
        plot:plot,
        corrnama: corrnama,
        corrdob: corrdob,
        corrdod: corrdod,
        corrplot: corrplot,
        testkubur_id: id
        // latitude:latitude,
        // longitude:longitude
      } 
      console.log('form input:',body);
      return this.http.put(this.rootUrl + '/php/userupdate.php', JSON.stringify(body));
    }

   //CORRECTION DATA KUBUR UNTUK LAPORAN DATA PAGE
   correctionkubur(nama:string, dob:string, dod:string, plot:string, corrnama:string, corrdob:string, corrdod:string, corrplot:string) {
    var body = {
      // userid: userid,
      nama: nama,
      dob: dob,
      dod: dod,
      plot: plot,
      corrnama: corrnama,
      corrdob: corrdob,
      corrdod: corrdod,
      corrplot: corrplot,
      // lat: lat,
      // long: long
    }
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/requestupdate.php', JSON.stringify(body));
  }

  getCurrentData (id: number){
    return this.http.get(`${this.rootUrl}/${id}`).pipe(catchError(this.handleError));
    // return this.http.get(`${this.rootUrl}/${id}`)
  }

  replyenq(name:string, email:string, enquiry:string, status:string) {
    var body = {
      name: name,
      email:email,
      enquiry:enquiry,
      status: status

    }
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/replied.php', JSON.stringify(body));
  
  }

  // TANAH YANG TINGGAL
  tanahtinggal(area: string, luas: string, plot: string, tanah: string) {
    var body = {
      area: area,
      luas: luas,
      plot:plot,
      tanah: tanah
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/tanahtinggal.php', JSON.stringify(body));
  }

  // JANGKA MASA SEBULAN
  jangkamasa(luastanah: string, matisebulan: string, area: string, masa: string) {
    var body = {
      area: area,
      luastanah: luastanah,
      matisebulan:matisebulan,
      masa: masa
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php/jangkapenuh.php', JSON.stringify(body));
  }

    

}
