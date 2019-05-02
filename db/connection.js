
const mongoose = require('mongoose')

// Connects to a local database
mongoose.connect("mongodb://localhost/Project-2", { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB")
})


// export your mongoose connection
module.exports = mongoose

// Deploy in Heroku
// Have to replace "mongodb://localhost/Project-2" with "process.env.MONGODB_URI" for it to deploy in Heroku.