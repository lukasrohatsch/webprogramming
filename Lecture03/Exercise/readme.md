### Week 3 Exercise: Enhancing the Memory Game with Arrays and Loops

#### Objective
In this exercise, you’ll enhance your Memory Game using JavaScript arrays and loops. You’ll use arrays to store card data, shuffle the cards, and track flipped cards. Loops will help you render cards dynamically and handle repeated actions efficiently.

### Step-by-Step Instructions

#### 1. Setting Up the Card Array

1. **Define the Card Symbols**:
   - Create an array containing the card symbols (e.g., emojis or numbers).
   - Each card should have a matching pair.

   ```javascript
   const cards = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍒', '🍒'];
   ```

2. **Shuffle the Array**:
   - Write a shuffle function that randomizes the array. This will help mix up the card positions each time the game starts.

   ```javascript
   function shuffle(array) {
       array.sort(() => Math.random() - 0.5);
   }
   shuffle(cards);
   ```

   - **Explanation**: `Math.random() - 0.5` generates a random value, which `sort()` uses to rearrange the items randomly.

#### 2. Rendering the Cards Dynamically

Instead of adding each card to the HTML manually, you’ll use JavaScript to render the cards from the array.

1. **Select the Game Board**:
   - Use `getElementById` to select the `#game-board` element where the cards will appear.

   ```javascript
   const gameBoard = document.getElementById('game-board');
   ```

2. **Loop through the Card Array**:
   - Use `forEach()` to loop through the `cards` array.
   - For each symbol in the array, create a new `div` element with the class `card`, assign the symbol to a `data-symbol` attribute, and append it to the game board.

   ```javascript
   cards.forEach(symbol => {
       const card = document.createElement('div');
       card.classList.add('card');
       card.dataset.symbol = symbol;
       card.addEventListener('click', flipCard);
       gameBoard.appendChild(card);
   });
   ```

   - **Explanation**: This code creates a new `div` for each card and attaches an event listener that calls `flipCard()` when the card is clicked.

#### 3. Implementing Flip Logic with Arrays

You’ll use an array to keep track of flipped cards and manage the game logic.

1. **Track Flipped Cards**:
   - Create an empty array, `flippedCards`, to temporarily store the cards that have been flipped.

   ```javascript
   let flippedCards = [];
   ```

2. **Write the `flipCard` Function**:
   - The `flipCard` function should:
     - Show the card’s symbol when clicked.
     - Add the clicked card to the `flippedCards` array.
     - If two cards are flipped, call a function to check if they match.

   ```javascript
   function flipCard(event) {
       const card = event.target;

       // Prevent flipping already flipped cards or more than two cards at once
       if (card.classList.contains('flipped') || flippedCards.length === 2) {
           return;
       }

       // Flip the card to show the symbol
       card.classList.add('flipped');
       card.textContent = card.dataset.symbol;
       flippedCards.push(card);

       // Check if two cards are flipped
       if (flippedCards.length === 2) {
           checkForMatch();
       }
   }
   ```

   - **Explanation**: `flipCard()` shows the symbol of the clicked card, adds it to the `flippedCards` array, and calls `checkForMatch()` when two cards are flipped.

#### 4. Implementing the Match Logic

You’ll now add logic to check if the flipped cards match. If they match, keep them flipped. If not, flip them back after a short delay.

1. **Write the `checkForMatch` Function**:
   - Compare the two cards stored in `flippedCards`.
   - If they match, clear the `flippedCards` array. If they don’t, flip them back after 1 second.

   ```javascript
   function checkForMatch() {
       const [card1, card2] = flippedCards;

       if (card1.dataset.symbol === card2.dataset.symbol) {
           // Match found, clear flippedCards array
           flippedCards = [];
       } else {
           // No match, flip cards back after 1 second
           setTimeout(() => {
               card1.classList.remove('flipped');
               card2.classList.remove('flipped');
               card1.textContent = '';
               card2.textContent = '';
               flippedCards = [];
           }, 1000);
       }
   }
   ```

   - **Explanation**: This code checks if the symbols of the two flipped cards match. If they do, the cards stay flipped. If not, the cards are flipped back after a short delay.

2. **Add a Win Condition**:
   - Track the number of matched pairs by counting successful matches in `checkForMatch`.
   - When all pairs are matched, display a message congratulating the player.

   ```javascript
   let matchedPairs = 0;

   function checkForMatch() {
       const [card1, card2] = flippedCards;

       if (card1.dataset.symbol === card2.dataset.symbol) {
           matchedPairs++;
           flippedCards = [];

           if (matchedPairs === cards.length / 2) {
               setTimeout(() => alert("Congratulations! You've matched all pairs!"), 500);
           }
       } else {
           setTimeout(() => {
               card1.classList.remove('flipped');
               card2.classList.remove('flipped');
               card1.textContent = '';
               card2.textContent = '';
               flippedCards = [];
           }, 1000);
       }
   }
   ```

#### 5. Adding a Reset Button to Shuffle and Restart

1. **Create the Reset Button in HTML**:
   - Add a button in the HTML with an ID of `reset-button`.

   ```html
   <button id="reset-button">Reset Game</button>
   ```

2. **Add Event Listener to Reset the Game**:
   - Write a function to clear the game board, reshuffle the cards, reset the `matchedPairs` and `flippedCards` arrays, and re-render the board.

   ```javascript
   const resetButton = document.getElementById('reset-button');
   resetButton.addEventListener('click', resetGame);

   function resetGame() {
       gameBoard.innerHTML = ''; // Clear the board
       matchedPairs = 0;         // Reset match counter
       flippedCards = [];        // Clear flipped cards

       shuffle(cards);           // Shuffle the cards
       renderBoard();            // Re-render the board
   }

   function renderBoard() {
       cards.forEach(symbol => {
           const card = document.createElement('div');
           card.classList.add('card');
           card.dataset.symbol = symbol;
           card.addEventListener('click', flipCard);
           gameBoard.appendChild(card);
       });
   }
   ```

   - **Explanation**: `resetGame` clears the board, resets game state, shuffles the cards, and calls `renderBoard` to start a new game.


### Submission Criteria

1. **Shuffled Game Board**: Cards should appear in random order each game.
2. **Flip and Match Logic**: Clicking cards should reveal them, with matched pairs staying flipped.
3. **Game Reset Button**: A button should allow players to reset and reshuffle the game board.
4. **Win Condition**: The game should display a congratulatory message when all pairs are matched.

