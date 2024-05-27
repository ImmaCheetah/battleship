

export default function playGame() {
    
    function makeCellsClickable() {
        const allCells = document.querySelectorAll('.grid-cell');

        allCells.forEach((element) => {
            element.addEventListener('click', (e) => {
                console.log('yo');
            })
        })
    }

    makeCellsClickable();
}

