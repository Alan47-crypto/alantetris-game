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
  const TETROMINOS = {
    I: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    J: [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 2]
    ],
    L: [
      [0, 0, 0],
      [3, 3, 3],
      [3, 0, 0]
    ],
    O: [
      [4, 4],
      [4, 4]
    ],
    S: [
      [0, 0, 0],
      [0, 5, 5],
      [5, 5, 0]
    ],
    T: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    Z: [
      [0, 0, 0],
      [7, 7, 0],
      [0, 7, 7]
    ]
  };
  
  const BOARD_WIDTH = 10;
  const BOARD_HEIGHT = 20;
  const board = Array.from(Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill(0));
  function moveLeft() {
    // Implement Tetromino movement to the left
  }
  
  function moveRight() {
    // Implement Tetromino movement to the right
  }
  
  function moveDown() {
    // Implement Tetromino movement down
  }
  function rotate() {
    // Implement Tetromino rotation
  }
  function checkCollision() {
    // Implement collision detection
  }
  function update() {
    // Implement game loop
  }
          