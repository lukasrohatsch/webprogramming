### Exercise 4: Enhancing the interactive Piano with JavaScript Objects and AJAX

#### Objective
The goal of this exercise is to extend the functionality of the interactive Piano by utilizing JavaScript objects and AJAX (fetch API). Instead of hardcoding musical notes, students will dynamically load note sequences from a JSON file and process them within the piano.

#### Task Description
1. **Piano Key Representation** (1 point)
   - Define piano keys as JavaScript objects, storing their relevant properties such as musical note and corresponding keyboard key.
   
2. **Dynamic Note Loading** (1 point)
   - Retrieve musical note sequences from an external JSON file using the fetch API. The loaded data should be processed and made available for interactive use within the game. Interactive use could either be (1) playing the notes / melodies automatically or (2) providing a playalong mode, where the app gives hints which notes to play.

3. **User Interaction** (1 point)
   - In addition to the existing mouse and keyboard input from Task 2, add additional input possibilities like clicking on notes of the loaded note sequence or keyboard shortcuts for play/pause/reset of the automatic playback.
   
4. **Reset Functionality** (1 point)
   - Provide a mechanism to reset the app state, stopping any playing song, clearing active styles or effects and preparing the interface for a new session.

#### Achievement Criteria
To successfully complete this exercise, students must:
1. Load note sequences dynamically from a JSON file instead of hardcoding them.
2. Represent piano keys as objects
3. Enable additional user interaction via keyboard or mouse input mouse for the loaded note sequences.
4. Implement a reset function that clears active states and allows restarting the app

#### Optional Enhancements
- Support multiple songs by allowing selection from different JSON files.
- Improve visual and audio effects for a more immersive experience.
- Implement sustained notes when keys are held down for a longer duration.

