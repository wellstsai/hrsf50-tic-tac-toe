var inquire = require('inquirer');

var board, toggle;

var gameInit = function() {

  board = [ ['0','0','0'],
            ['0','0','0'],
            ['0','0','0'] ];

  console.log('Game Start!')
  printBoard();
  toggle = true;
  displayTurn();
  turn();
}

var printBoard = function() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

var displayTurn = function() {
  toggle ? console.log('Turn: Player One') : console.log('Turn: Player Two');
}

var turn = function() {
  console.log('Enter row (1-3) and column (1-3) to place your marker');
  inquire.prompt([{
    type: 'input',
    name: 'row',
    message: 'Enter row number (integer):'
  },{
    type: 'input',
    name: 'column',
    message: 'Enter column number (integer):'
  }])
  .then(function (answers) {
    var row = answers.row - 1;
    var col = answers.column - 1;
    toggle ? board[row][col] = 'X' : board[row][col] = 'O';
    printBoard();
  })
}


gameInit();