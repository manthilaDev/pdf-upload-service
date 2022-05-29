require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 5000
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true})

const db = mongoose.connection

db.on('error',(error)=> console.log(error))
db.on('open',()=>console.log('Connected to Database'));

app.use(express.static('public'))
app.use(express.json())


const reportRouter = require('./routes/reports')


app.use('/reports',reportRouter)
// app.get('/',(req,res) =>{    
//     res.send('hello world')
// })



app.listen(port,() =>{
    console.log(`app is listening on port ${port}`)
})