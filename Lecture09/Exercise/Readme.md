# ✅ Week 9 Exercise: TypeScript Messenger – Conversations & UI

## 🎯 **Objective**
Extend your TypeScript Messenger App from Week 8 by:

1. Displaying the **user list** with clickable entries  
2. Showing the **full conversation** with another user (via `get_conversation.php`)  
3. Improving the **UI layout & styling** for a real chat experience  
4. Sending messages to selected users using the existing API  

> ✨ **This week focuses on building a real user interface** and working with conversations between users.  
> > Use DOM manipulation or a framework if you want – but **pure TypeScript + HTML** is enough.

---

## 🔁 Recap: Last Week

By now, your application should already support:

- ✅ **Registration** via `/registrieren.php`  
- ✅ **Login** via `/login.php`  
- ✅ **Listing users** via `/get_users.php`  
- ✅ **Sending messages** to hardcoded recipients via `/send_message.php`

---

## 🚀 Week 9 Goals

| Feature                              | Task # | Points |
|--------------------------------------|--------|--------|
| Load & display full conversation     | Task 1 | 3 P    |
| Improved UI: message bubbles, layout | Task 2 | 2 P    |
| Clickable user list to start a chat  | Task 3 | 2 P    |

---

## 💡 Overview of New API Endpoint

### `/get_conversation.php`  
- **Method**: `GET`  
- **Params**: `token`, `user1_id`, `user2_id`  
- **Returns**: List of messages between 2 users
```json
[
  { "sender_id": "abc", "receiver_id": "def", "message": "Hi!", "timestamp": 1699999999 },
  ...
]
```

Use this to fetch the **entire chat history** between you (logged-in user) and another user.

---

## 🛠️ What You Should Build

### 1) **Clickable User List**
- Fetch users from the API (same as last week)
- Display them in a **sidebar or list**
- When clicking a user → **load that conversation** with them

### 2) **Chat Window**
- When a user is selected:
  - Call `/get_conversation.php?token=...&user1_id=...&user2_id=...`
  - Display messages as **chat bubbles**, distinguishing between incoming and outgoing messages

### 3) **Send Message UI**
- Below the chat window, add a form:
  - `<input type="text">` for message text
  - `<button>` to send
- On submit:
  - Call `/send_message.php` with the selected user as `receiver_id`
  - Append the new message to the chat view immediately

---

## 🧩 UI Hints

Here’s a possible structure for your HTML (can be styled later):

```html
<div class="chat-app">
  <div class="user-list">
    <!-- List of all users, each is clickable -->
  </div>
  <div class="chat-window">
    <div id="chat-messages">
      <!-- Messages go here -->
    </div>
    <form id="chat-form">
      <input type="text" id="chat-input" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  </div>
</div>
```

---

## 📦 Sample Styles (Optional CSS Idea)

```css
.user-list {
  width: 25%;
  float: left;
  border-right: 1px solid #ccc;
}
.chat-window {
  width: 75%;
  float: left;
  padding: 1rem;
}
.chat-message {
  padding: 0.5rem;
  margin: 0.3rem 0;
}
.sent {
  text-align: right;
  background-color: #daf8cb;
}
.received {
  text-align: left;
  background-color: #eee;
}
```

---

## 🔁 Reloading & Auto-Updating (Optional Bonus)

- Add a **"Reload chat"** button to fetch new messages  
- Or use `setInterval()` to fetch every 10–20 seconds  
- Auto-scroll to bottom of chat on new message  
- Display formatted timestamps (`new Date(timestamp * 1000).toLocaleString()`)

---

## 📁 Suggested Project Folder Structure

```
/chat-app
├── /src
│   ├── ApiService.ts        # API logic (login, register, getUsers, getConversation, sendMessage)
│   ├── ChatUI.ts            # UI updates (user list, message rendering)
│   ├── main.ts              # Entry point / controller
│   └── types.ts             # Shared interfaces (User, Message)
├── /public
│   ├── index.html
│   ├── styles.css
├── tsconfig.json
├── package.json
```

---

## 🔌 TypeScript Interfaces

```ts
export interface ChatMessage {
  sender_id: string;
  receiver_id: string;
  message: string;
  timestamp?: number;
}

export interface User {
  id: string;
  name: string;
  group_id: string;
}
```

---

## ✅ Final Checklist for Week 9

| Feature                        | Required |
|-------------------------------|----------|
| [ ] UI displays all users     | ✅       |
| [ ] User can select a user    | ✅       |
| [ ] Conversation is loaded    | ✅       |
| [ ] Messages display nicely   | ✅       |
| [ ] Input to send new message | ✅       |
| [ ] Message appears immediately after sending | ✅ |

---

## 📢 Submission & Testing Notes

- Test with multiple accounts: register 2–3 test users  
- Send messages back and forth to see how conversations work  
- If a message doesn’t appear, check browser console or inspect the JSON payload  
- Ensure your `token` and `user_id` are passed correctly to **all endpoints**

---

## 🔮 Preview Week 10

- We will start with Angular!

---

## 🙌 Have Fun

This is the week where your app **starts to feel real**!  
Even a simple UI with clickable users and real messages is already a big win 💬✨

Let your creativity run wild — just make sure you meet the functional goals first.