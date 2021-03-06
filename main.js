var dirObj = { direction: 'rotate-east', locationX: 0, locationY: 0, carMoving: false, intervalID: null};


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
    dirObj.carMoving = !dirObj.carMoving;
    if (dirObj.carMoving) {
      dirObj.intervalID = setInterval(moveCar, 16);
    } else {
      clearInterval(dirObj.intervalID);
    }
  }
}

function moveCar() {
  if (dirObj.direction === 'rotate-north') {
    dirObj.locationY -= 4;
  } else if (dirObj.direction === 'rotate-east') {
    dirObj.locationX += 4;
  } else if (dirObj.direction === 'rotate-south') {
    dirObj.locationY += 4;
  } else if (dirObj.direction === 'rotate-west') {
    dirObj.locationX -= 4
  }
  car.style.cssText = 'top: ' + dirObj.locationY + 'px; left: ' +  dirObj.locationX  + 'px;';
}
