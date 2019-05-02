const Photos = require("../models/Photos");
const Photographers = require("../models/Photographers");

const photoController = {
  // INDEX
  index: function(req, res) {
    Photos.find().then(photo => {
      res.render("photo/index", { photo });
    });
  },

  // NEW
  new: function(req, res) {
    res.render("photo/new");
  },
  
  // SHOW
  show: function(req, res) {
    let proId =req.params.proId
    let catId =req.params.id
    Photos.findById(req.params.photoId).then((photo)=>{
res.render("photo/show", {photo, proId, catId})
    })
  },

  // CREATE
  create: function(req, res) {
    Photographers.findById(req.params.proId).then((Photogra)=>{
      Photos.create(req.body).then((newPhoto)=>{
      Photogra.portfolio.push(newPhoto._id)
      Photogra.save()
      res.redirect(`/${req.params.id}/photographers/${req.params.proId}`)
      })
    })

    
  },
  

  // DELETE
  delete: function(req, res) {
    Photos.findByIdAndRemove(req.params.photoId).then(() => {
      res.redirect(`/${req.params.id}/photographers/${req.params.proId}`);
    });
  }
};

// EXPORTS
module.exports = photoController;
