export default class Evolution {
    constructor() {
        this.data = new Array();
        this.clone = new Array();
    }

    initialise = function (data) {
        this.data = data;
        this.clone = this.data;
    }

    evolve = function () {
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[row].length; col++) {
                const aliveNeighbors = this.getAliveNeighbours(row, col);
                if(this.data[row][col]){
                    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                        this.clone[row][col] = false;
                    }else  if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                        this.clone[row][col] = true;
                    }
                }else{
                    if(aliveNeighbors == 3){
                        this.clone[row][col] = true
                    }
                }
            }
        }
        this.data = this.clone;
        return this.data.map((arr) => arr.slice());
    }

    getAliveNeighbours = function (row, col) {
        let aliveNeighbor = 0;
        for(let i = row - 1; i < row + 2; i++){
            for(let j = col - 1; j < col + 2; j++){
                if(this.data[i] && this.data[i][j]){
                    if(!(i == row && j == col))
                        aliveNeighbor++;
                }
            }
        }
        return aliveNeighbor;
    };
}
