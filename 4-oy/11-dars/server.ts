import express, { Express, response } from "express";
import {Products, data}   from './data'
import { request } from "http";

const server: Express = express() 
server.use(express.json())
server.use(express.urlencoded())

server.get('/products', (request,response) => {
    response
     .status(200)
     .send(data.products)
})
server.get('/products/category/:cat', (request,response) => {
    const cat = data.products.filter( cat => cat.category == request.params.cat)
    response
    .status(200)
    .send(cat)
})

server.get('/products/brand/:br', (request, response) => {
    const br = data.products.filter(br => br.brand == request.params.br)

    response
    .status(200)
    .send(br)
})

server.get('/products/search', (request,response) => {
    const q = data.products.filter(q => q.title == request.query.q)
        
    response
    .status(200)
    .send(q)
})

server.get('/products/:id', (request,response) => {
   const product= data.products.find( product => product.id == +request.params.id)
           
    response
     .status(200)
     .send(product)
})

server.get('/products/:id/images', (request,response) => {
    
    const product= data.products.find(product => product.id==+request.params.id) 
       
    response
     .status(200)
     .send(product?.images)
})

server.listen( 8080, () => {
    console.log("Server is running on port 8080");
    
})

