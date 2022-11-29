const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController') // указываем функции
const checkRole = require('../middleware/checkRoleMiddleware')// проверка роли

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router