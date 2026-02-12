import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  apiService = inject(ApiService);
  loginStatus = this.apiService.loginStatus;

  async login() {
    console.log("logging in user:", this.username);
    await this.apiService.login(this.username, this.password);
  }

  logout() {
    this.username = "";
    this.password = "";
    this.apiService.logout();
  }
}
