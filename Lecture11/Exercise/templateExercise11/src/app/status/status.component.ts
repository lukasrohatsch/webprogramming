import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  apiService = inject(ApiService);
  loginStatus = this.apiService.loginStatus;
}
