# Week 11 Exercise: Updating Your Angular Messenger with REST Integration using Signals & Fetch API

### **Objective**

In this exercise, you will **extend** your Angular Messenger frontend from Week 10 by integrating a **RESTful backend API**, using Angular **signals** and the native **Fetch API**. You will implement login handling, contact selection, dynamic conversations, and message exchange based on a provided mock API. Enhancements like auto-scroll and routing guards improve user experience.

This task builds directly on your Week 10 project and replaces or extends specific components.

Total: **7 Points**

---

## **Tasks and Points Overview**

### **1. Replace Mock Data with API Calls (via Fetch + Signals)**

* Replace static mock data in `MessageListComponent` and related components with **fetch-based** calls.
* Replace RxJS/Observable usage with Angular **signals**.

#### Implementation:

* Use signals to hold state:

  ```ts
  readonly messages = signal<Message[]>([]);
  readonly isLoading = signal(false);
  readonly errorMessage = signal('');
  ```

* Replace `ngOnInit()` logic with fetch:

  ```ts
  this.isLoading.set(true);
  fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(data => this.messages.set(data))
    .catch(() => this.errorMessage.set('Failed to load messages'))
    .finally(() => this.isLoading.set(false));
  ```

* Template binds to signals:

  ```html
  <div *ngIf="isLoading()">Loading...</div>
  <div *ngIf="errorMessage()">{{ errorMessage() }}</div>

  <div *ngFor="let msg of messages()">
    <strong>{{ msg.sender }}</strong>: {{ msg.content }}
  </div>
  ```

### **2. User Login Using Mock AuthService**

* Use provided `AuthService` mock to perform login:

#### Implementation:

* Inject `AuthService` and call:

  ```ts
  auth.login(username, password);
  ```
* Store login state via a signal or localStorage.
* Implement a **route guard** to redirect to login if not authenticated.

### **3. Display Contact List & Load Conversations**

* Show a list of users from mock API (e.g. `GET /users`).
* On click, load conversation for selected user.

#### Implementation:

* Use signal to store user list:

  ```ts
  readonly contacts = signal<User[]>([]);
  ```

* On selection:

  ```ts
  this.activeUser.set(user);
  fetch(`/messages?conversationWith=${user.id}`)
    .then(res => res.json())
    .then(data => this.messages.set(data));
  ```

* UI update:

  ```html
  <ul>
    <li *ngFor="let user of contacts()" (click)="loadConversation(user)">
      {{ user.name }}
    </li>
  </ul>
  ```

### **4. Send Message in Active Conversation**

* Add input field + send button below current conversation.
* Send new message via `fetch` and append it immediately to message list.

#### Implementation:

```ts
sendMessage(): void {
  const message: Message = {
    sender: this.auth.username(),
    content: this.newMessage.trim(),
    timestamp: new Date().toISOString(),
  };

  fetch('/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })
  .then(() => {
    this.messages.update(msgs => [...msgs, message]);
    this.newMessage = '';
    this.scrollToBottom();
  });
}
```

### **5. Implement Refresh Button & Scroll to Bottom**

* Add a **refresh button** to manually reload conversation from API.
* On every message send or load, auto-scroll to bottom:

  ```ts
  scrollToBottom(): void {
    setTimeout(() => {
      const container = document.getElementById('messageContainer');
      if (container) container.scrollTop = container.scrollHeight;
    }, 0);
  }
  ```

### **6. Add Routing Guard for Login** (0.5 Points)

* Automatically redirect unauthenticated users to `/login`.
* Optional: add persistent session logic (e.g. use localStorage).

---

## **Total Points Available: 7**

| Task                                                   | Max Points |
| ------------------------------------------------------ | ---------- |
| Login with Mock AuthService                            | 1          |
| Contact List & Conversations  + Send Message via API   | 4          |
| Refresh + Auto Scroll + Routing Guard for Auth         | 2          |
| Fetch & Signals for Loading Messages                   | 3          |


---

## **Submission Requirements**

* Continue in your Week 10 `messenger-frontend` project.
* Replace observable logic with **signals**.
* Use **native fetch API** for backend communication.
* Auth logic must follow the provided mock `AuthService` example.
* Contact selection triggers conversation updates.
* Sending messages uses API + immediately appends locally.
* App includes refresh button and scroll-to-latest behavior.
* Route protection redirects unauthenticated users to login.

---

## **Optional Enhancements**

* Mark unread messages.
* Show typing indicators.
* Use Angular animations for transitions.

---

**Your messenger is going real-time — well done! 🚀**
