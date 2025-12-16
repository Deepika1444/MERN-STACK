// function add(a,b)     //Function Declaration
// {
//     return a + b;
// }
// console.log(add(10,20));


// let add=function(a,b)    //Function expression
// {
//     return a+b;
// }
// console.log(add(5,20));




// let add=(a,b)=>      //Arrow Function
//     {
//         return a+b;
//     }

// console.log(add(2,4));



// setTimeout(function()     //Anonymous Function
// {
//     console.log("Hello")

// },1000);


// (function(a,b)     //Immediately Invoked Function expression
// {
//     console.log(a + b);

// })(10,20);




// function greet(name,callback)    //Callback Function
// {
//     console.log("hello" + name);
//     callback();
// }

// function SayBye()
// {
//     console.log("goodbye");
// }
// greet("alice", SayBye );



// function person(name,age)     //Constructor Function
// {
//     this.name=name;
//     this.age=age;
// }
// const person1= new person("alice", 23);
// console.log(person1.age);


function* numbers()
{
    yield 1;
    yield 2;
    yield 3;
  
}
for(let num of numbers())
{
    console.log(num);
}