var direction = ['north', 'east', 'south', 'west'];

var car = document.querySelector('.car');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.code === 'ArrowUp') {
    console.log('north/up');
    car.className = 'car rotate-north';
  } else if (event.code === 'ArrowRight') {
    console.log('east/right');
    car.className = 'car rotate-right';
  } else if (event.code === 'ArrowDown') {
    console.log('south/down');
    car.className = 'car rotate-south';
  } else if (event.code === 'ArrowLeft') {
    console.log('west/left');
    car.className = 'car rotate-left';
  }
}
