function createGrid(numberOfSquares) {
  const grid = document.querySelector('.grid');
  const width = Math.floor(document.body.clientWidth / numberOfSquares);
  const height = Math.floor(document.body.clientHeight / numberOfSquares);

  for (let i = 0; i < numberOfSquares; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (let j = 0; j < numberOfSquares; j++) {
      let div = document.createElement('div');
      div.classList.add('square');
      console.log(width);
      div.setAttribute('style', `width: ${width}px; height: ${height}px`);
      div.style.height = height;
      div.addEventListener('mouseover', () => {
        div.classList.add('blue');
      });
      row.appendChild(div);
    }
  }
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  const divs = document.querySelectorAll('.square');
  divs.forEach((e) => {
    e.classList.remove('blue');
  });
});

let numberOfSquares = prompt('Please indicate the number of squares per side');
if (numberOfSquares <= 100) {
  createGrid(numberOfSquares);
} else {
  alert('number of Squares should be less than 100');
}
