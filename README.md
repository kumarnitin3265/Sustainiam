
How to play
1. Start the game by running the following command
2. Players will be prompted to enter their moves in the format row col (e.g., 2 3).
3. The game will display the updated board after each move.
4. The game ends when either player wins or there is a draw.

Game Rules
1. Players take turns to enter their moves, starting with Player X.
2. A player wins if they can align four of their symbols (X or O) in a row, column, or diagonally.
3. If all positions on the board are filled without a winner, the game ends in a draw.
4. If a player attempts to place their symbol in an occupied cell, they will be prompted to try again.

Code Explanation
1. Game Board: The board is represented as a 2D array with 5 rows and 5 columns.
2. Player Turns: The players alternate turns using the variable player to keep track of whose turn it is.
3. Win Check: The checkWin function checks for any horizontal, vertical, or diagonal win conditions.
4. Draw Check: The checkDraw function determines if all cells are filled and there is no winner.
5. Input Handling: Player inputs are taken using the Node.js readline module.