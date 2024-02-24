document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('tetris');
    const context = canvas.getContext('2d');
    const scale = 20;
    
    context.scale(scale, scale);
    
    const matrix = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ];
    
    function drawMatrix(matrix, offset) {
      matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            context.fillStyle = 'cyan';
            context.fillRect(x + offset.x,
                             y + offset.y,
                             1, 1);
          }
        });
      });
    }
    
    function draw() {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      drawMatrix(matrix, {x: 0, y: 0});
    }
    
    draw();
  });
  