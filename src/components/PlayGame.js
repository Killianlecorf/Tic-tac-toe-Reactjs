import React, { useState } from 'react';
import Board from '../classes/Board';

const PlayGame = () => {

    const [winSize , setwinSize] = useState(3)
    const [boardSize , setBoardSize] = useState(3)
    const [sizePourcent , setSizePourcent] = useState('30%')
    const [player , setPlayer] = useState(1)
    const [board , setBoard] = useState(new Board(3))
    const [gameState , setGameState] = useState({
        isWin: false,
        isNull: false
    })


    const handleChangeCase = (event) => {
        const size = parseInt(event.target.value)
        setBoard(new Board(size))
        if (sizePourcent === '30%') {
            setSizePourcent('20%')
            setBoardSize(4)
        }
        else{
            setSizePourcent('30%')
            setBoardSize(3)
        }
    }


    const handleRestartGame = () => {
        setBoard(new Board(boardSize))
        setPlayer(1) 
    }

    const handleChangeInput = (event) => {
        const findPlayer = event.target.value
        let ParseEvent = parseInt(findPlayer);
        setPlayer(ParseEvent);
        
        }

    const switchPlayer = () => {
        if (player === 1 ) {
            setPlayer(2) 
        }
        
        if (player === 2 ) {
            setPlayer(1)
        }
        
    }
 


    const addPlayer = (x, y) => {

        let isWin = winVerification(y, x)

        if (isWin === false) {
            if (player === 1) {
                board.add('X' , y, x)
            }
            if (player === 2) {
                board.add('O' , y, x)
            }
            switchPlayer()
        }

        if (isWin === true) {
            setGameState({...gameState, isWin } )
            return
        }

    }

    // const winVerification = () => {
    //     for (let y = 0; y < 3; y++) {
    //         if (!board.grid[y][0]) {
    //             continue
    //         }
    //         if (board.grid[y][0] === board.grid[y][1]  && board.grid[y][1] === board.grid[y][2]) {
    //             return true
    //         }
    //     }

    //     for (let x = 0; x < 3; x++) {
    //         if (!board.grid[0][x]) {
    //             continue
    //         }
    //         if (board.grid[0][x] === board.grid[1][x] && board.grid[1][x] === board.grid[2][x]) {
    //             return true
    //         }
    //     }

    //     if (board.grid[0][0] === board.grid[1][1] && board.grid[1][1] === board.grid[2][2] && board.grid[2][2]) {
    //         return true
    //     }  
        
    //     if (board.grid[0][2]) {
    //         if (board.grid[2][0] === board.grid[1][1] && board.grid[1][1] === board.grid[0][2]) {
    //             return true
    //         }
    //     }

    //     return false

    // }


    const displayCase = () => {

        return board.grid.map((ligne, y) => ligne.map(
            (square, x) => 
                <div 
                    key={x + '-' + y}
                    className="case"
                    onClick={() => addPlayer(x, y)}
                    style = {{ width : sizePourcent }}
                >
                    <p className='square'>{square}</p>
                </div>
        ));
    }


    const createViewVerification = (player) => {

        if (player === 1 ) {
            if ( gameState.isWin === true) {
            
                return <p>joueur { player } à gagné</p>
            }
            return ''
        }
        if (player === 2 ) {
            if (gameState.isWin === true) {
            
                return <p>joueur { player } à gagné</p>
            }
            return ''
        }
    }

    const handleChangeCasesize = (event) => {

        const handleSize =  parseInt(event.target.value)

        if (handleSize === 4) {
            setwinSize(4)
        }
        if (handleSize === 3) {
            setwinSize(3)
        }

    }

    

    let winVerification = (posY, posX) => {

        let chainSize = 0

        for (let x = 0; x < boardSize; x++) {

            if ((board.grid[posY][x] === 'X' && player === 2) || (board.grid[posY][x] === 'O' && player === 1)) {
                chainSize++
            }else{
                chainSize = 0
            }
            
            if (winSize === chainSize) {
                return true 
            }
            
        }

        // VERTICAL

        chainSize = 0
        for (let x = 0; x < boardSize; x++) {
            chainSize = 0
            for (let y = 0; y < boardSize; y++) {
                
                if ((board.grid[y][posX] === 'X' && player === 2) || (board.grid[y][posX] === 'O' && player === 1)) {
                    chainSize++
                }else{
                    chainSize = 0
                }
                
                if (winSize === chainSize) {
                    return true 
                }
            }
        }
        
        chainSize = 0
        for (let x = 0; x < boardSize; x++) {
            if ((board.grid[x][x] === 'X' && player === 2) || (board.grid[x][x] === 'O' && player === 1)) {
                chainSize++
            }else{
                chainSize = 0
            }
            
            if (winSize === chainSize) {
                return true 
            }
        }

        chainSize = 0
        let limite = boardSize -1
        for (let x = limite; x >= 0; x--) {
            
            if ((board.grid[limite-x][x] === 'X' && player === 2) || (board.grid[limite-x][x] === 'O' && player === 1)) {
                chainSize++
            }else{
                chainSize = 0
            }
            
            if (winSize === chainSize) {
                return true 
            }
        }
        chainSize = 0

        return false
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
                    <div className="select-case">
                        <label className='label-grid-size'>Taille de la grille</label>
                        <select name="" onChange={ handleChangeCase }>
                            <option value="3">par 3</option>
                            <option value="4">par 4</option>
                        </select>
                    </div>
                    <div className="select-case">
                        <label className='label-grid-size'>Taille pour gagner</label>
                        <select name="" onChange={ handleChangeCasesize }>
                            <option value="3">par 3</option>
                            <option value="4">par 4</option>
                        </select>
                    </div>
                    <div className="select-content">
                    <label className='label-grid-size'>Choix du joueur</label>
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