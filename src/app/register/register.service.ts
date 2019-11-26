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
    const url = 'http://localhost:8080/register'
    return this.http.post(url, body);
  }
}
