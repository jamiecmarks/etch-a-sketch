const grid = document.querySelector('.grid');

for ( i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row)
    row.style.display = 'flex';
    for ( j = 0; j < 16; j++ ) {
        const box = document.createElement('div');
        box.classList.add('box')
        row.appendChild(box)
    }

}

const boxes = document.querySelectorAll('.box');

function addColour (e) {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    e.target.removeEventListener('mouseover', addColour)
}

boxes.forEach( (cell) => {
    cell.addEventListener('mouseover', addColour)
} )