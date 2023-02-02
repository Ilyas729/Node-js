// //functions
// function milliseconds(){

// }

// //function expression
// //anonimus
// // () => void

// const anonim: () => void = function (){

// }
// type Func = (a: number, b: number) => string
// //(a: number, b: number) => string
// const plus: Func = function (a:number, b:number){
//     return ""
// }

// //arrow function (lambda expression)
// const minus: Func = (a, b) => {

// }

//+ -> a,b => number
//- -> a,b => number
// / ->a,b => number
//* -> a,b => number

// type Op =(a:number, b:number) => number

// function plus(a:number, b:number): number {
//     let c: number = a + b
//     return c
// }

// const minus: Op = function (a,b){
//     let c: number = a-b
//     return c
// }

// const division: Op = (a,b) =>{
//     let c: number = a/b
//     return c
// }

// const multiply: Op = (a,b) => {
//     let c : number = a*b
//     return c
// }


// type ops = '+'|'-'|'/'|'*'
// const calculator = (a:number, b: number, c:ops) => {


// //const c: string = '+'

// let operation: Op = multiply

// switch(c){
//     case '+': operation = plus; break
//     case '-': operation = minus; break
//     case '/': operation = division; break
//     case '*': operation = multiply; break
// }
//   return operation(a,b)
// }
// // const result: number = operation(10,5)
// // console.log(result);
// let res: number = calculator(15,10,'-')

// console.log(res);


// const massiv: number[] = [1, 2, 3, 4, 5, 6]

// const n: number | undefined = massiv.find(v => v > 3 && v < 5)

// console.log(n)

// // -----------------------------------
// type Condition = (v: number) => boolean

// function filter(massiv: number[], condition: Condition): number | undefined {

//     for(let v of massiv) {
//         if (condition(v)) {
//             return v
//         }
//     }
// }

// let c: number | undefined = filter([3, 2, 4, 5, 1, 12], (v: number) => {
//     return v >= 1 && v <= 5 
// })

// let ccc: number[] = [3, 2, 4, 5, 1, 12]

// let c1 = filter(ccc, (v: number) => v % 2 == 0 && v > 3)

// ccc.filter(v => v % 2 == 0 && v > 3)

// console.log(c)
// console.log(c1)

// const massiv: number[] = [1, 2, 3, 4, 5, 6]

// const n: number | undefined = massiv.find(v => v > 3 && v < 5)

// console.log(n)

// -----------------------------------
type Condition = (v: number) => boolean

function map(massiv: number[], condition: Condition): number | undefined {

    for(let v of massiv) {
        if (condition(v)) {
            return v
        }
    }
}

let c: number | undefined = map([3, 2, 4, 5, 1, 12], (v: number) => {
    return v >= 1 && v <= 5 
})

let ccc: number[] = [3, 2, 4, 5, 1, 12]

let c1 = map(ccc, (v: number) => v % 2 == 0 && v > 3)

ccc.map(v => v % 2 == 0 && v > 3)

console.log(c)
console.log(c1)