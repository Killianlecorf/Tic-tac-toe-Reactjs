import React, { useState } from 'react';
import Board from '../classes/Board';

const PlayGame = () => {

    const [player , setPlayer] = useState(1)
    const [board , setBoard] = useState(new Board())


    const handleRestartGame = () => {
        setBoard(new Board())
        setPlayer(1) 
    }


    const switchPlayer = () => {
        if (player === 2 ) {
            setPlayer(1) 
        }else{
            setPlayer(2) 
        } 
    }
 
    const addPlayer = (x, y) => {
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

    return (
        <div className="grid-area">
            <div className="grid-border">
                {displayCase()}
            </div>
            <div className='info-area'>
                <div className="info-content">
                    <button onClick={ handleRestartGame }>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default PlayGame;