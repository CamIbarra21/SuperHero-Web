import { Component } from '@angular/core';
import { UserForm } from '../../shared/components/user-form/user-form';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  imports: [ UserForm, MatButtonModule ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  onSignUp() {
    
  }
}
