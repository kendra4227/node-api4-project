const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use("/api/",(_,res)=>{
    res.json({data:"The API is serving data!!!"})
})
app.get("/",(req,res)=>{
    res.send("https://localhost:3000")
    
})

app.listen(port,()=>{
    console.log(`Server is alive on port ${port}`)
})
app.use("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"pizza-api/build","index.html"))
})

console.log(__dirname)
console.log(__filename)