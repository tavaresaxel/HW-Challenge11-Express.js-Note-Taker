const router = require("express").Router()
const fs = require("fs")
const path = require("path")



router.get("/", (req,res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        const newData = JSON.parse(data)
        res.json(newData)
    })
})


router.post("/", (req,res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        const newData =JSON.parse(data)
        newData.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(newData, null, "\t"),(err) =>{
            res.json(newData)
        })
        
    })
})

module.exports = router