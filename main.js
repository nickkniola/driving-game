var direction = {north: false, east: true, south: false, west: false};

var car = document.querySelector('.car');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.code === 'ArrowUp') {
    direction.north = true;
    direction.east = false;
    direction.south = false;
    direction.west = false;
    car.className = 'car rotate-north';
  } else if (event.code === 'ArrowRight') {
    direction.north = false;
    direction.east = true;
    direction.south = false;
    direction.west = false;
    car.className = 'car rotate-right';
  } else if (event.code === 'ArrowDown') {
    direction.north = false;
    direction.east = false;
    direction.south = true;
    direction.west = false;
    car.className = 'car rotate-south';
  } else if (event.code === 'ArrowLeft') {
    direction.north = false;
    direction.east = false;
    direction.south = false;
    direction.west = true;
    car.className = 'car rotate-left';
  }
}
