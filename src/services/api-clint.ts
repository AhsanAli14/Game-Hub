import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '20faad12b75748d4a07565450c779ba0'
    }
})