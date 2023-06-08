const express = require("express")
const router = express.Router()

const oglasiController = require('../controllers/oglasi.controller')

router.get("/", oglasiController.getAll)
router.get("/prikazoglasi", oglasiController.getPrigazOglasi)


module.exports = router