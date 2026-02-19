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
import { UsersJph } from '../../../services/users-jph';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatCardModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  @Input() initialData: any;
  @Input() typeButton: 'sign-up' | 'update' = 'sign-up';
  @Input() userId: number = 0;

  companies: string[] = ['Deckow-Crist', 'Romaguera-Jacobson', 'Robel-Corkery', 'Keebler LLC', 'Considine-Lockman', 'Abernathy Group'];

  constructor (private fb: FormBuilder, private userService: UsersJph, private router: Router) {}

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [ '', [Validators.required, Validators.pattern("[a-zA-Z ]+")] ],
      username: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      email: [ '', Validators.required ],
      street: [ '' ],
      suite: [ '' ],
      city: [ '' ],
      company: [ '' ],
      phone: [ null, [Validators.max(999999999), Validators.min(100000000)] ],
      website: [ '', Validators.pattern("https?://[a-zA-Z0-9._-]+.com") ]
    })

    if (this.initialData) {
      this.userForm.patchValue(this.initialData);
    }

  }

  getFormValue() {
    return this.userForm.value;
  }

  async userSignUp() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      try {
        const user = {
          "name": userData.name,
          "username": userData.username,
          "email": userData.email,
          "address": {
              "street": userData.street,
              "suite": userData.suite,
              "city": userData.city
          },
          "phone": userData.phone,
          "website": userData.website,
          "company": {
              "name": userData.company
          }
        }
        const res = await this.userService.createUser(user);
        console.log('Usuario registrado:', res.data);
        this.router.navigate(['login']);
      } catch {
        console.log('Otro error xd');
      }      

    } else {
      console.log("No valido basura");
      ValidateForm.validateAllFields(this.userForm);
    }
  }

  async userUpdate() {

    console.log(this.userForm)
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      try {
        const user = {
          "name": userData.name,
          "username": userData.username,
          "email": userData.email,
          "address": {
              "street": userData.street,
              "suite": userData.suite,
              "city": userData.city
          },
          "phone": userData.phone,
          "website": userData.website,
          "company": {
              "name": userData.company
          }
        }
        const res = await this.userService.updateUser(this.userId, user);
        console.log('Usuario actualizado:', res.data);
        this.router.navigate([`user/${this.userId}/account`]);
      } catch {
        console.log('Otro error xddd');
      }      

    } else {
      console.log("No valido basura");
      ValidateForm.validateAllFields(this.userForm);
    }
  }
}
