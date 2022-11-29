const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController') // импортируем функции
const authMiddleware = require('../middleware/authMiddleware') // имполритуем authmiddle

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware /*проверяем на авторизованнность*/, userController.check)

module.exports = router
