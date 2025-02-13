interface NotePositions {
    [key: string]: number;
}

const notePositions: NotePositions = {
    'C': 80,
    'D': 70,
    'E': 60,
    'F': 50,
    'G': 40,
    'A': 30,
    'B': 20
};

type Note = keyof typeof notePositions;

let loadedNotes: Note[] = [];
let isThemeLoaded: boolean = false;

function playSound(note: Note): void {
    console.log("Playing note:", note);
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

function addNoteToLine(note: Note, index: number): void {
    const notesSvg = document.getElementById('notes') as SVGElement | null;
    if (!notesSvg) return;

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

function resetNoteLine(): void {
    const notesSvg = document.getElementById('notes') as SVGElement | null;
    if (!notesSvg) return;

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

function playLoadedNotes(): void {
    let delay = 0;
    loadedNotes.forEach(note => {
        setTimeout(() => playSound(note), delay);
        delay += 500;
    });
}

document.getElementById('reset-notes')?.addEventListener('click', resetNoteLine);

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', function(this: HTMLElement) {
        if (!isThemeLoaded) {
            const note = this.id.slice(3) as Note;
            playSound(note);
            const notesSvg = document.getElementById('notes') as SVGElement | null;
            if (notesSvg) {
                addNoteToLine(note, notesSvg.children.length);
            }
            this.classList.add('pressed');
            setTimeout(() => this.classList.remove('pressed'), 200);
        }
    });
});

document.addEventListener('keydown', function(event: KeyboardEvent) {
    if (!isThemeLoaded) {
        const keyMap: { [key: string]: Note } = {
            'a': 'C', 's': 'D', 'd': 'E', 'f': 'F', 'g': 'G', 'h': 'A', 'j': 'B'
        };
        const note = keyMap[event.key];
        if (note) {
            playSound(note);
            const notesSvg = document.getElementById('notes') as SVGElement | null;
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