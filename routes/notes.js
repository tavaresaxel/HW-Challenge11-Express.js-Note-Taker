const router = require("express").Router()

const fs = require("fs")



router.get("/", (req,res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) =>{
        const newData =JSON.parse(data)
        res.json(newData)
    })
})


router.post("/api/notes", (req,res) => {
    
})

module.exports = router