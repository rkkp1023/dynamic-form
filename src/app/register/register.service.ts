import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }
  $registerUser(body): Observable<any> {
    const url = 'http://18.223.15.92:3000/register'
    return this.http.post(url, body);
  }
}
