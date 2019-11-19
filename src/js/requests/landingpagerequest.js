import axios from 'axios'

import {API_URL} from '../../constants/index'

class landingpagerequest {
    sendMessage(messagesContent){
        return axios.post(`${API_URL}/mail/sendtoMe`, {
            subject: messagesContent.mailSubject,
            text: "Sender name:"+ messagesContent.senderName + "from:"+ messagesContent.senderEmail + "Phone number" + messagesContent.phoneNumber + "Messages:" + messagesContent.message
        })
    }
}

export default new landingpagerequest()