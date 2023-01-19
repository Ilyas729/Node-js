//const names : string[] = ['Aisha','Asilbek', 'Dilshod', 'Umidbek', 'Ilyosbek', 'Sanjarbek']

const a: number[] = [1,2,3,4,5,6,7,8,9,20,11]
const b: number[] = [11,2,12,243,3,55,6,778,4,32,9]


// for( let i=0; i< names.length; i++){
//     let item: string = names[i]
//     if(item.length<=5){
//         console.log(item);
        
//     }
// }

// const item = names.find(item => item.length > 7 && item.length < 10)
// const index1 = names.indexOf('Aisha')
// const index2 = names.findIndex(item => item.length > 7 && item.length < 10)
// console.log(item);
// console.log(index1);
// console.log(index2);


// let newNames: string[]=[]

// for( let i=0; i<names.length; i++){
//     let item:  string = names[i]
//     if( item.length > 7 && item.length < 9)
//     newNames.push(item)
// }

// console.log(newNames);

// let newNames2: string[] = names.filter(item => item.length > 7 && item.length < 9)
// console.log(newNames2);
// const names : string[] = ['Aisha','Asilbek', 'Akmal', 'Dilshod', 'Umidbek', 'Ilyosbek', 'Sanjarbek']
// const item = names.findIndex(item => item[item.length-2] == 'a' || item[item.length-2] == 'k' || item[item.length-2] == 'c' )
// // const item1 = names.findIndex(item =>item[item.length-2] == 'k' )
// // const item2 = names.findIndex(item =>  item[item.length-2] == 'c' )
// console.log(item);
// // console.log(item1);
// // console.log(item2);

// const item = arr.find(item => item > 5 && item < 10)
// console.log(item);

// let newArr2: number[] = arr.filter(item => (item %2 ==0) )
// let newArr3: number[] = arr.filter(item => (item %2 ==1) )
//  console.log(newArr2);
//  console.log(newArr3);
 
//4 masala
// let newArr2: number[]=a.filter(item => a[item] )
// let newArr3: number[]=b.filter(item => b[item])
// console.log(newArr3);

//5 masala
let newArr2: number[] = a.filter(item => (item %2 ==0) )
let newArr3: number[] = b.filter(item => (item %2 ==1) )
let arr: number[] = new Array()
arr=newArr2.concat(newArr3)
//  console.log(newArr2);
//  console.log(newArr3);
console.log(arr);
