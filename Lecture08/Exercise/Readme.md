# ✅ Week 8 Exercise: TypeScript Messenger

## 🎯 **Objective**
Use **TypeScript** and the provided **Chat API** to:
1. **Register** a user  (Task 1 = 2 Points)
2. **Log in** a user  (Task 2 = 2 Points)
3. **Fetch and display the user list** (to confirm it works)  (Task 3 = 2 Points)
4. **Send a message** to a (hardcoded) user (Task 4 = 1 Point)

> **Next week (Week 9)**: We’ll add a *better GUI*, clickable user selection, conversation display, and style improvements.

---

## **Basic Requirements & Software Setup**
1. **TypeScript**: All logic should be written in TypeScript (`.ts` files).  
2. **REST Requests**: You’ll use `axios` (or `fetch`) to **send and receive JSON** data from the endpoints.  
3. **Simple UI**: At minimum, provide an **HTML form** or **prompt** for registering/logging in, display the **user list**, and have a method to **send a message**.  
4. **VPN**: The endpoints are located at [`http://webp-ilv-backend.cs.technikum-wien.at/messenger/`](http://webp-ilv-backend.cs.technikum-wien.at/messenger/). You must be **on VPN** (or have correct network access) to reach them. See details in CIS! 
5. **HTTP Methods & Parameters**: Each endpoint requires specific parameters. Ensure you’re sending them **in the correct format** (e.g., JSON body for POST, query params for GET).  

---

## **API Endpoints & Data Flow**

The endpoint can be reached here (you need VPN!): http://webp-ilv-backend.cs.technikum-wien.at/messenger/

| Endpoint                 | Method | Params/Body                                         | Expected Response                                      |
|--------------------------|--------|-----------------------------------------------------|--------------------------------------------------------|
| `/login.php`            | POST   | `username_or_email`, `password`                     | `{ "token": "...", "id" : "yourUserid" }` if successful                    |
| `/registrieren.php`     | POST   | `name`, `email`, `password`, `group_id`            | `{ "success": true, "id": "yourUserid" }`             |
| `/get_users.php`        | GET    | `token`, `id`                                                 | `[{"id":"...","name":"...","group_id":"..."}, ...]`   |
| `/send_message.php`     | POST   | `token`, `sender_id`, `receiver_id`, `message`              | `{ "success": true }` if successful                   |
| `/get_conversation.php` | GET    | `token`, `user1_id`, `user2_id` (as query params)            | `[{"sender_id":"...","receiver_id":"...","message":"...","timestamp":1234}, ...]` |

---

### **Usage Notes**
- **/registrieren.php**  
  - Expects a "application/x-www-form-urlencoded" data with keys: `name`, `email`, `password`, `group_id`.  
  - Returns `{ "success": boolean, "id": string? }`.

- **/login.php**  
  - Expects a JSON body with keys: `username_or_email`, `password`.  
  - Returns `{ "token": string }` on success.

- **/get_users.php**  
  - A simple GET request; also send `token` and your user id: `id`.  
  - Returns an array of user objects, e.g.,  
    ```json
    [
      { "id": "abc123", "name": "Alice", "group_id": "1" },
      { "id": "def456", "name": "Bob", "group_id": "2" }
    ]
    ```

- **/send_message.php**  
  - Expects a JSON body with keys: `token`, `sender_id`, `receiver_id`, `message`.  
  - Returns `{ "success": boolean }`.  

- **/get_conversation.php** *(used next week)*  
  - GET request with `token`, `user1_id`, `user2_id` as query params.  
  - Returns an array of messages, including `timestamp` in **UNIX epoch** (or a similar numeric format).

---

## **Implementation Guidance**

1. **Registration (Task 1)**  
   - Create an **HTML form** or a function that collects `name`, `email`, `password`, and `group_id`.  
   - Send these in a **POST** request to `/registrieren.php`.  
   - Verify `{ "success": true }` in the response.  

2. **Login (Task 2)**  
   - Create another **HTML form** or function to collect `username_or_email` and `password`.  
   - Send them via **POST** to `/login.php`.  
   - If the response includes a `token` and `id`, store it in a variable or property (e.g., `this.token`).  

3. **Fetch & Display Users (Task 3)**  
   - After logging in, call **`GET /get_users.php`** with`token` and `id`.  
   - The returned JSON should be an array of user objects.  
   - Display them on screen in a simple list or `console.log` them if you’re just testing.  

4. **Send a Message (Task 4)**  
   - Hardcode a **receiver_id** (maybe the first user in your user list).  
   - Send a **POST** to `/send_message.php` with `token`, `sender_id`, `receiver_id`, `message`.  
   - On success, log or visually confirm that the message was 

---
## 🏗  Project Structure (Example)

```
/chat-app
├── /src
│   ├── ApiService.ts      // Handles API calls (login, register, get users, send message, etc.)
│   ├── ChatUI.ts          // Manages the frontend UI (DOM interactions)
│   ├── StateManager.ts    // Stores global state (token, user ID, etc.)
│   └── main.ts            // Main entry – orchestrates login, sending, loading conversation
├── /public
│   ├── index.html         // Basic layout
│   ├── styles.css         // Optional styling
├── tsconfig.json
└── package.json
```

> **Note**: You can split these into more files if you like (e.g., separate out user “types.ts”), but this structure should suffice for Week 8.

---

## 1) **Type Definitions**

You might keep your shared interfaces in a single file or inline. For example:

```ts
// Example user type
export interface User {
  id: string;
  name: string;
  group_id: string;
}

// Example chat message
export interface ChatMessage {
  sender_id: string;
  receiver_id: string;
  message: string;
  timestamp?: number; // if your API returns one
}
```

---

## 2) **ApiService.ts** (Skeleton)

```ts
// src/ApiService.ts

export interface ApiResponse {
  success?: boolean;
  error?: string;
  token?: string;
  id?: string; // e.g. user ID after register or login
}

export interface User {
  id: string;
  name: string;
  group_id: string;
}

const BASE_URL = "http://your-endpoint-url.com/messenger";

export class ApiService {
  private static token: string | null = null;
  private static userId: string | null = null;  // Optionally store user ID

  static getToken(): string | null {
    return this.token;
  }
  static getUserId(): string | null {
    return this.userId;
  }

  // Registration
  static async registerUser(
    name: string,
    email: string,
    password: string,
    groupId: string
  ): Promise<ApiResponse> {
    // POST /registrieren.php with FormData or JSON
    return { success: false, error: "Not implemented yet" };
  }

  // Login
  static async loginUser(
    usernameOrEmail: string,
    password: string
  ): Promise<ApiResponse> {
    // POST /login.php
    return { success: false, error: "Not implemented yet" };
  }

  // Get Users
  static async getUsers(): Promise<User[] | { error?: string }> {
    // GET /get_users.php
    return [];
  }

  // Send Message
  static async sendMessage(
    senderId: string,
    receiverId: string,
    message: string
  ): Promise<ApiResponse> {
    // POST /send_message.php
    return { success: false, error: "Not implemented yet" };
  }
}
```

**Tasks**:

1. **Implement `registerUser()`** to send `{ name, email, password, group_id }` to `/registrieren.php`.  
2. **Implement `loginUser()`** so it returns a **token** (or session ID) from `/login.php`, storing it in `this.token`. Possibly store the user’s ID in `this.userId`.  
3. **Implement `getUsers()`** to do a **GET** request to `/get_users.php`. Optionally append `?token=...` or `?id=...`.  
4. **Implement `sendMessage()`** to do a **POST** to `/send_message.php`, passing `{ sender_id, receiver_id, message }`.

---

## 3) **StateManager.ts** (Optional)

Sometimes you prefer to store global state (token, userId) in a separate manager:

```ts
// src/StateManager.ts

export class StateManager {
  private static token: string | null = null;
  private static userId: string | null = null;

  static setToken(token: string | null) {
    this.token = token;
  }
  static getToken(): string | null {
    return this.token;
  }

  static setUserId(uid: string | null) {
    this.userId = uid;
  }
  static getUserId(): string | null {
    return this.userId;
  }
}
```

Then in `ApiService` or `ChatUI`, you can call `StateManager.setToken(...)`.  
This is **optional** – you can keep everything in `ApiService` if you prefer.

---

## 4) **ChatUI.ts** (Skeleton)

```ts
// src/ChatUI.ts
import { User, ChatMessage } from "./ApiService"; // or from "types.ts"
import { ApiService } from "./ApiService";

export class ChatUI {
  constructor() {
    // Possibly attach event listeners or forms
  }

  async renderConversation(
    container: HTMLElement,
    currentUser: User,
    receiver: User
  ): Promise<void> {
    // 1) fetch the conversation from get_conversation.php (next week's feature)
    // 2) build HTML for each ChatMessage
    // 3) Insert into container
    // 4) style differently if msg.sender_id == currentUser.id
  }

  async showUsers(usersContainer: HTMLElement) {
    // e.g. calls ApiService.getUsers() and lists them in a <ul>
  }

  // etc.
}
```

---

## 5) **main.ts** (Interactive Flow)

```ts
// src/main.ts

import { ApiService } from "./ApiService";
import { ChatUI } from "./ChatUI";
// import { StateManager } from "./StateManager"; // if you want

async function main() {
  // 1) Possibly register or login a user
  const loginResp = await ApiService.loginUser("test@example.com", "password123");
  if (loginResp.error) {
    console.error("Login failed:", loginResp.error);
    return;
  }
  console.log("Login success, token:", ApiService.getToken(), "UserID:", ApiService.getUserId());

  // 2) Fetch the user list
  const usersResp = await ApiService.getUsers();
  console.log("All users:", usersResp);

  // 3) Send a message to a hardcoded user
  const sending = await ApiService.sendMessage("1", "2", "Hello from TypeScript!");
  console.log("Message sent?", sending);

  // 4) Render a chat UI
  const container = document.getElementById("chat-container");
  if (container) {
    const ui = new ChatUI();
    // For next week, you'd do something like:
    // ui.renderConversation(container, {id: "1", name: "Me", group_id: "1"}, {id: "2", name: "Bob", group_id: "1"});
  }
}

main();
```

**Hint**: If you don’t see the sent message in the conversation, confirm the receiving user’s ID actually exists in your DB. For testing, you might manually create a second user or adapt IDs.

---

## 6) **`index.html` (Minimal Example)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Messenger App (Week 8)</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Messenger (Week 8 Demo)</h1>
  <div id="chat-container"></div>
  <!-- If using a bundler or compiled TS, you'd reference something in dist/ -->
  <script type="module" src="../dist/main.js"></script>
</body>
</html>
```

**Optional**: Add a simple `<input>` and **Send** button to test `sendMessage()`. We’ll refine the UI next week.

---

## 🎯 **What to Deliver**

1. **Working registration and login** with `ApiService` (or `StateManager`).
2. **Send at least one message** to a hardcoded user.
3. **Fetch** the user list
4. **Minimal** console logging or DOM output to prove it works.

---

## 🔮 **Preview of Week 9**

- **Selectable user list**: Click a user to view their conversation. 
- **Conversations**: Load whole conversation and display it in chat-format. 
- **GUI improvements**: Add a nicer chat layout, message bubbles, etc.  
- **Real-time** or near real-time updates (polling or websockets, if applicable).

---

**Have fun!** Focus on the core logic and remember: next week you’ll refine the UI and interactions. This week is primarily about **making sure your data flows end-to-end** between the front-end and the real API.
