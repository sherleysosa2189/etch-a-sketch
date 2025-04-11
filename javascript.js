document.addEventListener ('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    createGrid(16);

    function createGrid(size) {
        const totalSquares = size * size;
      
        for (let i = 0; i < totalSquares; i++) {
          const square = document.createElement('div');
          square.classList.add('square');
          container.appendChild(square);
        }
      }
})

console.log (createGrid(16));