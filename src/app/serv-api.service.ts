import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ServApiService {

  //1. GET
  get(url: string, headers:any = {'Content-Type':  'application/json'}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this._http.get(url, httpOptions)
  }

  constructor(public _http:HttpClient) { }
}
