import { Component, computed, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { CommonModule } from '@angular/common';
import { User } from '../types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  localStorageService = inject(LocalStorageService);
  apiService = inject(ApiService);

  knownUserIds: string[] = [];
  router = inject(Router);
  users: User[] = this.apiService.getUsers();

  knownUsers = computed(() => this.users.filter(u => this.knownUserIds.includes(u.id)));
  otherUsers = computed(() => this.users.filter(u => !this.knownUserIds.includes(u.id)));

  ngOnInit(): void {
    this.knownUserIds = this.localStorageService.getKnownUserIds();
  }

  selectUser(userId: string) {
    this.localStorageService.addKnownUserId(userId);
    this.router.navigate(['/conversation', userId]);
  }
}
