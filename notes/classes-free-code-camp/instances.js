class Rectangle {
  // constructor method runs once during life of the object
  constructor(_height, _width, _color) {
    this.height = _height;
    this.width = _width;
    this.color = _color;
  }

  // instance methods
  getArea() {
    return this.height * this.width;
  }
  printDecription() {
    return `I am a rectangle of ${this.height} x ${this.width} colored ${this.color}`;
  }
}

let myRect1 = new Rectangle(100, 200, 'red');
let myRect2 = new Rectangle(200, 400, 'green');
console.log(myRect1, myRect2);
let rect1Area = myRect1.getArea();
console.log(rect1Area);

// DOM STUFF
let targetGeneratedElement = document.querySelector('.generated');
let targetAttachedElement = document.querySelector('.generated');

myRect2.domCode = `<div
style="height: ${myRect2.height}px;
width: ${myRect2.width}px;
background-color: ${myRect2.color};">
  <p>${myRect2.printDecription()}</p>
</div>`;
targetGeneratedElement.innerHTML = myRect2.domCode;

function createDiv(aRectangle) {
  let div = document.createElement('div');
  div.style.height = aRectangle.height + 'px';
  div.style.width = aRectangle.width + 'px';
  div.style.backgroundColor = aRectangle.color;
  div.innerText = `${aRectangle.printDecription()}`;
  return div;
}

let newDiv = createDiv(myRect1);
targetAttachedElement.appendChild(newDiv);
