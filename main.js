var dirObj = {direction: 'rotate-right'};

var car = document.querySelector('.car');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.code === 'ArrowUp') {
    dirObj.direction = 'rotate-north';
  } else if (event.code === 'ArrowRight') {
    dirObj.direction = 'rotate-east';
  } else if (event.code === 'ArrowDown') {
    dirObj.direction = 'rotate-south';
  } else if (event.code === 'ArrowLeft') {
    dirObj.direction = 'rotate-west';
  }
  car.className = 'car ' + dirObj.direction;
}
