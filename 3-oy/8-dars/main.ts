type Student = {
    name: string
    sclass: string
    rollno:number
    isFrozen: boolean
    scores:  number[]
}

const student:Student = {
    name: "David Rayy",
    sclass: "VI",
    isFrozen: false,
    rollno: 12,
    scores:[5,4,3,3,3]
} ;
//console.log(student);
type StudentValue = string | number | boolean | number[] 
let keys: string[] = Object.keys(student)
let values: StudentValue[] = Object.values(student)
let key: string = keys[2]
console.log(student[key]);

console.log(keys);
console.log(values);

