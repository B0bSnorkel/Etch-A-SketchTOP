const grid = document.querySelector("#container");

function newGrid(number){
    for(let i = 0; i < number*number; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "purple";
        }); 

        grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        grid.appendChild(cell);
    } 
}

function startGrid(){
    const number = prompt('Choose grid size between 16-64!')
    if(number >= 16 && number <= 64){
        newGrid(number, number)
    } else {
        do {
            number = prompt("Wrong entry. Pleaser chose a value between 16 and 64.");
        }
        while(number < 16 || number > 64);
        newGrid(number,number);
    }
}



function clear() { 
    const clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', () => {
            window.location.reload();
    })
    
}



startGrid()
clear()
