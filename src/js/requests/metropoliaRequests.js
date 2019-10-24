import axios from 'axios'

const API_URL= 'http://localhost:1609'

class landingpagerequest {
    getIdeaList(){
        return axios.get(`${API_URL}/metropolia/idea/list`)
    }
}

export default new landingpagerequest()