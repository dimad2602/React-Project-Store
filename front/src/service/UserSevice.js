import {makeAutoObservable} from "mobx";

export default class UserService {
    constructor() {
        this._isAuth = false // меняем авторизацию
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}