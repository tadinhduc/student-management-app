import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student = {
    name: '',
    address: '',
    age: null,
    teacher: '',
  };
  students!: Student[];
  ngOnInit(): void {
    this.showListStudent();
  }

  constructor(public studenService: StudentService) {}

  onSubmit() {
    this.studenService.add(this.student).subscribe((data) => {
      this.showListStudent();
    });
  }
  onDelete(id: any) {
    this.studenService.delete(id).subscribe((data) => {
      this.showListStudent();
    });
  }

  showListStudent() {
    this.studenService.getAllByApi().subscribe(
      (data: any) => {
        console.log(1);
        this.students = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
