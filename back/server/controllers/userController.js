const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')// хеширование паролей
const jwt = require('jsonwebtoken') //
const {User, Build} = require('../models/models') // модель пользователя и карзины

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body // не самая идеальная авторизация/ есть видео
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5) //хешируем пароль
        const user = await User.create({email, role, password: hashPassword})
        const build = await Build.create({userId: user.id}) // карзина пользователя
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body // деструктуризация
        const user = await User.findOne({where: {email}}) //проверяем наличие пользователя
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password) // сравнение паролей, в виде хеша
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        //генерируем новый токен и отправляем обратно его на клиент
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()