var direction = ['north', 'east', 'south', 'west'];

var car = document.querySelector('.car');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.code === 'ArrowUp') {
    car.className = 'car rotate-north';
  } else if (event.code === 'ArrowRight') {
    car.className = 'car rotate-right';
  } else if (event.code === 'ArrowDown') {
    car.className = 'car rotate-south';
  } else if (event.code === 'ArrowLeft') {
    car.className = 'car rotate-left';
  }
}
