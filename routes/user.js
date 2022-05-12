const express = require("express")
const router = express.Router()

router.get("/test", (req, res) => {
    console.log('second test')
    res.send("second test")
})
module.exports = router