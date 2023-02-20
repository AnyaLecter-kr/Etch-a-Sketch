const bigBox = document.querySelector('.box-container');
const reset = document.querySelector('.resetButton');
var slider = document.querySelector('.slider'); 
var output = document.querySelector('.slider-output');
var cells = document.querySelectorAll('.square');



//Shows text to indicate the size of the starting grid 
output.innerHTML = "16 x 16";


function generateGrid(rows, cols) { 
    bigBox.style.setProperty("--grid-rows", rows); 
    bigBox.style.setProperty("--grid-columns", cols);
    for (i= 1; i <= rows * cols; i++) { 
        let sq = document.createElement('div');
        bigBox.appendChild(sq).className = "square";
    }
    var cells = document.querySelectorAll('.square');

    cells.forEach((cell) => { 
    cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = '#388697';
        
    });
    });

    function resetGame() {
        cells.forEach((cell) => { 
            cell.style.backgroundColor = '';
        });
    };
    
    // Reset button 
    reset.addEventListener('click', () => {
        resetGame()
    });
}

generateGrid(16,16)


function clear() { 
    bigBox.innerHTML = ''
}

slider.addEventListener("input", sliderValue)

function sliderValue() { 
    clear()
    let range = document.getElementById("myRange").value;
    generateGrid(range, range);
}

// Resets the board to a blank slate

slider.oninput = function() { 
    output.innerHTML = this.value + 'x' + this.value;
}
