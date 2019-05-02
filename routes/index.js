let express = require('express')
let router = express.Router()
const catController = require('../controllers/catController')
const photogrController = require('../controllers/photogrController')
const photoController = require('../controllers/photoController')

// INDEX CAT
router.get('/', catController.index)
// INDEX CAT
router.get('/photos', photoController.index)


// INDEX PRO
router.get('/photographers/', photogrController.index)

// NEW CAT
router.get('/new', catController.new)

// DELETE CAT
router.delete('/:id',catController.delete)

// SHOW PRO
router.get('/:id/photographers/:proId', photogrController.show)
 
// create pro
router.post('/:id/new', photogrController.create)


// SHOW CAT
router.get('/:id', catController.show)

// CREATE  CAT
router.post('/',catController.create)

// EDIT PRO
router.get("/:id/photographers/:proId/edit", photogrController.edit)

// UPDATE PRO
router.put("/:id/photographers/:proId",photogrController.update)

// DELETE PRO
router.delete('/:id/photographers/:proId',photogrController.delete)

// CREATE PHOTOS
router.post('/:id/photographers/:proId/photos/new',photoController.create)

// SHOW PHOTOS
router.get('/:id/photographers/:proId/photos/:photoId', photoController.show)

// DELETE
router.delete('/:id/photographers/:proId/photos/:photoId', photoController.delete)


// ------------------------------------------------------




// // NEW
// router.get('/photographers/new', photogrController.new)


// // CREATE
// router.post('/photographers/',photogrController.create)



// // module.exports = router

// --------------------------------------------------------------

// // INDEX
// router.get('/', photoController.index)

// // NEW
// router.get('/new', photoController.new)



// // UPDATE
// // router.put("/:id",catController.update)



module.exports = router