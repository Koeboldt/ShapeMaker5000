class Shape {
    constructor(color,text){
        this.color = color;
    }
    setColor(color){
        return color;
    }
}
class Square extends Shape{
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
      }
}
class Triangle extends Shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
}
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
class Svg{
    constructor(){
    this.textElement = "";
    this.shapeElement = "";
    }
    render() {
        const finishedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
        return finishedShape;
      }
    
      setText(message, color) {
        if (message.length > 3) {
          throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
      }
      setShape(shape) {
        this.shapeElement = shape.render();
      }
}
function generateShape(answers) {
  if (answers.shape === "triangle"){
     const newShape = new Triangle (answers.color);
     const newSvg = new Svg();
     newSvg.setText(answers.text, "white");
     newSvg.setShape(newShape);
     return newSvg.render();
  }
  else if( answers.shape === "circle"){
    const newShape = new Circle (answers.color);
    const newSvg = new Svg();
    newSvg.setText(answers.text, "white");
    newSvg.setShape(newShape);
    return newSvg.render();
    
  }
  else if( answers.shape === "square"){
    const newShape = new Square (answers.color);
    const newSvg = new Svg();
    newSvg.setText(answers.text, "white");
    newSvg.setShape(newShape);
    return newSvg.render();
    
  }
  else{
    console.log("not valid input")
  }

}

module.exports = generateShape;

/*const triangleTest = new Triangle ("blue");
console.log(triangleTest);
const newSvg = new Svg ();
newSvg.setText("abc", "white");
newSvg.setShape(triangleTest);
newSvg.render();
console.log(newSvg.render())*/