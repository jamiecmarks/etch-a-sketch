const grid = document.querySelector('.grid');

function createGrid( num ) {

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
}


createGrid( 16 )


const boxes = document.querySelectorAll('.box');

function addColour (e) {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    e.target.removeEventListener('mouseover', addColour)
}

boxes.forEach( (cell) => {
    cell.addEventListener('mouseover', addColour)
} )