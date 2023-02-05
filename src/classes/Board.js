class Board{

    constructor(size) {
        this.grid = this.creationGrid(size)
    }

    add(playerMove , y , x){
        this.grid[y][x] = playerMove
        
    }

    
    creationGrid(size){

        let grid = []
        

        for (let y = 0; y < size; y++) {
            let line = []
            for (let x = 0; x < size; x++) {
                line.push("") 
                
            }
            grid.push(line)
            
        }
        
        return grid
    }

 
}


export default Board;