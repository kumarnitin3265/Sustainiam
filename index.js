// const TicTac =  require('./components/game.js');
const express = require('express');
const readline =  require('readline');
const server = express();




const step = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''], 
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

let player = 'X';
        
    function printBoard() {
        console.log("Tic Tac Toe Board");
        for(let i=0; i<5; i++){
            console.log(` -----  -----  -----  -----  -----`);
            console.log(`|   ${board[i][0]}  |   ${board[i][1]}  |  ${board[i][2]}    |   ${board[i][3]}    |   ${board[i][4]}    |`);
            if(i==4){
                console.log(` ----- -----  -----  -----  -----`);
            }
        }
    }

    function checkDraw(){
        let res = board.flat().every(cell => 
            cell !== ''
        )
        return res;
    }


    function checkWin(){

        for(let i=0; i<5; i++){
        // check for the row
            for(let j=0; j<2; j++){
                if(
                    board[i][j] === player && board[i][j + 1] === player && board[i][j + 2] == player && board[i][j + 3] === player
                ) {
                    return true;
                }
            }
        }

        for(let i=0; i<5; i++){
            // check for the column
            for(let j=0; j<2; j++){
                if(
                    board[i][j] === player && board[i + 1][j] === player && board[i + 2][j] == player && board[i + 3][j] === player
                ) {
                    return true;
                }
            }
        }

        // check for top-left to bottom-right diagonal
        
        for(let i=0; i<2; i++){
            for(let j=0; j<2; j++){
                if(
                    board[i][j] === player && board[i + 1][j + 1] === player && board[i + 2][j + 2] === player && board[i + 3][j + 3] === player
                ) {
                    return true;
                }
            }
        }

        // check for top-right to bottom-left diagonal
        for(let i=0; i<2; i++){
            for(let j=3; j<5; j++){
                if(
                    board[i][j] === player && board[i+1][j-1] === player && board[i+2][j-2] === player && board[i+3][j-3] === player
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    function makeRandomMove(row, col){

        if(board[row][col] === "") {
            board[row][col] = player;

            // console.log("row:", row, "col:", col);
            

            if(checkWin()){
                printBoard();
                console.log(`Player ${player} wins!`);
                step.close();
            } else if(checkDraw()) {
                printBoard();
                console.log('The game has been draw');
                step.close();
            } else {
                player = player === 'X'?'O':'X';
                playTurn();

            }
        } else {
            console.log("Invalid move! try again");
            playTurn();
        }
    }

    function playTurn(){
        printBoard();
        step.question(`Player ${player}, enter your next move: `, input => {
            const [row, col] = input.split('').map(Number);
            console.log("row:", row, "col:", col);
            
            if(row >= 1 && row < 6 && col >=1 && col < 6) {
                console.log("row:", row, "col:", col);
                makeRandomMove(row-1, col-1);
                console.log("row:", row, "col:", col);
            } else {
                console.log('Invalid input!');
                playTurn();
            }
        });
    }

server.get("/", (req, res) =>{
    res.send("Welcome to Tic Tac Toe! Play in the console.");
});

server.listen(3000, () => {
    console.log("server is listening on port 30000");
    playTurn();
});