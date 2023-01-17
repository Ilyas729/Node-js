import PromptSync from "prompt-sync"
const prompt=PromptSync()

let n: number = 5
let m: string[]= new Array()
for( let i=0; i<=n; i++){
    const name = prompt('Введите имя:')
     m.push(name)

}
const op= prompt('введите операцию:')
if( op=='1'){
    const index:number= m.indexOf(prompt('Найти Имя:'))
    console.log(index );
}
if( op == '2'){
    m.push(prompt('Ism qoshish:'))
    console.log(m);
}
if( op == '3'){
    m.splice(+prompt('Ochirish:'))
    console.log(m);
    
}
