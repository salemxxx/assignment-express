const express = require('express')
const path = require('path')
const fs= require('fs')
const app = express()
const parser = express.urlencoded({extended:true})
let data  = ''

app.get("/",( req, res, next) =>{
    res.sendFile(path.join(__dirname,".", "index.html"))
})

app.use(express.static(path.join(__dirname +'/')))

app.get('/signup.css', (res, req, next)=>{
res.sendFile(path.join(__dirname, '/', '.','static','signup.css'))
})

app.get('/index.css', (res, req, next)=>{
    res.sendFile(path.join(__dirname, '/', '.','static','index.css'))
    })

app.get("/signup.html",( req, res, next) =>{
    res.sendFile(path.join(__dirname,".", "signup.html"))
})

app.post("/form",parser,(req, res)=>{
    
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