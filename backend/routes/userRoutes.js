const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, dataUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware');


router.post('/', registrarUser) // NO ES NECESARIO PROTEGER
router.post('/login', loginUser) // NO ES NECESARIO PROTEGER
router.get('/data', protect, dataUser) // SE DEBE PROTEGER

module.exports = router
