const PI=Math.PI;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius* 2;
    }

    getCircumference() {
        return 2 * PI * this.radius;
    }

    getArea() {
        return PI * Math.pow(this.radius, 2);
    }
};

const CircleCalculator = new Circle(10);
console.log(CircleCalculator)
console.log(CircleCalculator.getArea());
console.log(CircleCalculator.getCircumference());
console.log(CircleCalculator.getDiameter());