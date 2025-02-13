# Exercise 1: JavaScript Memory Game Implementation

## **Objective**
The goal of this exercise is to build a simple **Memory Game** using JavaScript while only applying **previously learned concepts**. The game will be structured using direct DOM manipulation without loops, event listeners, or functions.

Successfully completing this exercise will earn **3 points**.

---

## **Task Description**

### **Task 1: Static Card Setup**
- Define a set of cards directly in the HTML file.
- Each card should have a matching pair and contain a placeholder symbol (`?`).

### **Task 2: OnClick Handling for Cards**
- Use the `onclick` attribute in HTML to trigger actions when a card is clicked.
- No `addEventListener()` should be used.

### **Task 3: Card Flip Logic (1 Point)**
- Ensure that cards can only be clicked once per round.
- Add a basic visual indicator when a card is flipped.
- When a card is clicked, its symbol should be revealed by updating its `textContent`.
- Only two cards can be flipped at a time.

### **Task 4: Match Checking (1 Point)**
- If the two flipped cards have the same symbol, they remain visible.
- If they do not match, they should be hidden again after a short delay.

### **Task 5: Game Completion (1 Point)**
- When all pairs have been matched, show a simple completion message.
- Encourage the player to start a new round manually.

---

## **Achievement Criteria**
To successfully complete this exercise, students must:
1. Define the card setup manually in HTML.
2. Implement `onclick` interactions for flipping cards.
3. Ensure correct card-flipping behavior with a two-card limit.
4. Check for matches and manage visibility accordingly.
5. Display a win message when all pairs are matched and allow a manual reset.

---

## **Optional Enhancements**
For additional challenges, students can extend the game by adding:
- **Visual Feedback**: Change colors for matched pairs.
- **Counter for Attempts**: Track how many moves the player makes.
- **Game Timer**: Measure the time taken to complete the game.

---

Good luck and happy coding!
