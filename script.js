const board = document.querySelector('.board');
const cells = board.children;

const field = (state) => ({ state });

const finished = field(['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X']);

for (let i = 0; i < cells.length; i++) {
  document.querySelector(`#c${i + 1}`).innerHTML = finished.state[i];
}

console.log(finished.state);
