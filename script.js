const grid = document.querySelector('.grid');
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  grid.appendChild(row);
  for (let j = 0; j < 16; j++) {
    let div = document.createElement('div');
    div.classList.add('square');
    row.appendChild(div);
  }
}
