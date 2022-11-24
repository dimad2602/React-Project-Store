require('dotenv').config() //
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js') // импортируем модели
const cors = require('cors') //запросы с браузера
const fileUpload = require('express-fileupload')//пакет для файлов(изображений)
const router = require('./routes/index') // сообщаем о router
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require("path"); // импортируем middleware / нужно и для статик


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static'))) // отображение картинок
app.use(fileUpload({})) //регистрируем пакет
app.use('/api', router) //указывает url для router

//обработка ошибок, Middleware обязательно в самом конце
app.use(errorHandler)

const start = async () => { // и включение сервера
    try {
        await sequelize.authenticate() // подключение к бд
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()