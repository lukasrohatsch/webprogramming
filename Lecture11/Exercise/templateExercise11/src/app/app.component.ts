import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatusComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appRoutes = routes.filter(r => !!r.title);
}
