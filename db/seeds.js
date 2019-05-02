const Category = require("../models/Category")
const Photographers = require('../models/Photographers')
const Photos = require('../models/Photos')


const photo1m = new Photos({
        url: "https://i.imgur.com/0Ut53pZ.jpg", //jose
    caption: "Hello There"   
})
const photo2m = new Photos({
    url: "https://i.imgur.com/ZJb8a60.jpg", //jose
    caption: "Hello There"    
})
const photo3m = new Photos({
    url: "https://i.imgur.com/MqvlpH0.jpg", //jose
    caption: "Hello There"      
})
const photo4m = new Photos({
    url: "https://i.imgur.com/esmYTJB.jpg", //jose
    caption: "Hello There"     
})
const photo5m = new Photos({
    url: "https://i.imgur.com/V2njqAc.jpg", //eric
    caption: "Hello There"     
})
const photo6m = new Photos({
    url: "https://i.imgur.com/3hSDcbK.jpg", //mary
    caption: "Hello There"     
})
const photo7m = new Photos({
    url: "https://i.imgur.com/HzYrzsO.jpg", //eric
    caption: "Hello There"      
})
const photo8m = new Photos({
    url: "https://i.imgur.com/6WGW8FQ.png", //adam
    caption: "Hello There"      
})
const photo9m = new Photos({
    url: "https://i.imgur.com/LaHzq1a.jpg", //adam
    caption: "Hello There"      
})
const photo1p = new Photos({
    url: "https://i.imgur.com/lu0kj0h.jpg", //eric
caption: "Hello There"   
})
const photo2p = new Photos({
url: "https://i.imgur.com/MZCEhN8.jpg", //adam
caption: "Hello There"    
})
const photo3p = new Photos({
url: "https://i.imgur.com/eqtz5wA.jpg", //mary
caption: "Hello There"      
})
const photo4p = new Photos({
url: "https://i.imgur.com/6yya1xC.jpg", //eric
caption: "Hello There"     
})
const photo1por = new Photos({
url: "https://i.imgur.com/5cy2e9R.jpg", //jose
caption: "Hello There"     
})
const photo2por = new Photos({
url: "https://i.imgur.com/g39a3DY.jpg", //jose
caption: "Hello There"     
})
const photo3por = new Photos({
url: "https://i.imgur.com/81uZTMt.jpg", //jose
caption: "Hello There"      
})
const photo4por = new Photos({
url: "https://i.imgur.com/Duer8cX.jpg", //adam
caption: "Hello There"      
})
const photo5por = new Photos({
url: "https://i.imgur.com/IE6hu1B.jpg", //eric
caption: "Hello There"     
})
const photo6por = new Photos({
url: "https://i.imgur.com/z2IRPd3.jpg", //mary
caption: "Hello There"      
})
const photo7por = new Photos({
url: "https://i.imgur.com/dQzxU39.jpg", //adam
caption: "Hello There"      
})
const photo8por = new Photos({
url: "https://i.imgur.com/5RpCZeQ.jpg", //eric
caption: "Hello There"      
})
const photo1e = new Photos({
url: "https://i.imgur.com/KggOKYW.jpg", //jose
caption: "Hello There"     
})
const photo2e = new Photos({
url: "https://i.imgur.com/uoF5uqs.jpg", //jose
caption: "Hello There"      
})
const photo3e = new Photos({
url: "https://i.imgur.com/uosR31J.jpg", //jose
caption: "Hello There"      
})
const photo4e = new Photos({
url: "https://i.imgur.com/4Gn1dvc.jpg", //mary
caption: "Hello There"     
})
const photo5e = new Photos({
url: "https://i.imgur.com/Duer8cX.jpg", //eric
caption: "Hello There"      
})
const photo6e = new Photos({
url: "https://i.imgur.com/Duer8cX.jpg", //adam
caption: "Hello There"      
})

const photographer1 = new Photographers({
    name: "Jose",
    city: "Atlanta",
    contact: 6786151482,
    about: "I love street photography, taking pictures in Atlanta can show someones talent in the background!",
    portfolio: [photo1m, photo2m, photo3m, photo4m, photo1por, photo2por, photo3por, photo1e, photo2e, photo3e]
})
const photographer2 = new Photographers({
    name: "Eric",
    city: "Dunwoody",
    contact: 7702943659,
    about: "I enjoy taking my camera everywhere I go, you never know when you'll need it",
    portfolio: [photo5m, photo7m, photo1p, photo4p, photo5por, photo8por, photo5e]
})
const photographer3 = new Photographers({
    name: "Mary Ann",
    city: "Sandy Springs",
    contact: 4042291933,
    about: "Long walks at the parks allows me to think of new ideas for my photography",
    portfolio: [photo6m, photo3p, photo6por, photo4e,]
})
const photographer4 = new Photographers({
    name: "Adam",
    city: "Atlanta",
    contact: 6789093712,
    about: "I love to see my clients reactions whenever they recieve my pictures!",
    portfolio: [photo8m, photo9m, photo2p, photo4por, photo7por, photo6e]
})


const a = new Category({
    name: "Events",
    photo_url: ('https://i.imgur.com/4Gn1dvc.jpg'),
    photographers: [photographer1, photographer2, photographer3, photographer4]
})
const b = new Category({
    name: "Portrait",
    photo_url: ('https://i.imgur.com/IE6hu1B.jpg'),
    photographers: [photographer2]
})
const c = new Category({
  name: "Pets",
  photo_url: ('https://i.imgur.com/MZCEhN8.jpg'),
  photographers: [photographer2, photographer3, photographer4]
})
const d = new Category({
  name: "Models",
  photo_url: ('https://i.imgur.com/3hSDcbK.jpg'),
  photographers: [photographer1, photographer2, photographer3, photographer4]
})


Category.remove({})
    
    .then(() => Photographers.remove({}))
    .then(() => Photos.remove({}))
    .then(() => Photos.insertMany([photo1m, photo2m, photo3m, photo4m, photo5m, photo6m, photo7m, photo8m, photo9m, photo1p, photo2p, photo3p, photo4p, photo1por, photo2por, photo3por, photo4por, photo5por, photo6por, photo7por, photo8por, photo1e, photo2e, photo3e, photo4e, photo5e, photo6e]))
    .then(() => Photographers.insertMany([photographer1, photographer2, photographer3, photographer4]))
    .then(() => a.save())
    .then(() => b.save())
    .then(() => c.save())
    .then(() => d.save())


console.log("Data Repopulated")









