import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isDivVisible: boolean = true;
  isDiv2Visible: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = '';
  cityArray: string[] = ['Mumbai', 'Pune', 'New York'];

  studentList: any[] = [
    { studentid: 1, name: 'Rohan', city: 'Mumbai', isActive: false },
    { studentid: 2, name: 'mother', city: 'Pune', isActive: false },
    { studentid: 3, name: 'Suresh', city: 'New York', isActive: false },
    { studentid: 4, name: 'Rohan', city: 'Punjab', isActive: false },
  ];

  div1BgColor: string = '';
  isDiv2Active: boolean = false;

  addRedClass() {
    this.div1BgColor = 'bg-danger text-white';
  }

  addBlueClass() {
    this.div1BgColor = 'bg-primary text-white';
  }

  showDiv() {
    this.isDivVisible = true;
  }
  hideDiv() {
    this.isDivVisible = false;
  }
  toggleDiv() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  toggleColor() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
