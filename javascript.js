document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const button = document.getElementById('button');
  
    const containerSize = 960;
  
    createGrid(16); 
  
    
    button.addEventListener('click', function () {
      let size = prompt("Enter number of squares per side (max 100):");
      size = parseInt(size);
  
      if (size = NaN|| size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
      }
  
      clearGrid();
      createGrid(size);
    });
  
    function createGrid(squaresPerSide) {
      const squareSize = containerSize / squaresPerSide;
  
      for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
  
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
  
        square.addEventListener('mouseover', function () {
          square.style.backgroundColor = 'orange';
        });
  
        container.appendChild(square);
      }
    }
  
    function clearGrid() {
      container.innerHTML = '';
    }
  });
  
  



