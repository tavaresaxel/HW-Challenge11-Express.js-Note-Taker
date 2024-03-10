const express = require("express")
const path = require("path")
//process.env.PORT is for deployment to heroku can assigned a port number to identify the server
const PORT  = process.env.PORT || 3001

const app = express()
const route = require("./routes/index")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use("/api", route)









app.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html") )
})


app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})



app.listen(PORT, ()=>{
    console.log("App is listening at PORT: http://localhost:"+PORT)
})