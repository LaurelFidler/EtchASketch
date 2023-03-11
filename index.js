const small = document.getElementById('smallSize');
const medium = document.getElementById('mediumSize');
const large = document.getElementById('largeSize');
const black = document.getElementById('black');

let color = 'black';

small.addEventListener('click', function() {
    createGrid(16);
})

medium.addEventListener('click', function() {
    createGrid(32);
})

large.addEventListener('click', function() {
    createGrid(64);
})

function createGrid(size) {
    let board = document.querySelector(".gridContainer");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
     let square = document.createElement('div');
     square.addEventListener('mouseover', colorSquare);
     square.style.backgroundColor = 'white';
     board.insertAdjacentElement('beforeend', square);
    }
}

function changeColor(choice) {
    color = choice;
}

function colorSquare() {
    if (color === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else
        this.style.backgroundColor = color;
}

function reset() {
    let board = document.querySelector(".gridContainer");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

createGrid(16);


