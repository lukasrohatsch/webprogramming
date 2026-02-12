import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ConversationComponent } from './conversation/conversation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, title: "Contacts" },
  { path: 'conversation/:id', component: ConversationComponent },
];