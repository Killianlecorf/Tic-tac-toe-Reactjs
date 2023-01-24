import React, { useState } from 'react';
import Board from '../classes/Board';

const PlayGame = () => {

    const [player , setPlayer] = useState(1)
    const [board , setBoard] = useState(new Board())


    const handleRestartGame = () => {
        setBoard(new Board())
        setPlayer(1) 
    }

    const handleChangeInput = (event) => {
        let test = event.target.value
        let ParseEvent = parseInt(test);
        setPlayer(ParseEvent);
        handleRestartGame()
        }
        console.log(player);

    const switchPlayer = () => {
        if (player === 1 ) {
            setPlayer(2) 
        }
        
        if (player === 2 ) {
            setPlayer(1)
        }
    }
 
    const addPlayer = (x, y , winnerPlayer) => {
        
        winnerPlayer = winVerification()

        if (winnerPlayer === true) {
            return
        }

        if (board.grid[y][x]) {
            return
        }
        if (player === 1) {
            board.add('X' , y, x)
        }
        if (player === 2) {
            board.add('O' , y, x)
        }
        switchPlayer()
    }

    const displayCase = () => {
        
        return board.grid.map((ligne, y) => ligne.map(
            (square, x) => 
                <div 
                    key={x + '-' + y}
                    className="case"
                    onClick={() => addPlayer(x, y)}
                >
                    <p className='square'>{square}</p>
                </div>
        ));
    }
    

    const winVerification = () => {
        
        for (let y = 0; y < 3; y++) {
            if (!board.grid[y][0]) {
                continue
            }
            if (board.grid[y][0] === board.grid[y][1]  && board.grid[y][1] === board.grid[y][2]) {
                return true
            }
        }

        for (let x = 0; x < 3; x++) {
            if (!board.grid[0][x]) {
                continue
            }
            if (board.grid[0][x] === board.grid[1][x] && board.grid[1][x] === board.grid[2][x]) {
                return true
            }
        }

        if (board.grid[0][0] === board.grid[1][1] && board.grid[1][1] === board.grid[2][2] && board.grid[2][2]) {
            return true
        }  
        
        if (board.grid[0][2]) {
            if (board.grid[2][0] === board.grid[1][1] && board.grid[1][1] === board.grid[0][2]) {
                return true
            }
        }

        return false
    }


    const createViewVerification = (player ,winnerPlayer) => {

        winnerPlayer = winVerification()
        
        if (player === 1 ) {
            player = 2
            if (winnerPlayer === true) {
            
                return <p>joueur { player } à gagné</p>
            }
            return ''
        }
        if (player === 2 ) {
            player = 1
            if (winnerPlayer === true) {
            
                return <p>joueur { player } à gagné</p>
            }
            return ''
        }
    }

    return (
        <div className="grid-area">
            <div className="grid-border">
                {displayCase()}
            </div>
            <div className='info-area'>
                <div className="info-content">
                    <div className="reset-button-area">
                        <button className='reset-button' onClick={ handleRestartGame }>Reset</button>
                    </div>
                    <div className="win-para">
                        {createViewVerification(player)}
                    </div>
                    <div className="select-content">
                        <select onChange={ handleChangeInput } >
                            <option value="1">Joueur 1</option>
                            <option value="2">Joueur 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayGame;