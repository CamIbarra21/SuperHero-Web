import { Component } from '@angular/core';
import { UserForm } from '../../shared/components/user-form/user-form';
import { UsersJph } from '../../services/users-jph';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-update-account',
  imports: [ UserForm, RouterLink, RouterLinkActive ],
  templateUrl: './update-account.html',
  styleUrl: './update-account.css',
})
export class UpdateAccount {
  user: any;
  initialData: any;
  constructor (private userService: UsersJph) {}

  ngOnInit(): void {
    var au = localStorage.getItem('actualUser');
    if (au)
      this.user = JSON.parse(au);

    this.initialData = {
          "name": this.user.name,
          "username": this.user.username,
          "email": this.user.email,
          "street": this.user.address.street,
          "suite": this.user.address.suite,
          "city": this.user.address.city,
          "phone": this.user.phone,
          "website": this.user.website,
          "company": this.user.company.name
        }
  }
  
}
