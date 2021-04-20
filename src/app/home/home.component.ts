import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../auth/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName?: string;
  constructor(private auth: AuthService, ) {
    if (this.auth.userData?.email) {
      const email = this.auth.userData.email;
      this.userName = email.substring(0, email.indexOf('@'));
    }
  }

  ngOnInit(): void {
  }

}
