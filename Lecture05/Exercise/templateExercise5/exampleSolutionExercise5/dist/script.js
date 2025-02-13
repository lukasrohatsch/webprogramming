"use strict";
var _a;
const notePositions = {
    'C': 80,
    'D': 70,
    'E': 60,
    'F': 50,
    'G': 40,
    'A': 30,
    'B': 20
};
let loadedNotes = [];
let isThemeLoaded = false;
function playSound(note) {
    console.log("Playing note:", note);
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}
function addNoteToLine(note, index) {
    const notesSvg = document.getElementById('notes');
    if (!notesSvg)
        return;
    const noteGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const noteElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    noteElement.setAttribute("cx", (index * 30 + 80).toString());
    noteElement.setAttribute("cy", notePositions[note].toString());
    noteElement.setAttribute("r", "5");
    noteElement.setAttribute("fill", "black");
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", (index * 30 + 80).toString());
    textElement.setAttribute("y", (notePositions[note] + 15).toString());
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("font-size", "10");
    textElement.textContent = note.toString();
    noteGroup.appendChild(noteElement);
    noteGroup.appendChild(textElement);
    notesSvg.appendChild(noteGroup);
}
function resetNoteLine() {
    const notesSvg = document.getElementById('notes');
    if (!notesSvg)
        return;
    notesSvg.innerHTML = `
        <line x1="0" y1="20" x2="1000" y2="20" stroke="black" />
        <line x1="0" y1="40" x2="1000" y2="40" stroke="black" />
        <line x1="0" y1="60" x2="1000" y2="60" stroke="black" />
        <line x1="0" y1="80" x2="1000" y2="80" stroke="black" />
        <line x1="0" y1="100" x2="1000" y2="100" stroke="black" />
        <text x="10" y="70" font-family="serif" font-size="80" fill="black">&#119070;</text>
    `;
    loadedNotes = [];
    isThemeLoaded = false;
}
function playLoadedNotes() {
    let delay = 0;
    loadedNotes.forEach(note => {
        setTimeout(() => playSound(note), delay);
        delay += 500;
    });
}
(_a = document.getElementById('reset-notes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', resetNoteLine);
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function () {
        if (!isThemeLoaded) {
            const note = this.id.slice(3);
            playSound(note);
            const notesSvg = document.getElementById('notes');
            if (notesSvg) {
                addNoteToLine(note, notesSvg.children.length);
            }
            this.classList.add('pressed');
            setTimeout(() => this.classList.remove('pressed'), 200);
        }
    });
});
document.addEventListener('keydown', function (event) {
    if (!isThemeLoaded) {
        const keyMap = {
            'a': 'C', 's': 'D', 'd': 'E', 'f': 'F', 'g': 'G', 'h': 'A', 'j': 'B'
        };
        const note = keyMap[event.key];
        if (note) {
            playSound(note);
            const notesSvg = document.getElementById('notes');
            if (notesSvg) {
                addNoteToLine(note, notesSvg.children.length);
            }
            const keyElement = document.getElementById(`key${note}`);
            if (keyElement) {
                keyElement.classList.add('pressed');
                setTimeout(() => keyElement.classList.remove('pressed'), 200);
            }
        }
    }
});
