const greet=(name)=>{

    console.log("Hello",name);

}
greet("Joe")
greet("Aaron")

const counties=(counties)=>{

 console.log(` One of the favourite county is , ${counties}`)

}
 counties("Mombasa")
 counties("Kisumu")
counties("Nairobi")

const add = (num1,num2)=>{
    let addition=num1+num2
    console.log("The addition is", addition);
    
}
add(10,15);
console.log(".........................................")

const subtract=(num1,num2)=>{
    subtraction=num2-num1
    console.log(`The subtraction is,${subtraction}`)
}
subtract(50,90);

console.log(".........................................")

//division

const division= (num5,num6)=>{
    let div=num5/num6
    console.log("The division is", div);
    
}
division(75,15);
console.log(".........................................")

//modulus

const modulus=(num5,num6)=>{
    let mod=num5%num6
    console.log("The modulus is", mod);
    
}
modulus(130,15);
console.log(".........................................")
//simple interest
const simpleinterest=(principal,
     rate ,
     time )=>{
     
    let interest =(principal*rate*time)/100
    console.log("simpleinterest",interest);
}
simpleinterest(40000,5,4)
console.log(".........................................")
//BMI
const BMI= (weight,height)=>{
     
    let bodymassindex = weight/(height**2)
    console.log("body mass index is",bodymassindex);
    
}
BMI(100,50);
console.log(".........................................")
//area of triangle
 

const area_triangle=(base,height)=>{
    let area=0.5*base*height
    console.log("The area is",area)}

area_triangle(10,12)
console.log(".........................................")


