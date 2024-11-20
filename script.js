const container = document.querySelector("#container")
const sizeBtn = document.querySelector("#sizeSelect")


function sizePrompt (){
    var sizePrompt = parseInt(window.prompt("How many square per side ? Select between 1 and 100"), 10)
    if ( /^[0-9.,]+$/.test(sizePrompt) && sizePrompt <= 100) {
        console.log('pass');
        clear();
            
        createGrid(sizePrompt);
        } else {
            alert("You need to enter a number between 1 and 100 !");
        }
        
    };

sizeBtn.addEventListener('click', () => {
    sizePrompt();
})


function clear() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(size) {
    const totalSize = 480; 
    const cellSize = totalSize / size;

    for (let i = 0; i< size * size; i++){
        const cell = document.createElement("div")
        cell.className = "grid";

        cell.style.width = `${cellSize}px` ;
        cell.style.height = `${cellSize}px` ;
        cell.style.backgroundColor = "white";
        container.appendChild(cell); 

        cell.addEventListener('mouseover', () => {
                 const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256) 
                cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;;
            setTimeout(() => {
                cell.style.backgroundColor = "white";
            }, 1000);
        });
    }
}

createGrid(40);
