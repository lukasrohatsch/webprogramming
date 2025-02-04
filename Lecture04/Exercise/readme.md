### Exercise 4: Enhancing the Piano Game with JavaScript Objects and AJAX (fetch)

#### Objective
The goal of this exercise is to enhance the functionality of the Piano Game by creating an interactive interface with JavaScript objects and AJAX (fetch API). Students will:
1. Use JavaScript objects to store piano key data.
2. Fetch musical notes from a JSON file instead of hardcoding them.
3. Process and dynamically use fetched data to play notes.
4. Add interactive controls, including keyboard and click events.
5. Implement a reset button to clear any active styles or effects.

---

### Step-by-Step Instructions

#### 1. Set Up the Piano Keys Using Objects

Define each piano key as an object with properties to store relevant data. This will make it easy to access and manipulate the keys when playing them dynamically.

1. **Create an Array of Objects**:
   - Each object represents a piano key and contains properties for:
     - `note`: The musical note (e.g., "C").
     - `key`: The keyboard key associated with the note (e.g., "a").

   ```javascript
   const keys = [
       { note: "C4", key: "a" },
       { note: "D4", key: "s" },
       { note: "E4", key: "d" },
       { note: "F4", key: "f" },
       { note: "G4", key: "g" },
       { note: "A4", key: "h" },
       { note: "B4", key: "j" }
   ];
   ```

   - **Explanation**: This array stores the details for each key, allowing easy access and manipulation.

---

#### 2. Fetch Notes from a JSON File

Instead of hardcoding note sequences, retrieve them dynamically from a JSON file.

1. **Create a JSON file (`notes.json`)** with a song:
   
   ```json
   {
       "song": "Twinkle Twinkle Little Star",
       "notes": ["C4", "C4", "G4", "G4", "A4", "A4", "G4"]
   }
   ```

2. **Fetch the Notes in JavaScript**:

   ```javascript
   async function loadNotes() {
       try {
           const response = await fetch("notes.json");
           const data = await response.json();
           console.log("Loaded Notes:", data.notes);
           playSong(data.notes);
       } catch (error) {
           console.error("Error loading notes:", error);
       }
   }
   ```

   - **Explanation**: Fetches the `notes.json` file and extracts the notes array for further processing.

---

#### 3. Play Sounds Based on Fetched Notes

Once the notes are loaded, they should be played sequentially.

1. **Create a function to play the song**:
   
   ```javascript
   function playSong(notes) {
       let index = 0;

       function playNextNote() {
           if (index < notes.length) {
               playSound(notes[index]);
               index++;
               setTimeout(playNextNote, 500);
           }
       }

       playNextNote();
   }
   ```

   - **Explanation**: Iterates over the fetched notes and plays them sequentially.

2. **Create the `playSound` Function**:
   
   ```javascript
   function playSound(note) {
       let audio = new Audio(`sounds/${note}.mp3`);
       audio.play();
   }
   ```

   - **Explanation**: Loads and plays the corresponding note's audio file.

---

#### 4. Interactive Controls: Keyboard & Click Events

Add event listeners so users can play notes by pressing keys or clicking on them.

1. **Keyboard Interaction**:
   
   ```javascript
   document.addEventListener("keydown", function(event) {
       keys.forEach(key => {
           if (event.key === key.key) {
               playSound(key.note);
           }
       });
   });
   ```

2. **Click Interaction**:
   
   ```javascript
   document.querySelectorAll(".key").forEach(keyElement => {
       keyElement.addEventListener("click", function() {
           playSound(keyElement.dataset.note);
       });
   });
   ```

   - **Explanation**: Allows playing notes via keyboard or clicking piano keys.

---

#### 5. Implement a Reset Button

1. **Add a Reset Button in HTML**:
   
   ```html
   <button id="reset-button">Reset Game</button>
   ```

2. **Implement the Reset Functionality**:
   
   ```javascript
   const resetButton = document.getElementById('reset-button');
   resetButton.addEventListener('click', function() {
       document.querySelectorAll('.key').forEach(key => {
           key.classList.remove("active");
       });
       console.log("Piano reset.");
   });
   ```

   - **Explanation**: Clears active styles from keys and resets the state.

---

### Submission Criteria

1. **Fetch Notes Dynamically**: Load note sequences from a JSON file.
2. **Object Array for Piano Keys**: Represent each piano key as an object with `note` and `key` properties.
3. **Interactive Controls**:
   - Clicking or pressing a key should play the corresponding sound.
   - Visual feedback should be displayed when keys are pressed.
4. **Reset Button**: Implement functionality to reset the game state.

### Optional Challenge
- Load multiple songs from different JSON files.
- Add additional styling to improve the piano’s appearance.
- Implement more complex interactions, such as holding down keys for sustained notes.

### Learning Objectives

- **Level 1 (Basic Knowledge)**:
  - Understand and create JavaScript objects.
  - Fetch and process JSON data asynchronously using `fetch()`.
- **Level 2 (Advanced Knowledge)**:
  - Implement interactive controls with event listeners.
  - Add dynamic styling and visual feedback based on user actions.

