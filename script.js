
const container = document.querySelector('#container');
const button = document.querySelector('#btn');

function createSquares(dimensions) {
    for (let i=0; i<dimensions**2; i++ ) {
    const divSquares = document.createElement('div');
    container.appendChild(divSquares);
    divSquares.classList.add('squares')
    divSquares.style.cssText = `flex-basis: ${100 / dimensions}%;`;

}
}




createSquares(4)
changeSquareColorOnHover()

function createGrid() {
    let dimensions = 0;
    button.addEventListener('click', () => {
        let input = (prompt('Add your dimensions n*n'));
        input = parseFloat(input)
        promptChecker(input)
        if (checkerValid === true) {    // this makes sure the dimensions are valid before creating the grid
            dimensions = parseInt(input);
            clearGrid();
            createSquares(dimensions);  
            changeSquareColorOnHover()
        } else {clearGrid();} //clears grid if value is invalid.
         
        
    })
}

function clearGrid () {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

let checkerValid = true; // this is false when the input is not a positive number integer less than 100
function promptChecker(input) {
    if (input < 0) {
        alert('Please enter a positive integer number');
        checkerValid = false;
    } else if (!Number.isInteger(input)) {
        alert('Please enter a positive integer number');
        checkerValid = false;
    } else if (input >= 100) {
        alert('Dimensions should be less than 100x100');
        checkerValid = false;
    } else {
        checkerValid = true;
    }
}


function randombgColor() {
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    
    var bgColor = "rgb(" + x + (",") + y + (",") + z + ")";
    return bgColor;
}

function changeSquareColorOnHover () {
    
    const squares = document.querySelectorAll('.squares')
    squares.forEach(square => {square.addEventListener("mouseover", (e) => {
        const bgColor = randombgColor();
        e.target.style.backgroundColor=bgColor;
    } )
        
    });
}