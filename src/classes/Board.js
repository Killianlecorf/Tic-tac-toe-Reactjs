class Board{

    constructor(size = 3) {
        this.grid = this.creationGrid(size)
    }

    add(playerMove , y , x){
        this.grid[y][x] = playerMove
    }

    
    creationGrid(size){

        let grid = []
        let line = []

        for (let x = 0; x < size; x++) {
            line.push("") 
        }

        for (let y = 0; y < size; y++) {
            grid.push(line)
        }
        return grid
    }

 
}


export default Board;