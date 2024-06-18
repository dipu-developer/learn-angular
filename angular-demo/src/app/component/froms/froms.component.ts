import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './froms.component.html',
  styleUrl: './froms.component.css',
})
export class FromsComponent {
  studentObj: any = {
    email: '',
    address: '',
    zip: '',
    state: '',
    city: '',
    isAcceptTerm: '',
  };
  formValue: any;

  onSubmit() {
    this.formValue = this.studentObj;
  }
}
