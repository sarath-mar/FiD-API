const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')

app.use("/user", userRoute)
mongoose.connect(config.MONGOOSE_URL).then(() => {
    console.log("Database is connected sucessfuly")
    app.listen(config.PORT, () => {
        console.log(`server is running at port : ${config.PORT}`)
    })
}).catch(err => {
    console.log('some unexpected error occured ' + err)
})
