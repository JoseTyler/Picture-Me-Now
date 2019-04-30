let express = require('express')
let router = express.Router()
const catController = require('../controllers/catController')

// INDEX
router.get('/', catController.index)


// NEW
router.get('/new', catController.new)


// SHOW
router.get('/:id', catController.show)


// CREATE
router.post('/',catController.create)


// EDIT
// router.get("/:id/edit",catController.edit)


// UPDATE
// router.put("/:id",catController.update)

// PUT
// router.get('/:id',catController.put)

// DELETE
router.delete('/:id',catController.delete)

module.exports = router
