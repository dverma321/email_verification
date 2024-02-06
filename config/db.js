require('dotenv').config()

const mongoose  = require('mongoose')

const DB = process.env.Mongoose_Url

mongoose.connect(DB).then(() => {
    console.log("MongoDB DataBase Connected Successfully")
}) .catch((err) => {
    console.log("MongoDB DataBase Error :" , err)
})

