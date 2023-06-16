// let clicked = false;
// let boxes={
//   bx1:"",  bx2:"",  bx3:"",
//   bx4:"",  bx5:"",  bx6:"",
//   bx7:"",  bx8:"",  bx9:"",
// }

// let players ={
//   firstPlayer:X,
//   secondPlayer:O
// };

// function player(p){
//   let p
//   if(p==="O"){
// p=""
// return p
//   }
//   }


$(document).ready(function(){
 // const tile = Array.from(" .array-box");
 // const annoucer =  $("#winner").val();
 // const player = $(".display-player").val();

    const tiles = Array.from($('.array-box'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.win');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            // if (a === '' || b === '' || c === '') {
            //     continue;
            // }
            // if (a === b && b === c) {
            //     roundWon = true;
            //     break;
            // }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    
    }

    const announce =function (type) {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction =function (tile)  {
        if (tile.innerText === 'X' )
        {
            return false;
        }
        if(tile.innerText === 'O'){
            $('div').css('color', 'green');
            return false;
        }

        return true;
    };
    // ||
    const updateBoard = function (index)  {
        board[index] = currentPlayer;
    }

    const changePlayer =function ()  {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = function (tile, index)  {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = function () {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(function (tile)  {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( function (tile, index)  {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});




// if(player.innerText==="X"){
//   for (let i = 0; i <= 9
//     ; i++) {

//     let id = "bx" + i;
//     let display = document.getElementById(id)
//   display.innerText = "X";
//   player.innerText="O's";
//   console.log("TRUE");
// }
//}

// else{
//   for(let i=0; i<=9; i++){

//   let id= "bx" + i;
//   let display = document.getElementById(id);
//   display.innerText = "O";

//   }}