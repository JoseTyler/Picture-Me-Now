
// const mongoose = require('mongoose')

// // Connects to a local database
// mongoose.connect("mongodb://localhost/Project-2", { useNewUrlParser: true }).then(() => {
//     console.log("Connected to MongoDB")
// })


// // export your mongoose connection
// module.exports = mongoose

// // Deploy in Heroku
// // Have to replace "mongodb://localhost/Project-2" with "process.env.MONGODB_URI" for it to deploy in Heroku.

const mongoose = require("mongoose");

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/Project-2", { useNewUrlParser: true});
}
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
mongoose.connection.once("open", function() {
  console.log("Mongoose has connected to MongoDB!");
});

module.exports = mongoose;