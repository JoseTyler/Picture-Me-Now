const Category = require("../models/Category")
const Photographers = require('../models/Photographers')
const Photos = require('../models/Photos')


const photo1 = new Photos({
        url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"   
})
const photo2 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"    
})
const photo3 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"      
})
const photo4 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"     
})
const photo5 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"     
})
const photo6 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"     
})
const photo7 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"      
})
const photo8 = new Photos({
    url: "https://i.imgur.com/Duer8cX.jpg",
    caption: "Hello There"      
})

const photographer1 = new Photographers({
    name: "Jose",
    city: "Atlanta",
    contact: 6786151482,
    about: "I love street photography, taking pictures in Atlanta can show someones talent in the background!",
    portfolio: [photo1, photo2, photo3]
})
const photographer2 = new Photographers({
    name: "Eric",
    city: "Dunwoody",
    contact: 7702943659,
    about: "I enjoy taking my camera everywhere I go, you never know when you'll need it",
    portfolio: [photo4]
})
const photographer3 = new Photographers({
    name: "Samantha",
    city: "Sandy Springs",
    contact: 4042291933,
    about: "Long walks at the parks allows me to think of new ideas for my photography",
    portfolio: [photo5, photo8]
})
const photographer4 = new Photographers({
    name: "Adam",
    city: "Atlanta",
    contact: 6789093712,
    about: "I love to see my clients reactions whenever they recieve my pictures!",
    portfolio: [photo6, photo7]
})


const a = new Category({
    name: "Events",
    photo_url: ('https://i.imgur.com/4Gn1dvc.jpg'),
    photographers: [photographer1, photographer2]
})
const b = new Category({
    name: "Portrait",
    photo_url: ('https://i.imgur.com/IE6hu1B.jpg'),
    photographers: [photographer2]
})
const c = new Category({
  name: "Pets",
  photo_url: ('https://i.imgur.com/MZCEhN8.jpg'),
  photographers: [photographer3, photographer4]
})
const d = new Category({
  name: "Models",
  photo_url: ('https://i.imgur.com/3hSDcbK.jpg'),
  photographers: [photographer3]
})


Category.remove({})
    
    .then(() => Photographers.remove({}))
    .then(() => Photos.remove({}))
    .then(() => Photos.insertMany([photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]))
    .then(() => Photographers.insertMany([photographer1, photographer2, photographer3, photographer4]))
    .then(() => a.save())
    .then(() => b.save())
    .then(() => c.save())
    .then(() => d.save())


console.log("Data Repopulated")









