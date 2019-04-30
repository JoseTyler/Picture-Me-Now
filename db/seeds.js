const Category = require("../models/Category")
const Photographers = require('../models/Photographers')
const Photos = require('../models/Photos')


const photo1 = new Task({
        url: String,
    caption: In the city!
    
})
const photo2 = new Task({
        url: String,
    caption: String
    
})
const photo3 = new Task({
        url: String,
    caption: String
    
})
const photo4 = new Task({
        url: String,
    caption: String
    
})

const photographer1 = new Board({
    name: String,
    city: String,
    contact: Number,
    about: String,
    portfolio: [photo1, photo2, photo3]
})
const photographer2 = new Board({
    name: String,
    city: String,
    contact: Number,
    about: String,
    portfolio: [photo4]
})
const photographer3 = new Board({
    name: String,
    city: String,
    contact: Number,
    about: String,
    portfolio: []
})
const photographer4 = new Board({
    name: String,
    city: String,
    contact: Number,
    about: String,
    portfolio: []
})


const a = new Category({
    name: "Events",
    photographers: [photographer1, photographer2]
})
const b = new Category({
    name: "Portrait",
    photographers: [board3]
})
const c = new Category({
  name: "Pets",
  photographers: [board1, board2]
})
const d = new Category({
  name: "Models",
  photographers: [board3]
})


User.remove({})
    
    .then(() => Board.remove({}))
    .then(() => Task.remove({}))
    .then(() => Task.insertMany([task1, task2, task3, task4, task5, task6, task7, task8, task9]))
    .then(() => Board.insertMany([board1, board2, board3]))
    .then(() => stephaine.save())
    .then(() => ashley.save())


console.log("Data Repopulated")









