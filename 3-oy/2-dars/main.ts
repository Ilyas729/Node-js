//1 masala
// let a: number[] = [1,2,4,6,7,8,9,0,15]
// let n = 5

// for (let i=1; i<=n;i++)
//     if(a[i]=1+i*2){
//         console.log(a[i]);
        
//     }


//2 masala
// let n: number =20
// let toqSonlar: Array<number> = new Array(n)

// let x=0
// for(let i=0; i<n; i++){
//     toqSonlar[i] = x
//     x+=2
// }
// console.log(toqSonlar);

//3 masala
// let n: number = 10
// let a: number = 3
// let d: number = 2
// let progression: Array<number> = new Array(n)

// for(let i=0; i<n; i++){

//     progression[i] = a
//     a+=d
// }
// console.log(progression);
 
//4 masala
// let n: number = 10
// let a: number = 3
// let d: number = 2
// let progression: Array<number> = new Array(n)

// for(let i=0; i<n; i++){

//     progression[i] = a
//     a*=d
// }
// console.log(progression);

//5 masala
let n: number = 10
let a: number = 3
//let d: number = 2
let fibbonachi: Array<number> = new Array(n)

for(let i=0; i<n; i++){

    fibbonachi[i] = a
    a = fibbonachi[i-2]+fibbonachi[i-1]
}
console.log(fibbonachi);
