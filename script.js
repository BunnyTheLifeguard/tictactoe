const board = document.querySelector('.board');
const allCells = board.children;
const reStart = document.querySelector('.start');

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

const field = (state, turn) => ({ state, turn });
const player = (name) => ({ name });

const emptyBoard = field(['', '', '', '', '', '', '', '', ''], 1);

const render = (() => {
  reStart.addEventListener('click', () => {
    emptyBoard.state = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < allCells.length; i++) {
      cells[`c${i + 1}`].innerHTML = emptyBoard.state[i];
      cells[`c${i + 1}`].style.boxShadow = '5px 5px 10px #cacaca, -5px -5px 10px #fff';
    }
  });
  for (let i = 0; i < allCells.length; i++) {
    cells[`c${i + 1}`].addEventListener('click', (e) => {
      e.target.style.boxShadow = 'inset 5px 5px 10px #cacaca, inset -5px -5px 10px #ffffff';
      if (emptyBoard.state[`${i}`] !== '') {
        alert('This field is already taken. Choose another one!');
      } else if (emptyBoard.turn % 2 !== 0) {
        emptyBoard.state[`${i}`] = 'X';
        emptyBoard.turn += 1;
      } else {
        emptyBoard.state[`${i}`] = 'O';
        emptyBoard.turn += 1;
      }
      cells[`c${i + 1}`].innerHTML = emptyBoard.state[i];
    });
  }
})();
