const router = require("express").Router()
const notes = require("./notes")
const path = require("path")

router.use("/notes", notes)



module.exports = router