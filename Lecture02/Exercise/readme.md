### Exercise 2: Building a Virtual Piano Game

#### Objective
Create an interactive piano game using HTML, CSS, and JavaScript. The game will display a virtual piano where each key corresponds to a musical note. Players can either click the keys or press designated keys on their keyboard to play different notes.

### Step-by-Step Instructions

#### 1. Setting Up the HTML and CSS

Download the provided HTML and CSS template files, or copy the code from the templates below.

- **HTML**: The template includes a layout of piano keys.
- **CSS**: Uses Bootstrap for basic styling, with custom styles to create a piano appearance.

#### 2. JavaScript Functionality

Your JavaScript file should perform the following tasks:

1. **Play Sound Function**
   - Create a `playSound` function that takes a note (e.g., "C", "D", "E") as a parameter and plays the corresponding sound file.
   - Test the function by calling it directly and verifying that it plays the correct audio.

2. **Add Event Listeners to Piano Keys**
   - Write a function to add `click` event listeners to each piano key element.
   - When a key is clicked, it should call `playSound` with the appropriate note.

3. **Handle Keyboard Events**
   - Add a global event listener for `keydown` events.
   - Map specific keyboard keys (e.g., "a", "s", "d") to play corresponding piano notes.

4. **Debugging and Testing**
   - Use `console.log()` to verify that each key press or click triggers the correct sound.
   - Ensure that both mouse and keyboard controls work correctly.

#### 3. Optional Enhancements

- **Add Visual Feedback**: Make the key briefly change color when it’s pressed to simulate a real piano key press.
- **Extend the Piano**: Add more keys and map additional notes.

### JavaScript Implementation Guide

#### 1. Implement the `playSound` Function

Define a `playSound` function that takes a note as a parameter and plays the corresponding sound file. Use `Audio` objects to load and play the sound files.

```javascript
function playSound(note) {
    let audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}
```

**Explanation**: `new Audio()` loads the audio file associated with the specified note. Calling `audio.play()` plays the sound.

#### 2. Add Click Event Listeners to Each Key

Write a function to attach `click` event listeners to each piano key. When a key is clicked, the `playSound` function should be called with the appropriate note.

```javascript
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', function() {
        playSound(key.id.slice(3)); // e.g., "keyC" becomes "C"
        key.classList.add('pressed'); // Visual feedback
        setTimeout(() => key.classList.remove('pressed'), 200);
    });
});
```

**Explanation**: `key.id.slice(3)` extracts the note from the ID (e.g., "keyC" becomes "C"). Adding the `pressed` class briefly changes the color for visual feedback, then removes it after 200ms.

#### 3. Add Keyboard Event Listeners

Map specific keyboard keys to play the piano notes. Add a `keydown` event listener to play notes based on keyboard inputs.

```javascript
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'a':
            playSound('C');
            document.getElementById('keyC').classList.add('pressed');
            break;
        case 's':
            playSound('D');
            document.getElementById('keyD').classList.add('pressed');
            break;
        case 'd':
            playSound('E');
            document.getElementById('keyE').classList.add('pressed');
            break;
        case 'f':
            playSound('F');
            document.getElementById('keyF').classList.add('pressed');
            break;
        case 'g':
            playSound('G');
            document.getElementById('keyG').classList.add('pressed');
            break;
        case 'h':
            playSound('A');
            document.getElementById('keyA').classList.add('pressed');
            break;
        case 'j':
            playSound('B');
            document.getElementById('keyB').classList.add('pressed');
            break;
    }

    setTimeout(() => document.querySelector('.pressed').classList.remove('pressed'), 200);
});
```

**Explanation**: Each case in the `switch` statement maps a specific key (e.g., "a" for "C", "s" for "D") to a note. The corresponding key visually changes color when pressed.

### Testing and Debugging Tips

1. **Check Console Output**: Add `console.log()` statements in `playSound` to verify that the correct note is playing.

   ```javascript
   function playSound(note) {
       console.log("Playing note:", note); // Debugging output
       let audio = new Audio(`sounds/${note}.mp3`);
       audio.play();
   }
   ```

2. **Test Both Click and Keyboard Events**:
   - Click each piano key to ensure it triggers the correct sound.
   - Press the designated keyboard keys to confirm they map correctly to each note.

3. **Ensure All Audio Files Are Available**:
   - Verify that all sound files (e.g., `sounds/C.mp3`, `sounds/D.mp3`) are correctly placed in the `sounds` folder.


### Optional Enhancements

- **Add More Keys**: Extend the piano with additional notes if you have extra audio files.
- **Add Sound Effects or Visual Effects**: Experiment with CSS animations for smoother visual feedback when keys are pressed.

### Summary of Requirements for Submission

1. **Clickable Piano Keys**: Each piano key should play a note when clicked.
2. **Keyboard Controls**: Pressing specific keys (e.g., "a", "s", "d") should play the correct notes.
3. **Debugging Logs**: Use `console.log()` to verify correct functionality.
4. **Visual Feedback**: Optional, but encouraged for a more realistic experience.
