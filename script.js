const grid = document.querySelector('.grid');

function addColour (e) {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    e.target.removeEventListener('mouseover', addColour)
}

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

    const boxes = document.querySelectorAll('.box');

    boxes.forEach( (cell) => {
        cell.addEventListener('mouseover', addColour)
    } )
}



createGrid( 16 )


// console.log(rows)
// console.log(boxes);
function deleteGrid () {

    const rows = document.querySelectorAll('.row');

    for ( line of rows ) {
        line.remove();
    }
}