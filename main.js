var dirObj = { direction: 'rotate-right', locationX: 0, locationY: 0, carMoving: false};


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

  if (event.code === 'Space') {

    setInterval(moveCar, 16);
  }
}

function moveCar() {
  dirObj.locationX += 4;
  car.style.cssText = 'top: ' + dirObj.locationY + 'px; left: ' +  dirObj.locationX  + 'px;';
}
