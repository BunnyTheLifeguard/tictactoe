const board = document.querySelector('.board');
const allCells = board.children;
const reStart = document.querySelector('.start');
const turnP1 = document.querySelector('#turnP1');
const turnP2 = document.querySelector('#turnP2');
const msg = document.querySelector('.msg');
const player1 = document.querySelector('#p1');
const player2 = document.querySelector('#p2');

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
const player = (name, score) => ({ name, score });

const gameState = field(['', '', '', '', '', '', '', '', ''], 1);
const p1 = player(player1.value, 0);
const p2 = player(player2.value, 0);

const game = (() => {
  reStart.addEventListener('click', () => {
    gameState.state = ['', '', '', '', '', '', '', '', ''];
    gameState.turn = 1;
    msg.innerHTML = '';
    p1.name = player1.value;
    p2.name = player2.value;

    for (let i = 0; i < allCells.length; i++) {
      cells[`c${i + 1}`].innerHTML = gameState.state[i];
      cells[`c${i + 1}`].style.boxShadow = '5px 5px 10px #cacaca, -5px -5px 10px #fff';
      turnP1.innerHTML = `${p1.name} starts`;
      turnP2.innerHTML = '';
    }
  });

  for (let i = 0; i < allCells.length; i++) {
    cells[`c${i + 1}`].addEventListener('click', (e) => {
      e.target.style.boxShadow = 'inset 5px 5px 10px #cacaca, inset -5px -5px 10px #ffffff';
      if (gameState.state[`${i}`] !== '') {
        alert('This field is already taken. Choose another one!');
      } else if (gameState.turn % 2 !== 0) {
        gameState.state[`${i}`] = 'X';
        gameState.turn += 1;
        turnP1.innerHTML = '';
        turnP2.innerHTML = `${p2.name}'s turn`;
      } else {
        gameState.state[`${i}`] = 'O';
        gameState.turn += 1;
        turnP1.innerHTML = `${p1.name}'s turn`;
        turnP2.innerHTML = '';
      }
      cells[`c${i + 1}`].innerHTML = gameState.state[i];
      if (
        gameState.state[0] === 'X' && gameState.state[1] === 'X' && gameState.state[2] === 'X'
        || gameState.state[3] === 'X' && gameState.state[4] === 'X' && gameState.state[5] === 'X'
        || gameState.state[6] === 'X' && gameState.state[7] === 'X' && gameState.state[8] === 'X'
        || gameState.state[0] === 'X' && gameState.state[3] === 'X' && gameState.state[6] === 'X'
        || gameState.state[1] === 'X' && gameState.state[4] === 'X' && gameState.state[7] === 'X'
        || gameState.state[2] === 'X' && gameState.state[5] === 'X' && gameState.state[8] === 'X'
        || gameState.state[0] === 'X' && gameState.state[4] === 'X' && gameState.state[8] === 'X'
        || gameState.state[2] === 'X' && gameState.state[4] === 'X' && gameState.state[6] === 'X') {
        turnP2.innerHTML = '';
        msg.innerHTML = `${p1.name} won!`;
        p1.score += 1;
      } else if (
        gameState.state[0] === 'O' && gameState.state[1] === 'O' && gameState.state[2] === 'O'
        || gameState.state[3] === 'O' && gameState.state[4] === 'O' && gameState.state[5] === 'O'
        || gameState.state[6] === 'O' && gameState.state[7] === 'O' && gameState.state[8] === 'O'
        || gameState.state[0] === 'O' && gameState.state[3] === 'O' && gameState.state[6] === 'O'
        || gameState.state[1] === 'O' && gameState.state[4] === 'O' && gameState.state[7] === 'O'
        || gameState.state[2] === 'O' && gameState.state[5] === 'O' && gameState.state[8] === 'O'
        || gameState.state[0] === 'O' && gameState.state[4] === 'O' && gameState.state[8] === 'O'
        || gameState.state[2] === 'O' && gameState.state[4] === 'O' && gameState.state[6] === 'O') {
        turnP1.innerHTML = '';
        msg.innerHTML = `${p2.name} won!`;
        p2.score += 1;
      } else if (
        gameState.state[0] !== '' && gameState.state[1] !== '' && gameState.state[2] !== ''
        && gameState.state[3] !== '' && gameState.state[4] !== '' && gameState.state[5] !== ''
        && gameState.state[6] !== '' && gameState.state[7] !== '' && gameState.state[8] !== '') {
        msg.innerHTML = 'Tie!';
        turnP1.innerHTML = '';
        turnP2.innerHTML = '';
      }
    });
  }
})();
