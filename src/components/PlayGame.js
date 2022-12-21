import React, { useState } from 'react';
import Board from '../classes/Board';

const PlayGame = () => {

    const [player , setPlayer] = useState(1)
    const [board , setBoard] = useState(new Board())

    const switchPlayer = () => {
        if (player === 2 ) {
            setPlayer(1) 
        }else{
            setPlayer(2) 
        } 
        return player
    }
 
    const addPlayer = (x, y) => {
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
        </div>
    );
};

export default PlayGame;