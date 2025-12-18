`use strict`;

const footballField = document.createElement('div');
const ball = document.createElement('div');

footballField.className = 'field';
ball.classList.add('ball');

footballField.append(ball);
document.body.append(footballField);

// footballField.addEventListener('click', ({ offsetY, offsetX }) => {
//   ball.style.top = `${offsetY - 10}px`;
//   ball.style.left = `${offsetX - 10}px`;
// });

const step = 10;

let x = ball.clientLeft;
let y = ball.clientTop;

document.body.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyA':
      x -= step;
      ball.style.left = `${x}px`;
      break;
    case 'KeyW':
      y -= step;
      ball.style.top = `${y}px`;
      break;
    case 'KeyS':
      y += step;
      ball.style.top = `${y}px`;
      break;
    case 'KeyD':
      x += step;
      ball.style.left = `${x}px`;
      break;
  }
});

// footballField.addEventListener('mousemove', ({ offsetY, offsetX }) => {
//   ball.style.top = `${offsetY - 10}px`;
//   ball.style.left = `${offsetX - 10}px`;
// });
