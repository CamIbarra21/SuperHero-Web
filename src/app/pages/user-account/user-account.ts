import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UsersJph } from '../../services/users-jph';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  imports: [MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './user-account.html',
  styleUrl: './user-account.css',
})
export class UserAccount implements OnInit{
  user: any;

  constructor (private userService: UsersJph, private router: Router) {}

  ngOnInit(): void {
    var au = localStorage.getItem('actualUser');
    if (au)
      this.user = JSON.parse(au);

  }
  
  updateInfo() {
  }

  async deleteUser() {
    try {
      const deleted = await this.userService.deleteUser(this.user.id);
      if (deleted)
        console.log(deleted);
        this.router.navigate(['']);
    } catch {
      console.log('No se pudo implementar delete account')
    }
  }

  signOut() {

  }
}
