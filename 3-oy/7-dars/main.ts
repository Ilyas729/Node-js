//objects
// let shokirjon:{name: string, surname: string, age: number} = {
//     name:'Shokirjon',
//     surname:'Shokirov',
//     age: 13
// }

// console.log(`O'quvchi ${shokirjon.name} ${shokirjon.surname} ${shokirjon.age} yoshda`);

//1 masala
// let book:{name: string, avtor: string, cost: number} = {
//     name: 'Solaris',
//     avtor: 'Stanislav Lem',
//     cost: 32
// }
// let book1:{name: string, avtor: string, cost: number} = {
//     name: 'War and Peace',
//     avtor: 'Lev Tolstoy',
//     cost: 45
// }
// let book2:{name: string, avtor: string, cost: number} = {
//     name: 'Past days',
//     avtor: 'Abdulla Qodiriy',
//     cost: 40
// }
// console.log(`Kitob: Name:${book.name} Avtor:${book.avtor} Cost:$${book.cost} turadi`);
// console.log(`Kitob: Name:${book1.name} Avtor:${book1.avtor} Cost:$${book1.cost} turadi`);
// console.log(`Kitob: Name:${book2.name} Avtor:${book2.avtor} Cost:$${book2.cost} turadi`);

//2 masala
// let numbers:{a: number, b: number, c: number} = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let result:{summ: number, substract: number} = {
//     summ: 0,
//     substract: 0
// }
// result.summ=numbers.a+numbers.b+numbers.c
// result.substract=numbers.a-numbers.b-numbers.c
// console.log(result);

//3 masala
// let employee:{name: string, surname: string, salary: number} = {
//     name: 'fneeffhifhf',
//     surname: 'weeegghouu',
//     salary: 300
// }
// let employee1:{name: string, surname: string, salary: number} = {
//     name: 'fneeffhifhf',
//     surname: 'weeegghouu',
//     salary: 400
// }
// let employee2:{name: string, surname: string, salary: number} = {
//     name: 'fneeffhifhf',
//     surname: 'weeegghouu',
//     salary: 500
// }
// let result: number =0;
// result=employee.salary+employee1.salary+employee2.salary
// console.log(result);

// //4 masala
// let programming:{languages:string[], isChallenging: boolean, isRewarding: boolean, difficulty: number,jokes: string} = {
//     languages:['JavaScript','Python','Ruby'],
//     isChallenging:true,
//     isRewarding:true,
//     difficulty: 8,
//     jokes:'jokes'
// }
// console.log(programming);

//5 masala
// let meva:{name: string, cost: number} = {
//     name: 'apple',
//     cost: 10
// }
// let meva1:{name: string, cost: number} = {
//     name: 'abricot',
//     cost: 9
// }
// let meva2:{name: string, cost: number} = {
//     name: 'melon',
//     cost: 7
// }
// let meva3:{name: string, cost: number} = {
//     name: 'watermelon',
//     cost: 6
// }
// let meva4:{name: string, cost: number} = {
//     name: 'strawberry',
//     cost: 4
// }
// let m: string[]=[]
// if(meva.cost<10)(
//     m.push(meva.name)
// )
// if(meva1.cost<10)(
//     m.push(meva1.name)
// )
// if(meva2.cost<10)(
//     m.push(meva2.name)
// )
// if(meva3.cost<10)(
//     m.push(meva3.name)
// )
// if(meva4.cost<10)(
//     m.push(meva4.name)
// )
// console.log(m);

//6 masala

let user:{email: string, password: string} = {
    email:'effehfofeohf@.com',
    password:'hfqwuifufgu'
}
let user1:{email: string, password: string} = {
    email:'gbjjhfhvbjbnruvvubh@.com',
    password:'fljbejfbuogbcujgcgbuj'
}
let user2:{email: string, password: string} = {
    email:'pieoihcvbcuubeuguf@.com',
    password:'kdnvbjvbuvunjvb'
}
let user3:{email: string, password: string} = {
    email:'cjjcbfbfjbffuj@.com',
    password:'sdvvkndsvdovvu'
}
let user4:{email: string, password: string} = {
    email:'ckvncnofohfuhf@.com',
    password:'kndjbjufuffuuff'
}

let m:{email: string, password: string}[]=[]
m.push(user,user1,user2,user3,user4)
console.log(m[2].email);
