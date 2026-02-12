# Lecture 6: Modular Development - Task Description

## **Objective**
The goal of this exercise is to develop a **multiple-choice quiz application** using modular development principles in TypeScript. Each team consists of **2 students** (maximum 3). Each team will focus on three core modules and collaborate on the final integration.

Each member of the team can earn **10 points**.

---

## **Tasks Assignments**

### **Task 1: Questions Module (3 points)**
**The Team** is responsible for implementing the **question bank**, ensuring that:
- The module manages a structured **question bank** where each question is assigned a **category** and **difficulty level** (Easy, Medium, Hard).
- A function distributes **exactly 5 questions per player**, ensuring an equal number of questions across all difficulty levels.
- A **question pool** of 30 questions is created and stored in a **JSON file**. The JSON file is loaded using **fetch and AJAX** for retrieving questions dynamically.

### **Task 2: Scoring Module (2 points)**
**The Team** will develop the **scoring system**, which should:
- Assign points based on the difficulty of correctly answered questions (**Easy = 1, Medium = 2, Hard = 3**).
- Calculate the player's **total score percentage** and **number of points** based on their performance.
- Store and retrieve **player performance data**, allowing for individual tracking. Ensure scores are correctly formatted and displayed in the final results.

### **Task 3: UI Module (3 points)**
**The Team** will create the **user interface**, ensuring that:
- The application properly **displays questions and answer options**, allowing players to interact with the game.
- Players can **select answers**, receive feedback, and progress through the quiz.
- The final **scores and leaderboard** are displayed clearly at the end of the game. The UI design is user-friendly, responsive, and visually appealing.

### **Final Integration (2 points)**
Once each module is completed, the team will work together to **integrate** their components into a fully functional quiz application. 
- The modules must properly **communicate** with each other and result in a seamless final application.

---

## **Evaluation Criteria**
- **Module Completion:** Each task is fullfiled correctly? (8 points)
- **Final Integration:** Is the application fully functional and well-integrated? (2 points)

---

By working in a structured, modular approach, students will gain valuable experience in software development and team collaboration. Good luck!
