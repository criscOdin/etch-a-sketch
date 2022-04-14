const grid = document.querySelector('.grid');
const width = Math.floor(document.body.clientWidth / 16);
const height = Math.floor(document.body.clientHeight / 16);

for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  grid.appendChild(row);
  for (let j = 0; j < 16; j++) {
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

const clear = document.querySelector('.clear');
const divs = document.querySelectorAll('.square');
clear.addEventListener('click', () => {
  divs.forEach((e) => {
    e.classList.remove('blue');
  });
});
