import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  // styleUrl: './data-binding.component.css',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  courseName: string = 'Angular 18';
  inputType = 'text';
  rollNumber: number = 777;
  isIndex: boolean = false;
  currentDate: Date = new Date();
  classNameHtml: string = 'Danger';

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }
  changeCourseName(courseName: string) {
    this.courseName = courseName;
  }
}
