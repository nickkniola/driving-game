var direction = ['north', 'east', 'south', 'west'];

document.addEventListener('keydown', changeDirection);

function changeDirection() {
  if (event.code === 'ArrowUp') {
    console.log('up');
  } else if (event.code === 'ArrowRight') {
    console.log('right');
  } else if (event.code === 'ArrowDown') {
    console.log('down');
  } else if (event.code === 'ArrowLeft') {
    console.log('left');
  }
}
