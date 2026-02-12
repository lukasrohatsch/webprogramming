# Week 12 Exercise: Finish Angular Messenger

From task 11 you should already have an **existing working Angular messenger interacting with our API**. It should have at least the following features:
* working **login**
* list other **users**
* show **conversations** with other users and possibility to chat with them

This exercise will add **real-time features** and **saving settings to local storage**.

---

## API Endpoints

### Known endpoints

You already know the API endpoints from `http://webp-ilv-backend.cs.technikum-wien.at/messenger/`:
* `/login.php`
* `/registrieren.php`
* `/get_users.php`
* `/send_message.php`
* `/get_conversation.php`

### Additional new endpoints

In addition there is a new NodeJS-based webserver at `http://webp-ilv-backend.cs.technikum-wien.at:3000/` which offers a **WebSocket** and **alternatives for existing endpoints**:
* `/send-message`: sends a message to a user
   * Method: `POST`
   * Content-Type: `application/json`
   * Parameters:
      * `sender_id`: user ID of the sender
      * `receiver_id`: user ID of the receiver
      * `message`: the message to send
      * `token`: authentication token that was issued at login
   * Returns: JSON object:
      * `{ error: "<error-message>" }` or
      * `{ success: true }`
* `/get-conversation`: retrieves a conversation
   * Method: `GET`
   * Query parameters:
      * `user1Id`: first user ID (logged in user)
      * `user2Id`: second user ID of conversation partner
      * `token`: authentication token that was issued at login of user1
   * Returns: JSON object:
      * `{ error: <error-message> }` or
      * JSON array of message objects, each object containing:
         * `sender_id`: user ID of the sender
         * `receiver_id`: user ID of the receiver
         * `timestamp_ms`: millisecond timestamp of the message, **NEW - not existing in `get_conversation.php`**
         * `timstamp`: readable string timestamp

The NodeJS-based webserver also offers a **WebSocket endpoint** at `ws://webp-ilv-backend.cs.technikum-wien.at:3000`, where you can connect:
* Parameters: you need to add query parameters:
   * `user_id`: the ID of the logged-in user
   * `token`: authentication token that was issued at login
   * so the total WebSocket URL to connect looks like: `ws://webp-ilv-backend.cs.technikum-wien.at:3000?user_id=123&token=ABCDEF...`
* Messages: you will receive messages at the websocket for new live messages. Each message is a JSON string containing:
    * `event: "message"` - is for new message events (other events like "typing" may exist).
    * `sender_id`: user ID of the sender
    * `receiver_id`: user ID of the receiver
    * `timestamp_ms`: millisecond timestamp of the message


**Important notes**:
* for all endpoints **you have to be connected to VPN!**
* you **have to use the new `send-message` endpoint**, otherwise you won't get live updates from the WebSocket!
* you can still use the old `get_conversation.php`, only use the new `get-conversation` if you need timestamps in milliseconds.

---

## Tasks

There are three tasks to complete, in total 10 points.

### Task 1 (3 points)

You should **save user data using localStorage** in order to make it more convenient to use the messenger:
* **Remember login**: it should be possible to remember the last logged-in user and auto-login the next time.
   * Login form: add a checkbox `Remember` in order to let the user choose if he/she wants to save the login credentials
   * Save credentials to `localStorage`, if the user wants to remember login
   * Auto-login: if there are saved credentials, automatically login at next start of the application (after refresh, `F5`) 
* **Known contacts**: remember which conversations were already opened in order to choose known contacts faster.
   * **Save the ID** of the conversation partner to localStorage when a conversation is opened.
   * **Save a list** of known users in localStorage, not only the ID for the last opened conversation
   * Contacts view: in the component listing the contacts, show **"known contacts" first** and "other contacts" separately afterwards


### Task 2 (3 points)

Connect to the WebSocket at `ws://webp-ilv-backend.cs.technikum-wien.at:3000` in order to **receive live updates of new messages** (see details of WebSocket above):
* Your app automatically **connects to the WebSocket after login**, disconnects after logout
* Conversation view: **new messages are automatically shown** without manual refresh
* The conversation view is **automatically scrolled down** after a new message is inserted.

### Task 3 (4 points)

Add a component `notification-bubble`, which informs the user about **new incoming messages** (e.g. a bubble at the bottom right, like a notification on a desktop computer):
* the bubble shows up at live incoming messages from the websocket (see Task 3)
* bubble shows up **independent of the current view** (login, contacts, conversation)
* The bubble is **not shown** if the user is **already viewing the conversation** with that person
* the bubble shows **name** and **message content** of the new message
* a **click on the bubble opens the conversation** with this person and closes the bubble

## Hints
Some hints for implementing the tasks:
* **Services**: create new services `WebSocketService` and `LocalStorageService` for encapsulating the logic interacting with LocalStorage and the WebSocket.
* **StateService**: create a `StateService` that collects the state from other services (e.g. `LocalStorageService` and `ApiService`). `WebSocketService` can update the state from `StateService` using appropriate methods.
* **Observables**: add an `Observable` like `newMessages$` in `StateService`, so the `notification-bubble` component can subscribe to receive information about incoming messages.