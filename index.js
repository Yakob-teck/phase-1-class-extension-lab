// Your code here
class Polygon {
    constructor(sides) {
      this._sides = sides;
    }
  
    get countSides() {
      return this._sides.length;
    }
  
    get perimeter() {
      return this._sides.reduce((acc, side) => acc + side, 0);
    }
  }
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      const [a, b, c] = this._sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  class Square extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      const [side1, side2, side3, side4] = this._sides;
      return side1 === side2 && side1 === side3 && side1 === side4;
    }
  
    get area() {
      const [side] = this._sides;
      return side * side;
    }
  }
      