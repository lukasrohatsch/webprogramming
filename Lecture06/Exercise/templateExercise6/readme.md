# Lecture 6: Modular Development - Task Description

## **Objective**
The goal of this exercise is to develop a **multiple-choice quiz application** using modular development principles in TypeScript. Each team consists of **6 students**, divided into **three 2-person subteams**. Each subteam will focus on one core module, and all six members will collaborate on the final integration.

Each subteam can earn **up to 8 points**, while the final integration as a full team is worth **2 points**, making a total of **10 points** per team.

---

## **Tasks and Group Assignments**

### **Task 1: Questions Module (8 points)**
**Group 1** is responsible for implementing the **question bank**, ensuring that:
- The module manages a structured **question bank** where each question is assigned a **category** and **difficulty level** (Easy, Medium, Hard). (3 points)
- A function distributes **exactly 5 questions per player**, ensuring an equal number of questions across all difficulty levels. (2 points)
- A **question pool** of 30 questions is created and stored in a **JSON file**. The JSON file is loaded using **fetch and AJAX** for retrieving questions dynamically. (3 points)

### **Task 2: Scoring Module (8 points)**
**Group 2** will develop the **scoring system**, which should:
- Assign points based on the difficulty of correctly answered questions (**Easy = 1, Medium = 2, Hard = 3**). (3 points)
- Calculate the player's **total score percentage** and **number of points** based on their performance. (2 points)
- Store and retrieve **player performance data**, allowing for individual tracking. Ensure scores are correctly formatted and displayed in the final results.(3 points)

### **Task 3: UI Module (8 points)**
**Group 3** will create the **user interface**, ensuring that:
- The application properly **displays questions and answer options**, allowing players to interact with the game. (3 points)
- Players can **select answers**, receive feedback, and progress through the quiz. (2 points)
- The final **scores and leaderboard** are displayed clearly at the end of the game. The UI design is user-friendly, responsive, and visually appealing. (3 points)

### **Final Integration (2 points)**
Once each module is completed, all six members will work together to **integrate** their components into a fully functional quiz application. 
- The modules must properly **communicate** with each other and result in a seamless final application. (2 points)

---

## **Evaluation Criteria**
- **Module Completion:** Does each subteam fulfill its assigned task correctly? (8 points per subteam)
- **Final Integration:** Is the application fully functional and well-integrated? (2 points total)

---

By working in a structured, modular approach, students will gain valuable experience in software development and team collaboration. Good luck!
