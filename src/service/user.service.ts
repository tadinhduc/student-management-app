import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Const } from 'src/common/const';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(student: any): Observable<any> {
    console.log('body' + JSON.stringify(student));
    return this.http.post(
      Const.API + '/account/login',
      student,
      this.httpOptions
    );
  }

  register(student: any): Observable<any> {
    console.log('body' + JSON.stringify(student));
    return this.http.post(
      Const.API + '/account/create_account',
      student,
      this.httpOptions
    );
  }
}
