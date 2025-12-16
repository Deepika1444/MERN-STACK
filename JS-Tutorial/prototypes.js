
//Example of Prototype


// function person(name)
// {
//     this.name=name;
// }                                   //create the person object
   

// person.prototype.greet=function()
// {
//     console.log("my name is " + this.name);
// }                                     //add the prototype method

// let person1=new person("Deepu");
// let person2=new person("kala");
// person1.greet();
// person2.greet();                       //create objects and use propotype methods





//Example of Prototype chain


// let animal=
// {
//     eats:true,
//     walk:function()
//     {
//         console.log("Animal is walking");
//     }
// };

// let dog=
// {
//     bark:function()
//     {
//         console.log("Dog is barking")
//     }
// };

// dog.__proto__ = animal;
// dog.bark();
// dog.walk();
// console.log(dog.eats);



//objects Methods in JS

// function sum(a,b)
// {
//     console.log(this.num + a + b);
// }
// let obj = 
// {
//     num:10
// };
// sum.call(obj,5,5);
// sum.apply(obj,[5,5]);
// let boundsum = sum.bind(obj,5,5);
// boundsum();