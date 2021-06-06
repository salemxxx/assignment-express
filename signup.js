const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs= require('fs')
const app = express()
const bodyParserM = bodyParser.urlencoded({extended:true})
let data  = ''

app.get("/",( req, res, next) =>{
    res.sendFile(path.join(__dirname,".", "index.html"))
})

app.get("/signup.html",( req, res, next) =>{
    res.sendFile(path.join(__dirname,".", "signup.html"))
})

app.post("/form",bodyParserM,(req, res)=>{
    
    data = JSON.stringify(req.body, null, 2) 
    fs.writeFile('data.json', data, (err)=>{
        if (err) {
            throw err
        }
        console.log('JSON data is seved.')
     })
})
app.listen(5000,()=>{
    console.log('Listening to port 5000');
})