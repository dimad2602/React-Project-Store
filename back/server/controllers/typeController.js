const {Type} = require('../models/models') //добавление в бд объектов
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body // деструктуризация
        const type = await Type.create({name}) //из тела запроса извлекаем название этого типа, затем создаем этот тип
        return res.json(type) //передаем объект где указываем нужные поля
    }

    async getAll(req, res) {
        const types = await Type.findAll() //функция для возврата всех записей
        return res.json(types) //возвращаем весь массив объектов
    }

}

module.exports = new TypeController()