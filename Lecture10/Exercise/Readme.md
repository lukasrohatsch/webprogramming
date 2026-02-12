# Week 10 Exercise: Building Your Angular Messenger Frontend

### **Objective**
You will set up the frontend for a messenger application using Angular. You already know JavaScript and TypeScript — now it's time to organize a real project using Angular modules, components, and routing. This exercise will be graded with a total of **7 points**.

---

## **Tasks and Points Overview**

### **1. Project Setup** (1 Point)
- Create a new Angular project named `messenger-frontend`:
  ```bash
  ng new messenger-frontend --routing --style=css
  ```
- Set up the project structure and serve it locally on e.g. `http://localhost:4200`.
- Ensure that the project runs without errors.

### **2. Create Feature Modules and Components** (2 Points)
- Create a **Message Module** with two components:
  - `message-list`
  - `conversation`
- Create an **Auth Module** with one component:
  - `login`
- Create an **Intro Component** without a module.

Commands:
```bash
ng generate module auth
ng generate component auth/login
ng generate module message
ng generate component message/message-list
ng generate component message/conversation
ng generate component intro
```

**Requirements:**
- Components are located in the correct folders.
- Modules are correctly declared and imported where needed.

### **3. Implement Basic Routing** (2 Points)
- Define routes in `app.routes.ts`:
  - `/` -> IntroComponent
  - `/login` -> LoginComponent
  - `/messages` -> MessageListComponent
- Use `<router-outlet></router-outlet>` in `AppComponent`.
- Test navigation using router links or direct URL changes.

Example route configuration:
```typescript
import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './auth/login/login.component';
import { MessageListComponent } from './message/message-list/message-list.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'messages', component: MessageListComponent }
];
```

### **4. Populate Components with Mock Content** (1 Point)
- **IntroComponent**: Display a welcome message and a button linking to the login page.
- **LoginComponent**: Display a mock login form (username + password input, no real authentication yet).
- **MessageListComponent**: Display a hardcoded list of two or more mock messages.

Example for `MessageListComponent`:
```typescript
export class MessageListComponent {
  messages = [
    { sender: 'Alice', content: 'Hello there!' },
    { sender: 'Bob', content: 'Welcome to the messenger app!' }
  ];
}
```

Template example:
```html
<div *ngFor="let msg of messages">
  <strong>{{ msg.sender }}</strong>: {{ msg.content }}
</div>
```

### **5. Basic Navigation Links** (1 Points)
- Add simple navigation (e.g., in the Intro page or header):
  - Link to `/login`
  - Link to `/messages`

Example:
```html
<a routerLink="/login">Login</a>
<a routerLink="/messages">Messages</a>
```

### **6. Basic Styling** (Optional)
- Apply minimal CSS styling to improve the visual appearance (e.g., margins, font sizes, borders).
- Styling can be done directly in the respective `.component.css` files.

---

## **Total Points Available: 7**

| Task | Max Points |
|:---|:---|
| Project Setup | 1 |
| Create Modules and Components | 2 |
| Implement Routing | 2 |
| Mock Content | 1 |
| Navigation Links | 1 |

---

## **Submission Requirements**

1. A working Angular project named `messenger-frontend`.
2. Feature modules `auth` and `message` correctly implemented.
3. Routing between Intro, Login, and Message List pages functional.
4. Components display mock content.
5. Project runs locally without errors.
6. (Bonus) Minimal CSS styling applied.

---

## **Advanced Challenges (Optional)**
- Add a real input field in `ConversationComponent` to simulate sending a message.
- Create a very basic login form validation.
- Style the messenger using Angular Material.

---

**Good luck building your Angular Messenger Frontend!**