const express = require('express')
const connectDB = require('./config/db')
const route = require('./route/files')
const path = require("path");


const app = express();
app.use(express.json())

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

connectDB()

//Route
app.use('/api/files',route)
app.use('/files',require('./route/show'))
app.use('/files/download',require('./route/download'))


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})