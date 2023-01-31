
// let s:number = 0

// function calc (a:number, b:number){
//     let s:number = a+b
//     console.log(s);
    
// }


// console.log(s);

// calc(3,5)
// console.log(s);

// let x: number =calc(3,5)

// let y: number =calc(33,5)

// console.log(x);
// console.log(y);

// function calc(a:number, b:number){
//     let s=a+b
//     console.log(s);

//     if(s>37){
//         return s + 10
//     }
//     return s
    
// }
// function sumEvens(m: number[]){
// let s:number =0

// let evens: number[] = m.filter(n=>n%2==1)
// console.log(evens);

// s = evens.reduce((accumulator,n) => accumulator+n, 0)
// console.log(s);


// return s
// }

// sumEvens([1,2,3,4,5,6,7,8,9,10])


// let r: number = 3
// let h: number = 5
// let v: number  = Math.PI*(r**2)*h
// console.log(v);

// type Cylinder={
//     r: number
//     h: number
// }

// let cylinder: Cylinder ={
//     r: 5,
//     h: 25
// }

// let cylinder2:Cylinder ={
//     r: 10,
//     h:30
// }

// function volume(cylinder: Cylinder, extra: number){
//     console.log(cylinder);
//     let v: number = Math.PI * (cylinder.r ** 2) * cylinder.h
    
//     return v + extra
// }

// let v1: number = volume(cylinder, 10)
// let v2: number = volume(cylinder2, 25)

// console.log(v1);
// console.log(v2);
// type Square={
//     a: number
//     b: number
// }

// function perimetr(s:Square){
//     let P: number =0
//     //let S: number =0
//     P =2*(s.a+s.b)
//     //S = a*b
//     //console.log(P);
//     return P
//     //return S
// }
// function square(s:Square){
//     //let P: number =0
//     let S: number =0
//     //P =2*(a+b)
//     S = s.a*s.b
//     //console.log(P);
//     //return P
//     return S
// }

// let x:number = perimetr( { a: 5, b: 11 } )
// let y:number = square({ a: 5, b: 11 })
// console.log(x);
// console.log(y);

