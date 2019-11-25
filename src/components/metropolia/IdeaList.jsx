import React, { Component } from 'react'
import metroRequest from '../../js/requests/metropoliaRequests.js'

class IdeaList extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            ideaList: []
        }
        this.loadIdeaList();
    }

    loadIdeaList(){
        metroRequest.getIdeaList()
        .then((res)=>{
            console.log(res.data)
            this.setState({
                ideaList: res.data
            });
            console.log(this.state.ideaList);
        })
    }

    render() {
        this.idea_item = Object.keys(this.state.ideaList).map((ideakey)=>{
            this.state.ideaList[ideakey].email? this.idea_item_email_list = Object.keys(this.state.ideaList[ideakey].email).map((emailkey)=>{
                return <div className="email_item">{this.state.ideaList[ideakey].email[emailkey]}</div>
            }): this.idea_item_email_list = null;
            return(<div className="idea_item col-6">
                <div className="idea_item_avatar"><img alt="idea avatar"/></div>
                <p className="idea_item_name">{this.state.ideaList[ideakey].name}</p>
                <p className="idea_item_description">
                    <p>Description:</p>
                    {this.state.ideaList[ideakey].description}
                </p>
                <div className="member_list">
                    <p>Member list:</p>
                    {this.idea_item_email_list?this.idea_item_email_list:null}
                </div>
            </div>)
        })
        return (
            <div className="welcomePage_wrapper">
                <div className="idea_list row">
                    {this.idea_item? this.idea_item:"not available"}
                </div>
            </div>
        )
    }
}

export default IdeaList