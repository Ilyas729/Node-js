import express, {Express, response} from 'express'
import {v4} from 'uuid'
import { users, User } from './data'
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.post('/register', (request,response) => {

    const newUser: User = {
        id:v4(),
        email: request.body.email,
        password: request.body.password,
        name: request.body.name,
        surname: request.body.surname,
        age: request.body.age
    }
    const cheque = users.find(cheque => cheque.email == request.body.email)
    
    if(cheque == undefined){
        
        users.push(newUser)

        response
        .status(200)
        .send("User registered")
    }else {
         response
         .status(404)
         .send('User has already registered')
    }
    // response
    // .status(200)
    // .send('User has added')
})

server.post('/login', (request,response) => {
    const pochta = users.find( pochta => pochta.email == request.body.email,)
    
    if(pochta == undefined){
        response
        .status(404)
        .send('User not found')
    }else if(pochta.password != request.body.password){
       response
       .status(400)
       .send('Wrong password')
    }else{
        response
        .status(200)
        .send({
            name: pochta.name,
            email: pochta.email,
            surname: pochta.surname,
            age: pochta.age
        })
    }
})

server.get('/users', (request,response) => {
    response
    .status(200)
    .send(users)
})

server.listen(8080, () => {
    console.log('Server is running on port 8080');
    
})