
const mongoose = require('mongoose')

// Connects to a local database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})


// export your mongoose connection
module.exports = mongoose