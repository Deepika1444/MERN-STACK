// let arr=[1,2,3,4,5,6,2,1,4,5];
// function removeDuplicate()
// {
//     for(let i=0;i>=0;i++)            
// }
// console.log(removeDuplicate());



// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
// }, 0);

// console.log("3");



// let arr=[1,2,3,4,5];
// arr.splice(3,1);
// console.log(arr);


// function reversed(arr)
// {
//     let array=["hello"];
//     for(let i=array.length-1;i>=0;i--)
//     {
//         array += array[i];
//     }

// return array;
// }

// console.log(reversed());



// console.log("start");
// setTimeout(()=>
// {
//     console.log("hello"),1000
// });

// Promise.resolve().then(()  => console.log("microtask") );

// console.log("end");



// let p1= new Promise ( (res,rej) => setTimeout(  res ("idli"),1000));
// let p2= new Promise ( (res,rej) => setTimeout( rej ("dose"),5000));
// let p3= new Promise ( (res,rej) => setTimeout( res ("poori"),4000));

// Promise.allSettled([p1,p2,p3])

// .then(result => 
// {
//     console.log(result);
// })

// .catch(error =>
// {
//     console.log(error);
// }
// );




// function orderFood()
// {
//     return new Promise((res,rej) => setTimeout (() => res("orderfood"), 6000));
// }

// function deliverFood()
// {
//     return new Promise((res,rej) => setTimeout (()=> res("deliverfood"), 4000));
// }

// function prepareFood()
// {
//     return new Promise((res,rej) => setTimeout (()=> res("prepareFood"), 2000));
// }


// async function food()
// {
//    let a = await orderFood();
//    console.log(a);

//     let b = await deliverFood();
//    console.log(b);

//     let c = await prepareFood();
//    console.log(c);
// }

// food();



function outer()
{
    let count=0;

    function inner()
    {
        count++
        return count;
    }
    return inner();
}

let a=outer();
console.log(a);