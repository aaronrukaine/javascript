const add = function(num1,num2){
    let addition=num1+num2
    console.log("The addition is", addition);
    
}
add(10,15);

//subtraction
const subtraction = function(num4,num3){
    let difference=num4-num3
    console.log("The subtraction is", difference);
    
}
subtraction(70,15);



//division

const division= function(num5,num6){
    let div=num5/num6
    console.log("The division is", div);
    
}
division(75,15);

//modulus

const modulus= function(num5,num6){
    let mod=num5%num6
    console.log("The modulus is", mod);
    
}
modulus(130,15);

//BMI
const BMI=function bmi(weight = 60,
             height = 175){
     
    let bodymassindex = weight/(height**2)
    console.log("body mass index is",bodymassindex);
    
}
BMI(100,50);

//simple interest
const simpleinterest=function si(principal=4000,
     rate = 6,
     time = 2){
     
    let interest =(principal*rate*time)/100
    console.log("simpleinterest",interest);
    
}
simpleinterest(40000,5,4)
//area of a square

const square = function(side ){
    let area=side*side
    console.log("The area of the square is", area);
    
}
square(4);
//area of a triangle
const tri = function(base,height ){
    let area=0.5*base*height
    console.log("The area is", area);
    
}
tri(10,15);
//area of a circle
const circlev = function(radius){
    let area=3.142*radius**2
    console.log("The area of the circle is", area);
    
}
circlev(10);




//perrimeter of a circle
const circle = function(diameter){
    let perimeter=3.142*diameter
    console.log("The perimeter is", perimeter);
    
}
circle(105);

