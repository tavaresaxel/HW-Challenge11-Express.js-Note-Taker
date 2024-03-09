const express = require("express")
const path = require("path")
//process.env.PORT is for deployment to heroku can assigned a port number to identify the server
const PORT  = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use(express.urlencoded({extendedn:true}))
const fs = require("fs")



//API route

app.get("/api/notes", (req,res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) =>{
        const newData =JSON.parse(data)
        res.json(newData)
    })
})


app.post("/api/notes", (req,res) => {
    
})

//htmal route
app.get("*", (req,res) =>{
    res.sendFile(path.join(_dirname, './public/index.html'))
})



app.get("/notes",(req,res)=>{
    res.sendFile( path.join(__dirname,"./public/notes.html") )
  })


app.listen(PORT, ()=>{
    console.log("App is listening at PORT: http://localhost"+PORT)
})