const grid = document.querySelector('.grid');

function addColour (e) {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    e.target.removeEventListener('mouseover', addColour)
}

function createGrid( num ) { //create grid in .grid element; a num x num grid
    

    if (num >= 100) {
        alert("Number too high!")
        return;
    }

    deleteGrid();

    for ( i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row)
        row.style.display = 'flex';
        for ( j = 0; j < num; j++ ) {
            const box = document.createElement('div');
            box.classList.add('box')
            row.appendChild(box)
        }

    }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach( (cell) => {
        cell.addEventListener('mouseover', addColour)
    } )
}


function deleteGrid () { //delete all nodes of the grid DOM

    const rows = document.querySelectorAll('.row');

    for ( line of rows ) {
        line.remove();
    }
}

createGrid(16);