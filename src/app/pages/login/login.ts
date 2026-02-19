import { Component, OnInit } from '@angular/core';
import { UsersJph } from '../../services/users-jph';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm!: FormGroup;

  constructor (private userService: UsersJph, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  async onLogin() {
    
    if(this.loginForm.valid) {

      const userEmail = this.loginForm.value.email;

      try {
      const users = await this.userService.getUsers();
      const user = users.data?.find((u: any) => {
        return u.email.toLowerCase() === userEmail.toLowerCase()
      });

      if (user) {
        localStorage.setItem("actualUser", JSON.stringify(user));
        this.router.navigate([`/user/${user.id}/home`]);
      } else {
        console.log("Usuario no encontrado");
      }

    } catch {
      console.log("No se puso implementar login");
    }
    } else {
      console.log("ERROR PIPIPI")
      ValidateForm.validateAllFields(this.loginForm);    
    }

    
  }
}
