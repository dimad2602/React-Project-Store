import {makeAutoObservable} from "mobx";

export default class DeviceService {
    constructor() {
        this._types = [
            {id: 1, name: 'Первый тип'},
            {id: 2, name: 'Второй тип'},
            {id: 3, name: 'Третий тип'},
            {id: 4, name: 'Четвертый тип'},
        ]
        this._brands = [
            {id: 1, name: 'Бренд'},
            {id: 2, name: 'Второй Бренд'},
            {id: 3, name: 'Третий Бренд'},
            {id: 4, name: 'Четвертый Бренд'},
            // {id: 5, name: 'Второй Бренд'},
            // {id: 6, name: 'Второй Бренд'},
            // {id: 7, name: 'Второй Бренд'},
            // {id: 8, name: 'Второй Бренд'},
            // {id: 9, name: 'Второй Бренд'},
            // {id: 10, name: 'Второй Бренд'},
        ]
        this._devices = [
        {id: 1, name: 'devices', rating:"5"},
        {id: 2, name: 'devices', rating:"3"},
        {id: 3, name: 'Третий devices', rating:"4"},
        {id: 4, name: 'Четвертый devices'},
        {id: 5, name: 'devices', rating:"4"},
        {id: 6, name: 'devices'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}