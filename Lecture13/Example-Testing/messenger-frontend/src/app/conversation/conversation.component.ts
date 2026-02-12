import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {
  currentRoute = inject(ActivatedRoute);
  otherUserId: string | undefined | null;

  constructor() {
    this.otherUserId = this.currentRoute.snapshot.paramMap.get("id");
  }
}
