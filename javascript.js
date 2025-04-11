document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const button = document.getElementById('button');
  
    const containerSize = 464;  // Container size (fixed)
  
    createGrid(16);  // Default grid of 16x16 squares
  
    button.addEventListener('click', function () {
      let size = prompt("Enter number of squares per side (max 100):");
      size = parseInt(size);
  
      if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
      }
  
      clearGrid();
      createGrid(size);
    });
  
    function createGrid(squaresPerSide) {
      const squareSize = containerSize / squaresPerSide;  // Dynamically calculate square size
  
      for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
  
        // Dynamically set width and height for each square
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
  
        // Set hover effect to change background color
        square.addEventListener('mouseover', function () {
          square.style.backgroundColor = 'orange';
        });
  
        container.appendChild(square);
      }
    }
  
    function clearGrid() {
      container.innerHTML = '';  // Clear grid when a new grid is created
    }
  });
  
  
  



