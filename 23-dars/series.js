const prompt = require('prompt-sync')()

//1.
// let summ = 0

// for( let i=0; i<10; i++){
// const x = +prompt('Son kiriting: ')
// summ = summ+x
// }

// console.log(summ);

//3 masala
// let summ = 0

// for( let i=0; i<10; i++){
// const x = +prompt('Son kiriting: ')
// summ = (summ+x);
// }

// console.log(summ / 10);

//4 masala
// let n = 10
// let summ = 0
// let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// summ = (summ+x);
// p=x*p
// }

// console.log(summ, p);

//5 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//7 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// summ = (summ+Math.round(x));
// //p=(summ+x)*n
// }

// console.log(summ);

// 8 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x%2 ==0){
//     console.log(x);
//     summ+=1
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//9 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x%2 ==1){
//     console.log(x);
//     summ+=1
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//10 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x>0){
//     console.log(true);
//     // summ+=1
// }
// else{
//     console.log(false);

// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//11 masala
// let n = 10
// let k =15
// //let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x<k){
//     console.log(true);
//     //summ+=1
// }else{
//     console.log(false);
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// // console.log(summ);

//12masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x!=0){
//     console.log(x);
//     summ+=1
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//13 masala
// let n = 10
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x%2 ==0 && x!=0 && x>0){
//     console.log(x);
//     summ=summ+x
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

// console.log(summ);

//14 masala
// let n = 10
// let k =15
// let summ = 0
// //let p = 1
// for( let i=0; i<n; i++){
// const x = +prompt('Son kiriting: ')
// if(x<k && x!=0){
//     console.log(x);
//     summ+=1
// }
// // summ = (summ+(Math.floor(x))/10);
// //p=(summ+x)*n
// }

//  console.log(summ);

//15 masala
// let n = 5
// let k = 5
// let p
// for (let i = 1; i <= n; i++) {
//     const x = +prompt(`${i}-sonni kiriting: `)
//     if (x > k) {
//         p = x;
//         break;
//     }
//     console.log(p);
// }

// // console.log(summ);

//15 masala v1
// let k = 5
// let sum = 0
// let n =5
// for (let i = 1; i < k; i++) {
//     const n = +prompt(`${i}-sonni kiriting: `)
//     if (n > k) {
//         console.log(n); break;
//     }else console.log(0);
// }
