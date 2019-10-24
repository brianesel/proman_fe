import React, { Component } from 'react'
import metroRequest from '../../js/requests/metropoliaRequests.js'

class IdeaList extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
        }
        this.loadIdeaList();
    }

    loadIdeaList(){
        metroRequest.getIdeaList()
        .then((res)=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="welcomePage_wrapper">
                Hello
            </div>
        )
    }
}

export default IdeaList