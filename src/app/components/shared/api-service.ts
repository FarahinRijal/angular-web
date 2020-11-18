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
  readonly rootUrl = 'http://172.20.10.6';  
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
    return this.http.post(this.rootUrl + '/php_ara/adminregister.php', JSON.stringify(body));
  }

  // LOGIN 
  userLogin(username: string, password: string) {
    var body = {
      username: username,
      password:password
    } 
    console.log('form input:',body);
    return this.http.post(this.rootUrl + '/php_ara/loginid.php', JSON.stringify(body));
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
    return this.http.post(this.rootUrl + '/php_ara/registerkubur.php', JSON.stringify(body));
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
    return this.http.post(this.rootUrl + '/php_ara/adminaccept.php', JSON.stringify(body));
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
    return this.http.post(this.rootUrl + '/php_ara/adminreject.php', JSON.stringify(body));
  }

    //ACCEPT DAFTAR DATA KEMATIAN
    acceptkubur(userid:string, name:string, dob:string, dod:string, plot:string, location:string) {
      var body = {
        userid: userid,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        location:location
      }
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php_ara/acceptkubur.php', JSON.stringify(body));
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
      return this.http.post(this.rootUrl + '/php_ara/rejectkubur.php', JSON.stringify(body));
    }

     //ENQUIRY
     enquiry(name: string, email: string, enquiry: string) {
      var body = {
        name: name,
        email: email,
        enquiry:enquiry
      } 
      console.log('form input:',body);
      return this.http.post(this.rootUrl + '/php_ara/enquiry.php', JSON.stringify(body));
    }

    public GetAllTodos() {  
      return this.http.get(this.rootUrl + '/php_ara/listkubur.php').pipe
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
      return this.http.post(this.rootUrl + '/php_ara/correctionaccept.php', JSON.stringify(body));
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
      return this.http.post(this.rootUrl + '/php_ara/correctionreject.php', JSON.stringify(body));
    }


    // USER SUBMIT LAPORAN DATA-BLUM
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
      return this.http.put(this.rootUrl + '/php_ara/userupdate.php', JSON.stringify(body));
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
    return this.http.post(this.rootUrl + '/php_ara/requestupdate.php', JSON.stringify(body));
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
    return this.http.post(this.rootUrl + '/php_ara/replied.php', JSON.stringify(body));
  
  }
    

}
