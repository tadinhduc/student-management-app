import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Const } from 'src/common/const';
import { Student } from 'src/model/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public users: Student[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(Const.API + '/student');
  }

  getAllByApi() {
    return this.http.get(Const.API + '/student');
  }

  add(student: any): Observable<any> {
    console.log('body' + JSON.stringify(student));
    return this.http.post(Const.API + '/student', student, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    console.log('id' + JSON.stringify(id));
    return this.http.delete(Const.API + `/student/${id}`, this.httpOptions);
  }

  update(student: any): Observable<any> {
    console.log('body update' + JSON.stringify(student));
    return this.http.put(Const.API + `/student/${student.id}`, student);
  }
}
