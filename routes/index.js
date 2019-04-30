let express = require('express')
let router = express.Router()
const catController = require('../controllers/catController')
const photogrController = require('../controllers/photogrController')
const photoController = require('../controllers/photoController')

// INDEX
router.get('/', catController.index)

// NEW
router.get('/new', catController.new)

// SHOW
router.get('/:id', catController.show)

// CREATE
router.post('/',catController.create)

// UPDATE
// router.put("/:id",catController.update)

// DELETE
router.delete('/:id',catController.delete)

// module.exports = router

// ------------------------------------------------------

// INDEX
router.get('/', photogrController.index)

// NEW
router.get('/new', photogrController.new)

// SHOW
router.get('/:id', photogrController.show)

// CREATE
router.post('/',photogrController.create)

// UPDATE
// router.put("/:id",photogrController.update)

// DELETE
router.delete('/:id',photogrController.delete)

// module.exports = router

// --------------------------------------------------------------

// INDEX
router.get('/', photoController.index)

// NEW
router.get('/new', photoController.new)

// SHOW
router.get('/:id', photoController.show)

// CREATE
router.post('/',photoController.create)

// UPDATE
// router.put("/:id",catController.update)

// DELETE
router.delete('/:id',photoController.delete)

module.exports = router