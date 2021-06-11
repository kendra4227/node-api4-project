const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"pizza-api/build")))

app.use("/api/",(_,res)=>{
    res.json({data:"The API is serving data!!!"})
})
app.post("/",(req,res)=>{
    res.send("POST request to the homepage")
    
})

app.listen(port,()=>{
    console.log(`Server is alive on port ${port}`)
})
app.use("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"pizza-api/build","index.html"))
})

console.log(__dirname)
console.log(__filename)