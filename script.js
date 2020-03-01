const board = document.querySelector('.board');
const allCells = board.children;

const cells = {
  c1: document.querySelector('#c1'),
  c2: document.querySelector('#c2'),
  c3: document.querySelector('#c3'),
  c4: document.querySelector('#c4'),
  c5: document.querySelector('#c5'),
  c6: document.querySelector('#c6'),
  c7: document.querySelector('#c7'),
  c8: document.querySelector('#c8'),
  c9: document.querySelector('#c9'),
};

const field = (state) => ({ state });
const player = (name) => ({ name });

const emptyBoard = field(['', '', '', '', '', '', '', '', '']);
const fullBoard = field(['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X']);

const listen = (() => {
  for (let i = 0; i < allCells.length; i++) {
    cells[`c${i + 1}`].addEventListener('click', (e) => e.target.style.boxShadow = 'inset 5px 5px 10px #cacaca, inset -5px -5px 10px #ffffff');
  }
})();

const render = (() => {
  for (let i = 0; i < allCells.length; i++) {
    cells[`c${i + 1}`].innerHTML = fullBoard.state[i];
  }
})();
