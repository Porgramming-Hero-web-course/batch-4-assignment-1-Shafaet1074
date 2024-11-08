// problem04 -  Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type circle = {
   
  shape: "circle"
  radius :number;
}

type rectangle ={

  shape:"rectangle"
  width: number;
  height: number;


}
let area=0

const calculateShapeArea = (obj : circle | rectangle) : number =>{


 if ( obj.shape === "circle"){

      area= 3.14*obj.radius*obj.radius;
     return area
 }

 else{
    area =obj.width * obj.height;
   return area;
 }

 
}







const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
 shape: "rectangle",
 width: 4,
 height: 6,
});
console.log(circleArea);
