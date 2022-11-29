const uuid = require('uuid') // генератор id которые не будут повторятся
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1 //дефолтная страница = 1
        limit = limit || 9 // лимит не указан тогда = 9
        let offset = page * limit - limit // отступ первых 9 товаров
        let devices;
        // фильтрация
        if (!brandId && !typeId) {
            // findAndCountAll нужеен для пагинации
            devices = await Device.findAndCountAll({limit, offset}) // запрос к базе
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params // получаем id
        const device = await Device.findOne(
            {//условие поиска
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}] // нам бы хотелось увидить информацию
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()