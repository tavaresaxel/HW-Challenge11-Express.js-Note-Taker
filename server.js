const express = require("express")
const path = require("path")
//process.env.PORT is for deployment to heroku can assigned a port number to identify the server
const PORT  = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use(express.urlencoded({extendedn:true}))



//API route





//htmal route
app.get("*" , (req,res) =>{

})




app.listen(PORT, ()=>{
    console.log("App is listening at PORT: http://localhost:3001/"+PORT)
})