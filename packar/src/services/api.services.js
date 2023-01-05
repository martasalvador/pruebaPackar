import axios from 'axios'

class ApiService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://api.thecatapi.com/v1/images/search`
        })

    }

    getOneCat() {
        return this.api.get('')
    }
}

const apiService = new ApiService()

export default apiService