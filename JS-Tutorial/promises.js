// static methods in promises  ( 4 types)



//1] promise.all() -> all successfull promises then it will give the output

// let p1= Promise.resolve("A");                          
// let p2= Promise.resolve("B");
// let p3= Promise.resolve("C");

// Promise.all([p1,p2,p3])
// .then(result =>
//     {
//         console.log(result);
//     });



//2] promise.allSettled() -> all pass and any one or more failed promises it will work 


// let p1= Promise.resolve("A");                          
// let p2= Promise.reject("B");
// let p3= Promise.resolve("C");

// Promise.allSettled([p1,p2,p3])
// .then(result =>
//     {
//         console.log(result);
//     });




//3] promise.race() -> in this race its depends on first come first serve manner it doest matter success or fail


// let p1= new Promise((res,rej) =>setTimeout( () => rej("fast"),1000));
// let p2= new Promise(res =>setTimeout( () => res("slow"),2000));

// Promise.race([p1,p2])
// .then(result =>
// {
//     console.log("resolved",result);
// })

// .catch(error =>
// {
//     console.log("rejected",error);
// });




// /4] promise.any() -> in this any its is only care about first success, failure doesnt matter unless everything fail it will go to catch block



// let p1= Promise.reject("A");                          
// let p2= Promise.reject("B");
// let p3= Promise.resolve("C");

// Promise.any([p1,p2,p3])
// .then(result =>
//     {
//         console.log(result);
//     })

// .catch(error =>
// {
//     console.log("all failed");
// });





// { example of promise and async and await 


// // function fetchData()
// // {
// //     return new Promise((resolve) =>
// //     {
// //         setTimeout(() => resolve("promise resolved"), 2000);
// //     });
// // }
// // fetchData().then(result =>
// // {
// //     console.log(result);
// // }
// // );





// // function fetchData()
// // {
// //     return new Promise((resolve) =>
// //     {
// //         setTimeout(() => resolve("promise resolved"), 2000);
// //     });
// // }

// // async function getData() 
// // {
// //    const result=await fetchData();
// //    console.log(result)    ;
// // }

// // getData();


// }




// promises example ( all types)


// let p1= new Promise((res,rej) =>setTimeout( () => rej("idli"),1000));
// let p2= new Promise(res =>setTimeout( () => res("Dose"),2000));
// let p3= new Promise(res =>setTimeout( () => res("poori"),3000));

// Promise.any([p1,p2,p3])
// .then(result =>
// {
//     console.log("resolved",result);
// })

// .catch(error =>
// {
//     console.log("rejected",error);
// }
// );





// async and await keyword example

function orderFood() {
  return new Promise(res => setTimeout(() => res("Food ordered"), 4000));
}

function prepareFood() {
  return new Promise(res => setTimeout(() => res("Food prepared"), 2000));
}

function deliverFood() {
  return new Promise(res => setTimeout(() => res("Food delivered"), 3000));
}

async function food() {
  let a = await orderFood();
  console.log(a);

  let b = await prepareFood();
  console.log(b);

  let c = await deliverFood();
  console.log(c);
}

food();






// example of macrotask

// console.log("start");
// setTimeout( () => console.log("timeout"), 1000);
// setInterval( () => console.log("interval"), 2000);
// setImmediate(() => console.log("immediate"));
// console.log("end");





// console.log("Start");                  //Event loop Example

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Inside Promise.then");
// });

// console.log("End");
