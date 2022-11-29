const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController') // указываем функции
const checkRole = require('../middleware/checkRoleMiddleware')// проверка роли

router.post('/', checkRole('ADMIN') /*от себя*/, brandController.create)
router.get('/', brandController.getAll)

module.exports = router