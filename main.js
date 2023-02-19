const bigBox = document.querySelector('.box-container');
const reset = document.querySelector('.resetButton');
var slider = document.querySelector('.slider'); 
var output = document.querySelector('.slider-output');

output.innerHTML = "80 x 80";

// Generates a grid of 64x64 
for (let i = 1; i <= 256; i++ ) { 
    const squares = document.createElement('div');
    squares.classList.add('square')
    bigBox.appendChild(squares)
};


const cells = document.querySelectorAll('.square');

// Changes the colour of cells hovered over 
cells.forEach((cell) => { 

    cell.addEventListener('click', () => {
        cell.style.backgroundColor = 'black';
    });
});

// Resets the board to a blank slate
function resetGame() {
    cells.forEach((cell) => { 
        cell.style.backgroundColor = '';
});
};


// Reset button 
reset.addEventListener('click', () => {
    resetGame()
});

slider.oninput = function() { 
    output.innerHTML = this.value + 'x' + this.value;
}