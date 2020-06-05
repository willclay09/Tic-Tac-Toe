let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const cellElements = document.querySelectorAll('.grid-cell')

for (let index = 0; index < cellElements.length; index += 1) {
    let cellElement = cellElements[index]
    cellElement.addEventListener('click', function () {
        console.log('Player clicked on cell ' + cellElement.id)
        cellElement.innerHTML = currentPlayer

        if (currentPlayer === 'X') {
            playerXSelections.push(Number(cellElement.id))
            currentPlayer = 'O'
        } else if (currentPlayer === 'O') {
            playerOSelections.push(Number(cellElement.id))
            currentPlayer = 'X'
        }


    })
}
function checkWins (winningCombos, PlayerSelections){
    for(let index = 0; index < winningCombos.length; index += 1)
    let matches = 0
    for( let combo = 0; combo < winningCombos[index]; combo += 1){

    }
}
//for (let sectionIndex = 0; sectionIndex < winningCombinations.length; sectionIndex += 1){
    //let winner= winningCombinations[sectionIndex]
    //console.log( 'winner' + sectionIndex )

//for (let cellIndex = 0; cellIndex < winner.length; cellIndex += 1){
    //let section = winner[cellIndex]
    //console.log(cellIndex + ':' + section)
//}
//}
//console.log( currentPlayer  + 'is the winner')