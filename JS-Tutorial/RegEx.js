// console.log(/hi/.test("hi hello"));     // true

// console.log("hi hi hello".match(/hi/g)); // ["hi","hi"]              //test and match difference



// let phoneRegex = /^\d{10}$/;

// console.log(phoneRegex.test("9876543210"));  // true
// console.log(phoneRegex.test("98765"));       // false               //phone number example



      

// let gmailRegex = /^(?=.*[@$!%*?&])[a-zA-Z0-9._%+$!%*?&-]+@gmail\.com$/;


// let gmailRegex = /^(?=.*[@$!%*?&])[a-zA-Z0-9._%+-]+@gmail\.com$/;           //password and email example

// console.log(gmailRegex.test("bro=@gmail.com"));      // true
// console.log(gmailRegex.test("bro123@gmail.com"));   // true
// console.log(gmailRegex.test("bro@yahoo.com"));      // false





// let regex=/hello/;
// console.log(regex.test("hello"));

// let name="hello";
// let regex = new RegExp(name);
// console.log(regex.test("hello world"));


let text = "hello\nHello\nHELLO";


// let regex = /hello/i;
// console.log(text.match(regex));


// let regex = /hello/gi;
// console.log(text.match(regex));


let regex = /^hello/im;
console.log(text.match(regex));

