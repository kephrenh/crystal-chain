const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function validSudoku(board) {
  let set = new Set();

  // Iterate through the rows
  for (let i = 0; i < 9; i++) {
    // Iterate through the columns
    for (let j = 0; j < 9; j++) {
      // value at the row of index i and column of index j
      const value = board[i][j];

      // If value is ".", row, column, and box are created
      if (value !== ".") {
        const row = `${value} at row ${i}`;
        const column = `${value} at colum ${j}`;
        const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;
        console.log(`${row} ${column} ${box}`);

        /*
        if there is duplicate value in row, column, or box return false
        else add row, column, and box to set
        */
        if (set.has(row) || set.has(column) || set.has(box)) {
          return false;
        } else {
          set.add(row);
          set.add(column);
          set.add(box);
        }
      }
    }
  }
  return true;
}

console.log(validSudoku(board1));
console.log(validSudoku(board2));
