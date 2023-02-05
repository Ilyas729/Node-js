const prompt = require('prompt-sync')()
// 1 masala
// let a = 27
// let b = Math.floor(a/10)
// let c = Math.floor(a%10)
// if(b>c){
//     console.log(b,c);
// }else{
//    console.log(c,b);
// }

// 2 masala
// let a = 2435
// let b = Math.floor((a%1000)/100)
// console.log(b);

//3 masala
 let a = 5
 let b = 6 
 let c = 3
 if(a>b && a>c && b>c || a<b && a<c && b<c){
    console.log(b,'Растояние от точки b',(a-b));
 } 
 if(a>b && a>c && c>b || a<b && a<c && c<b){
   console.log(c,'Растояние от точки c',(a-c));
 }
if(a<b && a<c && c<b){
   console.log(c,'Растояние от точки c',(a-c));
}
if(a<b && a>c && c<b){
   console.log(c);
}
if(a<b && a>c && b<c){
   console.log(b);
}


//4 masala

// let a = -21
// if(a<0 && a%2 ==0){
//     console.log('отрицательное четное число',);
// }else if(a<0 && a%2 == -1){
//     console.log('отрицательное нечетное число');
// }else if (a>0 && a%2 ==0) {
//     console.log('положительное четное число');
// }else if(a>0 && a%2 ==1){
//     console.log('положительное нечетное число');
// }else if(a == 0){
//     console.log('нулевое число');
// };

//5 masala
// let a = 5
// let n = 5
// let m = 1
// for( let i=1; i<=n; i++){
//    m=m*a
//    
// }
// console.log(m);
// //6 masala
// let a = 5
// let n = 5
// let m = 1
// for( let i=1; i<=n; i++){
//    m=m*a
//    console.log(m);
// }

// 7 masala
// 1, 
// 2, 4, 8, 

// let k = 5
// let n = 5
// for( let i=1; i<=n; i++){
//     const x = +prompt('Son kiriting: ')
//     let m = 1
//      for( let j=1; j<=k; j++){
//           m=m*x
//           console.log(m);
//      }
// }