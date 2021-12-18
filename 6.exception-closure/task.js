// 1-я Задача.
function parseCount(parseNum) {   
    if (isNaN(Number.parseInt(parseNum, 10))) {
        throw new Error("Невалидное значение");       
    }
     return Number.parseInt(parseNum, 10); 
}

function validateCount(parseNumValue) {
    try {
        return parseCount(parseNumValue) 
    }
    catch(err) {
        return err
    }
}
// 2-я Задача.
class Triangle {
    constructor(a, b, c){
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a_Side = a;
        this.b_Side = b;
        this.c_Side = c;
    }
    getPerimeter (){
        return this.a_Side + this.b_Side + this.c_Side;
    }
    getArea () {
        let halfPerimeter = 0.5 * this.getPerimeter();
        return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.a_Side) * (halfPerimeter - this.b_Side) * (halfPerimeter - this.c_Side)).toFixed(3));
    }
}

function getTriangle(a_Side, b_Side, c_Side) {
    try {
        return new Triangle (a_Side, b_Side, c_Side) 
    }
    catch(err) {
        let makeTriangle = new Object();
        makeTriangle.getPerimeter = function() {
            return "Ошибка! Треугольник не существует";
        }
        makeTriangle.getArea = function() {
            return "Ошибка! Треугольник не существует";
        }
        return makeTriangle;
    }
}
