import axios from 'axios'

import {API_URL} from '../../constants/index'

class landingpagerequest {
    getIdeaList(){
        return axios.get(`${API_URL}/metropolia/idea/list`)
    }
}

export default new landingpagerequest()