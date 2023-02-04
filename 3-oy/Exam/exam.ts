//1 masala
// type Students={
//     name: string,
//     age: number,
//     marks: number
// }


// const student:Students = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// // 
// type dataLinrary={
//     author: string,
//     title: string,
//     readingStatus: boolean
// }


// let library:dataLinrary[] = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }
// ];

// // 
// type Programming={
//     languages: string[],
//     isChallenging: boolean,
//     isRewarding: boolean,
//     difficulty: number,
//     jokes: string
// }

// let programming: Programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// // 2 masala
//  type Greet={
//     time:string,
//     name: string
//  }
// function greet(fn:Greet) {
//     console.log(`Good ${fn.time}, ${fn.name}`)
//   }
  
//   //
//   type Average={
//     x: number, 
//     y: number
//   }
//   function average(fn:Average) {
//     return (fn.x + fn.y) / 2
//   }
  
//   // 
//   type Lonnger={
//     s: string,
//     n: number
//   }
//   function isLongerThan(fn:Lonnger) {
//     return fn.s.length > n
//   }

  //3 masala
//   type Students={
//     name: string,
//     age: number,
//      marks:{
//       science: number,
//       math: number
//     }
// }


// // type marks ={
// //     science:number,
// //     math: number
// // }
// //   const student:Students = { 
// //     name: 'John', 
// //     age: 20,
// //     marks: {
// //         science: 70,
// //         math: 75
// //     }
// // }


// let student: Students[] = [
//     {
//        name:"Asilbek",
//         age:20,
//         marks:{
//             science:50,
//             math:55
//         }
//     },
//     {
//         name:"Adilbek",
//         age:21,
//         marks:{
//             science:55,
//             math:65
//         }  
//     },
//     {
//         name:"Dilshod",
//         age:22,
//         marks:{
//             science:67,
//             math:65
//         }  
//     },
//     {
//         name:"Anvarbek",
//         age:23,
//         marks:{
//             science:55,
//             math:65
//         }  
//     },
//     {
//         name:"Sanjarbek",
//         age:24,
//         marks:{
//             science:75,
//             math:65
//         }  
//     },
//     {
//         name:"Aisha",
//         age:25,
//         marks:{
//             science:85,
//             math:75
//         }  
//     },
//     {
//         name:"Ilyas",
//         age:26,
//         marks:{
//             science:55,
//             math:65
//         }  
//     },
//     {
//         name:"Umidbek",
//         age:27,
//         marks:{
//             science:90,
//             math:65
//         }  
//     },
//     {
//         name:"Davronbek",
//         age:28,
//         marks:{
//             science:45,
//             math:65
//         }  
//     },
//     {
//         name:"Diyorbek",
//         age:29,
//         marks:{
//             science:55,
//             math:65
//         }  
//     }
// ]

// console.log(student);

// 4 masala

type Students={
        name: string,
        age: number,
         marks:{
          science: number,
          math: number
        }
    }
    let student: Students[] = [
        {
           name:"Asilbek",
            age:20,
            marks:{
                science:50,
                math:55
            }
        },
        {
            name:"Adilbek",
            age:21,
            marks:{
                science:55,
                math:65
            }  
        },
        {
            name:"Dilshod",
            age:22,
            marks:{
                science:67,
                math:65
            }  
        },
        {
            name:"Anvarbek",
            age:23,
            marks:{
                science:55,
                math:65
            }  
        },
        {
            name:"Sanjarbek",
            age:24,
            marks:{
                science:75,
                math:65
            }  
        },
        {
            name:"Aisha",
            age:25,
            marks:{
                science:85,
                math:75
            }  
        },
        {
            name:"Ilyas",
            age:26,
            marks:{
                science:55,
                math:65
            }  
        },
        {
            name:"Umidbek",
            age:27,
            marks:{
                science:90,
                math:65
            }  
        },
        {
            name:"Davronbek",
            age:28,
            marks:{
                science:45,
                math:65
            }  
        },
        {
            name:"Diyorbek",
            age:29,
            marks:{
                science:55,
                math:65
            }  
        }
    ]

     
    
    // const maxAge = student.find(score => {
    //     let max = 0;
    //     for (let i=1; i < student.length; i++){
    //       if(score[i] > max){
    //         max = score[i];
    //       };
    //     };
    //      return max;
    //    });
    //    console.log(maxAge);
    // console.log(student);


    // 5 masala

    // type Students={
    //     name: string,
    //     age: number,
    //      marks:{
    //       science: number,
    //       math: number
    //     }
    // }
    // let student: Students[] = [
    //     {
    //        name:"Asilbek",
    //         age:20,
    //         marks:{
    //             science:50,
    //             math:55
    //         }
    //     },
    //     {
    //         name:"Adilbek",
    //         age:21,
    //         marks:{
    //             science:55,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Dilshod",
    //         age:22,
    //         marks:{
    //             science:67,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Anvarbek",
    //         age:23,
    //         marks:{
    //             science:55,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Sanjarbek",
    //         age:24,
    //         marks:{
    //             science:75,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Aisha",
    //         age:25,
    //         marks:{
    //             science:85,
    //             math:75
    //         }  
    //     },
    //     {
    //         name:"Ilyas",
    //         age:26,
    //         marks:{
    //             science:55,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Umidbek",
    //         age:27,
    //         marks:{
    //             science:90,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Davronbek",
    //         age:28,
    //         marks:{
    //             science:45,
    //             math:65
    //         }  
    //     },
    //     {
    //         name:"Diyorbek",
    //         age:29,
    //         marks:{
    //             science:55,
    //             math:65
    //         }  
    //     }
    // ]
    
    //     let s:number =0
        
    //     let m = student.forEach(n=> s+=n.marks.science)
    //     console.log(s);
        
       
        
        
    
   
    
