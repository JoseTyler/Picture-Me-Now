const Category = require("../models/Category")

let newCats = [
  {
    name: "Portrait",
    photographers:  []
  },
  {
    name: "Events",
    photographers:  []
  },
  {
    name: "Models",
    photographers:  []
  },
  {
    name: "Pets",
    photographers:  []
  }
]
Category.remove({})
.then(Category.create(newCats))
.then(newCats => {
  console.log('Reseeded', newCats)
})
console.log("done")
