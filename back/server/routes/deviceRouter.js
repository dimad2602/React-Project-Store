const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController') // указываем функции
const checkRole = require('../middleware/checkRoleMiddleware')// проверка роли

router.post('/', checkRole('ADMIN') /*от себя*/, deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne) //id который используется для возможности вывода 1

module.exports = router
