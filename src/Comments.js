import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {

    constructor() {
        super()
        this.state = {
            commentValue: '',
            comments: [],
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const comment = {
            timestamp: new Date(),
            text: this.state.commentValue,
        }
        this.setState({
            comments: [...this.state.comments,comment],
            commentValue: '',
        })
    }

    handleChange(event) {
        this.setState({commentValue: event.target.value})
    }

    renderComment(comment,i) {
        return <Comment key={i} comment={comment} />
    }

    render() {
        return (
            <div>
                <h4>Comments Section</h4>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea value={this.state.commentValue}  onChange={this.handleChange.bind(this)} required />
                    <input className="button" type="submit" value="Submit" />
                </form>
                <br/>
                {this.state.comments.map(this.renderComment)}
            </div>
        )
    }
}

export default Comments