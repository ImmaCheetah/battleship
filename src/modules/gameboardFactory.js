function Gameboard() {
    let board = [];
    
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = [];
      }
    }
    
    return {board}
}

export {Gameboard}