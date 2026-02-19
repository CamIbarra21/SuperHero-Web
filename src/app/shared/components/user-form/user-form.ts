import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import ValidateForm from '../../../helpers/validateForm';

@Component({
  selector: 'app-user-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatCardModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  @Input() initialData: any;
  @Input() typeButton: 'sign-up' | 'update' = 'sign-up';

  companies: string[] = ['Deckow-Crist', 'Romaguera-Jacobson', 'Robel-Corkery', 'Keebler LLC', 'Considine-Lockman', 'Abernathy Group'];

  constructor (private fb: FormBuilder) {}

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [ '', [Validators.required, Validators.pattern("[a-zA_Z ]+")] ],
      username: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      email: [ '', Validators.required ],
      street: [ '' ],
      suite: [ '' ],
      city: [ '' ],
      company: [ '' ]
    })

    if (this.initialData) {
      this.userForm.patchValue(this.initialData);
    }

  }

  getFormValue() {
    return this.userForm.value;
  }

  userSignUp() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      console.log("Valido sign up");
    } else {
      console.log("No valido basura");
      ValidateForm.validateAllFields(this.userForm);
    }
  }

  userUpdate() {
    if (this.userForm.valid) {
      console.log("Valido update");
    } else {
      console.log("No valido basura");
      ValidateForm.validateAllFields(this.userForm);
    }
  }
}
