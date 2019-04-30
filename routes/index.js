let express = require('express')
let router = express.Router()
const catController = require('../controllers/catController')
const photogrController = require('../controllers/photogrController')
const photoController = require('../controllers/photoController')

// INDEX CAT
router.get('/', catController.index)

// INDEX PRO
router.get('/photographers/', photogrController.index)

// NEW CAT
router.get('/new', catController.new)

// SHOW PRO
router.get('/:id/photographers/:proId', photogrController.show)

// SHOW CAT
router.get('/:id', catController.show)

// CREATE  CAT
router.post('/',catController.create)

// EDIT PRO
router.get("/:id/photographers/:proId/edit",photogrController.edit)

// UPDATE
router.put("/:id/photographers/:proId",photogrController.update)

// UPDATE CAT
// router.put("/:id",catController.update)

//   CAT
router.delete('/:id',catController.delete)

// module.exports = router

// ------------------------------------------------------




// // NEW
// router.get('/photographers/new', photogrController.new)


// // CREATE
// router.post('/photographers/',photogrController.create)


// // DELETE
// router.delete('/photographers/:proId',photogrController.delete)

// // module.exports = router

// --------------------------------------------------------------

// // INDEX
// router.get('/', photoController.index)

// // NEW
// router.get('/new', photoController.new)

// // SHOW
// router.get('/:id', photoController.show)

// // CREATE
// router.post('/',photoController.create)

// // UPDATE
// // router.put("/:id",catController.update)

// // DELETE
// router.delete('/:id',photoController.delete)

module.exports = router