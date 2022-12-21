class Board{

    constructor() {
        this.grid = [["" , "" , ""] , ["" , "" , ""] , ["" , "" , ""]]
    }

    add(playerMove , y , x){
        this.grid[y][x] = playerMove
    }
}

export default Board;