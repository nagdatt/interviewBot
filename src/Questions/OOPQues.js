 export const arr=[
    " What is OOPS? ...",
 "    What are the advantages of OOPS concepts? ...",
 "    What is the difference between Procedural programming and OOPS? ...",
     "What are the core concepts of OOPS? ...",
     "What is Abstraction? ...",
     "What is Encapsulation? ...",
     "What is the difference between Abstraction and Encapsulation? ...",
     "What is Polymorphism?",
     "What are main features of OOP?",
     "What is Polymorphism? How is it supported by C++?",
     "What is Inheritance? What is the purpose?",
     "What is the diamond problem in inheritance?",
     "Why Java does not support multiple inheritance?",
     "What is Static Binding and Dynamic Binding?",
     "What is the meaning of “IS-A” and “HAS-A” relationship?    ",
     "What is Association?    ",
     "What is Aggregation?    ",
     "What is Composition?    ",
     "What is Dependency?    ",
     "What is the difference between Association and Dependency?    ",
     "What is a Class?    ",
     "What is an Object?    ",
     "Define a constructor?    ",
     "Define Destructor?    ",
     "What is Inline function?    ",
     "What is operator overloading?    ",
     "What is an abstract class?    ",
     "What is an interface?    ",
     "What is exception handling?    ",
     "What is dynamic or run time polymorphism?    ",
     "What is static and dynamic binding?    ",
     "What is a copy constructor?    ",
     "Difference between class and an object?    ",
     "What is the difference between structure and a class?    ",
     
     
 ]
 

 let check=new Map()
 const getOOPQ=()=>{
    console.log(check)
     var item = "Questions are finished";
     if(check.size==0){
         item="Tell me about your self"
         
         check.set(item,1)
         return item
     }
     if(check.size==1){
         item="Have you done any projects? If yes, please elaborate any one out of it."
         
         check.set(item,1)
         return item
     }
     while(true){
         if(check.size==arr.length+2) {
             item="Questions are finished";
             break;
         }
         item=arr[Math.floor(Math.random()*arr.length)]
         if(check.has(item)){
             continue;
         }
         else{
             check.set(item,1)
             break;
         }
     }
     //arr[Math.floor(Math.random()*arr.length)]
     return item;
 }
 
 
export default getOOPQ;
