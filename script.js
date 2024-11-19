const container = document.querySelector("#container")
const sizeBtn = document.querySelector("#sizeSelect")

for(x=0; x<256;x++) {
    var board = document.createElement('div');
    board.className = "grid";
    container.appendChild(board);
    }
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "green";
            setTimeout(() => {
                event.target.style.backgroundColor = "aqua";
            }, 1000);
        },
        false,
      )
    });

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
        const totalSize = 960; 
        const cellSize = totalSize / size;

        for (let i = 0; i< size * size; i++){
            const cell = document.createElement("div")
            cell.className = "grid";

            cell.style.width = `${cellSize}px` ;
            cell.style.height = `${cellSize}px` ;
            cell.style.backgroundColor = "aqua";
            container.appendChild(cell); 

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "green";
                setTimeout(() => {
                    cell.style.backgroundColor = "aqua";
                }, 1000);
            });
        }
    }
        
