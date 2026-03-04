//create an arrow function that accepts a number n and prints all from 1 to n


 const number=(n)=>{

      for (n==n;n<=100;n+=2) {
         console.log("the even numbers are",n)

        
      }     
        
      
       
    
 }
number(2)

//creat an arrow function that accepts all odd numbers from 1 to n 


 const num=(n)=>{
    
    while (n>=1 ){
        console.log("the odd numbers are" ,n)
        n=n-2

            }  
       
    
 }
 num(55)

 //create an arrow function that prints numbers from n to 1

const numb=(n)=>{
    
    for(n==n;n>=1;n=n-1) {
       console.log("number=",n)

        
     }     
     
       
    
}
 numb(55)

 //write an arrow function square that makes a number as a parameter and logs its square

const square=(n)=>{

    let num=n*n

    
  console.log("square=",num)
     
     
       
     } 
     square(55)

     // print numbers from 1 to n and
     // if divisible by 3 .."fizz"
     //if divisible by 5 ..."Buzz"
     //if divisible by both

     const num1=(n)=>{

     for (n==n;n>=0;n--) {
              
     if (n%3==0 && n%5==0){
             console.log(n,"fizzBuzz")
    
         }
            

     else if(n%3==0){
         console.log(n,"fizz")

     }

     else if(n%5==0){
         console.log(n,"buzz")

     }

    }
      
       
    
}
num1(15)
num1(9)
num1(10)



