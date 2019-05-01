const Photographers = require("../models/Photographers");
const Category = require('../models/Category')


const photogrController = {
  // INDEX
  index: function (req, res) {
    Photographers.find().then(Pro => {
      res.render("photogr/index", { Pro });
    });
  },

  // NEW
  new: function (req, res) {
    res.render("photogr/new");
  },

  // SHOW
  show: function (req, res) {
    Photographers.findById(req.params.proId).populate('portfolio').then(Pro => {
      console.log(Pro)
      res.render("photogr/show", { Pro: Pro, catId : req.params.id });
    });
  },

  // CREATE
  create: function (req, res) {
    console.log(req);
    Category.create(req.body).then(() => res.redirect("/"));
  },

  // UPDATE
  update: function (req, res) {
    Photographers.findByIdAndUpdate(req.params.proId, req.body, { new: true }).then((fixed) => {
      console.log(fixed)
      res.redirect(`/${req.params.id}/photographers/${req.params.proId}`);
    });
  },

  // EDIT
  edit: function (req, res) {
    Photographers.findById(req.params.proId).then((photographers) => {
      res.render("photogr/update", { photographers: photographers, catId: req.params.id, proId: req.params.proId })
    });
  },

  // DELETE
  delete: function (req, res) {
    Photographers.findByIdAndRemove(req.params.proId).then(() => {
      res.redirect("/");
    });
  }

};


// EXPORTS
module.exports = photogrController;
