

// ! Promise שאלות מהקובץ

// ! 1 //

// let promise = new Promise ((resolve,reject)=>{
//     if(true){
//         resolve ("yes")
//     }else{
//         reject ("no") 
//     }
// });

// ! 1 //



// ! 2 //

// let promise = new Promise ((resolve,reject)=>{
//     if(true){
//         resolve ("yes")
//     }else{
//         reject ("no") 
//     }
// });

// promise
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

// ! 2 //


// ! 3 //

// function PromiseFun(params) {
//     let promise = new Promise ((resolve,reject)=>{
//          if(true){
//              resolve ("yes")
//          }else{
//              reject ("no") 
//          }
//      });
//  }

// ! 3 //


// ! 4 //

// function PromiseFun(params) {
//     return new Promise ((resolve,reject)=>{
//          if(true){
//              resolve ("yes")
//          }else{
//              reject ("no") 
//          }
//      });
//  }


// ! 4 //






// ! 5 //

// function PromiseFun(params) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve("yes")
//         } else {
//             reject("no")
//         }
//     });
// }

// PromiseFun(true)
//     .then((res) => { console.log(res); })
//     .catch((rej) => { console.log(rej); })

// ! 5 //


// ! ---------


// ! 1 , 2 //

// function promiseFum(params) {
//     return new Promise((resolve, reject) => {


//     });

// }
// promiseFum()
//     .then(() => { })
//     .catch(() => { })

// let randomNum = Math.floor(Math.random() * 11);

// ! 1 , 2 //


// ! 3 ,4 //

// function promiseFum(Num) {
//     return new Promise((resolve, reject) => {

//         if (Num < 5) {
//             resolve(Num)
//         } else {
//             reject("you lost try again")
//         }

//     });

// }
// promiseFum(randomNum)
//     .then((rec) => { console.log(rec); })
//     .catch((rej) => { console.log(rej); })

// ! 3 ,4 //


// ! 5 //

// let randomNum = Math.floor(Math.random() * 11);

// function promiseFum(Num) {
//     return new Promise((resolve, reject) => {

//         if (Num < 5) {
//             resolve(Num)
//         } else {
//             reject("you lost try again")
//         }

//     });

// }
// promiseFum(randomNum)
//     .then((rec) => { document.body.innerHTML += `<div> ${rec} </div>` })
//     .catch((rej) => { document.body.innerHTML += `<div> ${rej} </div>` })

// ! 5 //


// ! 6 //



// ! 6 //


// ! 7,8,9,10 //

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let some=document.getElementById("some")

function promiseFum(Num) {

     let randomNum = Math.floor(Math.random() * 11);
     console.log(randomNum);

    return new Promise((resolve, reject) => {
        console.log(Num);

        if (Num == randomNum ) {
            resolve("nice work, do it again")
        } else {
            reject("you lost try again")
        }

    });

}
let counter=0

btn.onclick = () => {



    promiseFum(input.value)
        .then((rec) => { some.innerHTML += `<div> ${rec} </div>` })
        .catch((rej) => { some.innerHTML += `<div> ${rej} </div>` })
        .finally(()=>{some.innerHTML += `<div> counter: ${counter++} </div>` })

}



// ! 7,8,9,10 //




















// ! 1 //


// ! 1 //
