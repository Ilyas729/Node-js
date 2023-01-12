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
//let n: number =10
// let m: number[] = new Array(12)
// m[0] = 1;
// m[1] = 1;
// let a: number = 0
// for (let i = 0; i < m.length; i++) {
//     if (i == 0) {
//         m[i] = 1;
//         a = m[i];
//     }
//     if (i == 1) {
//         m[i] = 1;
//         a = m[i];
//     }
//     if (i >= 2) {
//         m[i] = m[i - 1] + m[i - 2];
//         a = m[i];
//     }
//     console.log(a);
// }

//ver 2

// let n: number = 10
// let fibbonachi: Array<number>=new Array(n)
// fibbonachi[0]=1
// fibbonachi[1]=1

// for( let i=2; i<n; i++){
//     fibbonachi[i] = fibbonachi[i-1] + fibbonachi[i-2]
// }
// console.log(fibbonachi);

// 6  masala
// let n: number = 10
// let A: number = 3
// let B: number =2
// let a: number[]=[n]
// a[0]=A
// a[1]=B
// a[2]=a[0]+a[1]
// for( let i=3; i<n; i++){
//     a[i]=a[i-1]*2
// }
// console.log(a);


// let n: number = 10
// let A: number = 3
// let B: number = 2
// let maxFibbonaci: number[] = new Array()
// maxFibbonaci.push(A)
// maxFibbonaci.push(B)
// maxFibbonaci.push(A+B)

// for( let i=3; i<n; i++){
//     maxFibbonaci.push(maxFibbonaci[i-1]*2)
// }
// console.log(maxFibbonaci);

let random