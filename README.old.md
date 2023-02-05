# react-morpion


<!-- crée une fonction qui ajouter des grilles -->

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

    // const size = 3
        // let d = 0
        // for (let y = 0; x < size; y++) {
        //     for (let x = 0; x < size; x++) {
        //         if (board.grid[y][x] === 3) {

        //             d++
        //         }else{
        //             d=0
        //         }
        //     }
        // }