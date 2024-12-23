const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

const conn = ()=>{
    mongoose.connect(DB_URL , {
        dbName: "beautySaloon",

    }).then(()=>{
        console.log('DB Connected!')
    }).catch(err=>{
        console.log(`DB Error : ${err}`)
    })
}

module.exports = conn