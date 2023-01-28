// function xonalar(n: number = 78){
//     let a: number = Math.floor(n/10)
//     let b: number = n % 10

//     console.log(a,b);
    
// }
// xonalar(78)

// xonalar(45)

// function length2(arr: number[]){
//  console.log(arr.length * 2);
 
// }

// length2([1,2,3,4,5,7,6,8,9])

// function names(arr: string[]){
//     let name = arr.filter(item => item.startsWith('a') || item.startsWith('A'))
//     console.log(name);
    
// }
// names(['aisha','asilbek','dilshod','Adidas'])


// type Person = { name: string, lastname: string}
// function join(o: Person){
//   console.log(`${o.name} ${o.lastname}`);
  
// }
// join({
//     name: 'Diyorbek',
//     lastname: 'Ravshonbekov'
// })

// function repeat(a : string, b: number){
//    for(let i=0; i<b; i++){
      
//       console.log(a);
      
//    }

// }
// repeat('Adidas', 5)

function longest(arr:number[], total:number){
    let s:number=0
  for(  let i=0; i<arr.length; i++){
    s+=arr[i]
    s
  }
  if(s>total){
    console.log(true);
    
  }else{
    console.log(false);
    
  }
}
longest([1,2,3,4,5,6],10)